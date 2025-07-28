# 🐾 Pet Food E-Commerce Platform

> ⚠️ **Note:** The API may experience **occasional lag** because the PostgreSQL database is hosted on **Vercel**'s serverless environment, which may have cold start delays or throttling under load. For production, it's recommended to use a more stable PostgreSQL host like **Supabase**, **Railway**, or **Render**.

---

## 🚀 Features

- 🛒 User & Admin Auth (JWT)
- 📦 Product Browsing, Cart, and Orders
- 🔔 Real-time WebSocket Notifications
- 🧑‍💼 Admin Product Management
- 🌐 PostgreSQL DB (Vercel)
- 🖥️ Responsive Frontend with Tailwind
- 🔐 Role-Based Permissions & Secure APIs

---

## 🧱 Tech Stack

**Frontend:**
- React + Redux Toolkit
- React Router
- Tailwind CSS

**Backend:**
- Django + DRF
- Django Channels (WebSocket)
- Daphne (ASGI server)
- PostgreSQL (Vercel-hosted)
- JWT Auth

---

## ⚙️ Backend Setup

1. **Install dependencies**

```bash
pip install -r requirements.txt
```

2. **Run migrations**

```bash
python manage.py migrate
```

3. **Start server using Daphne**

```bash
daphne petfood.asgi:application
```

---

## 💻 Frontend Setup

```bash
cd Petfood_front_end-Ecommerce
npm install
npm start
```

---

## 🔌 WebSocket Notifications

- **WebSocket URL:**
  ```
  ws://localhost:8000/ws/notifications/?token=<JWT_TOKEN>
  ```

- Add this to `settings.py`:
```python
ASGI_APPLICATION = 'your_project.asgi.application'

CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels.layers.InMemoryChannelLayer"
    },
}
```

---


## ⚙️ Deployment Tips

- Use **Daphne**, not `runserver`, for production.
- Avoid Vercel DB for high-frequency APIs.
- Use proper CORS settings for frontend-backend integration.
- Consider Gunicorn + Nginx + Daphne + Redis for scaling.

---

## 👤 Author

[Muhammed Afsal CP](https://github.com/MuhammedAfsalCP)
