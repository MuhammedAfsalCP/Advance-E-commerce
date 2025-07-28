import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Set your base API URL here
const BASE_URL = "http://127.0.0.1:8000/orders";

// Helper to get token
const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return { Authorization: `Bearer ${token}` };
};

export const fetchNotifications = createAsyncThunk("notifications/fetchAll", async () => {
  const response = await axios.get(`${BASE_URL}/notifications/`, {
    headers: getAuthHeader(),
  });
  return response.data;
});

export const fetchUnreadCount = createAsyncThunk("notifications/unreadCount", async () => {
  const response = await axios.get(`${BASE_URL}/notifications/unread-count/`, {
    headers: getAuthHeader(),
  });
  return response.data.unread_count;
});

export const markAsRead = createAsyncThunk("notifications/mark-all-read", async () => {
  await axios.post(`${BASE_URL}/notifications/mark-all-read/`, null, {
    headers: getAuthHeader(),
  });
  return id;
});

const NotificationSlice = createSlice({
  name: "notifications",
  initialState: {
    list: [],
    unreadCount: 0,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(fetchUnreadCount.fulfilled, (state, action) => {
        state.unreadCount = action.payload;
      })
      .addCase(markAsRead.fulfilled, (state, action) => {
        const index = state.list.findIndex((n) => n.id === action.payload);
        if (index !== -1) state.list[index].is_read = true;
        state.unreadCount -= 1;
      });
  },
});

export default NotificationSlice.reducer;
