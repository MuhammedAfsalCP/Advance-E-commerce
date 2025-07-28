import { useEffect, useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { fetchUnreadCount } from "../../Redex/NotificationSlice";
import { useDispatch } from "react-redux";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [socket, setSocket] = useState(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
const dispatch =useDispatch()
  const fetchNotifications = async () => {
    if (!token) return;

    try {
      const response = await fetch("http://localhost:8000/orders/notifications/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setNotifications(data);
      } else {
        // console.error("❌ Failed to fetch notifications");
      }
    } catch (error) {
    //   console.error("❌ Fetch error:", error);
    }
  };

  const connectWebSocket = () => {
    if (!token) return;

    const ws = new WebSocket(`ws://localhost:8000/ws/notifications/?token=${token}`);

    ws.onopen = () => {
    //   console.log("🟢 WebSocket connected");
      setSocket(ws);
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setNotifications((prev) => [
          {
            message: data.message,
            timestamp: data.timestamp || new Date().toISOString(),
          },
          ...prev,
        ]);
        dispatch(fetchUnreadCount());
      } catch (e) {
        // console.error("❌ Invalid WebSocket message:", e);
      }
    };

    ws.onerror = (err) => {
    //   console.error("❌ WebSocket error:", err);
    };

    ws.onclose = () => {
    //   console.log("🔴 WebSocket closed, reconnecting in 3s...");
      setTimeout(connectWebSocket, 3000);
    };
  };

  useEffect(() => {
    fetchNotifications();
    connectWebSocket();

    return () => {
      if (socket) socket.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-6 p-6 bg-white shadow-xl rounded-lg">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-600 hover:text-blue-800 font-medium mb-4"
      >
        <IoArrowBack className="mr-2 text-lg" />
        Back
      </button>

      <div className="flex items-center mb-4">
        <IoNotificationsOutline className="text-2xl text-blue-500 mr-2" />
        <h2 className="text-xl font-bold text-gray-800">Notifications</h2>
      </div>

      {notifications.length === 0 ? (
        <p className="text-gray-400 text-sm text-center py-10">You have no notifications yet.</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((note, index) => (
            <li
              key={index}
              className="border border-gray-200 rounded-md p-4 hover:bg-blue-50 transition duration-200"
            >
              <p className="text-gray-800 text-sm mb-1">🔔 {note.message}</p>
              <p className="text-xs text-gray-500">
                {new Date(note.created_at || note.timestamp).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
