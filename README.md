# 🐾 Pet Food E-Commerce Platform

> ⚠️ **Note:** This API may experience **lag** due to the use of a **Vercel-hosted PostgreSQL database**, which can introduce cold starts and performance delays. For stable production deployments, consider alternatives like **Supabase**, **Railway**, or **Render**.

---

## 🚀 Features

- 🛒 User & Admin Auth (JWT)
- 📦 Product Browsing, Cart, and Orders
- 💳 Razorpay Payment Integration
- 🔔 Real-time WebSocket Notifications
- 🧑‍💼 Admin Product Management
- 🌐 PostgreSQL DB (Vercel)
- 🖥️ Responsive Frontend with Tailwind
- 🔐 Role-Based Permissions & Secure APIs

---

## 🧱 Tech Stack

**Frontend:**
- React + Redux Toolkit
- React Router DOM
- Tailwind CSS

**Backend:**
- Django + Django REST Framework (DRF)
- Django Channels for WebSockets
- Daphne ASGI Server
- PostgreSQL (Vercel-hosted)
- JWT for Auth

---

## ⚙️ Backend Setup

### 1. Clone & Navigate to Backend

```bash
git clone https://github.com/MuhammedAfsalCP/Advance-E-commerce.git
cd Advance-Ecommerce/Pet-Food-Ecommerce-Backend/petfood
```

### 2. Create & Activate Virtual Environment

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Run Migrations

```bash
python manage.py migrate
```

### 5. Start Server Using Daphne (Not runserver)

```bash
daphne petfood.asgi:application
```

### ✅ Predefined Admin Login

> No need to manually create superuser.

```
Username: admin
Password: admin123
```

---

## 💻 Frontend Setup

### 1. Navigate to Frontend Folder

```bash
cd ../Petfood_front_end-Ecommerce
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm start
```

---

## 🔌 WebSocket Notifications

- **WebSocket URL:**
  ```
  ws://localhost:8000/ws/notifications/?token=<JWT_TOKEN>
  ```

- **Django Settings (`settings.py`)**

```python
ASGI_APPLICATION = 'petfood.asgi.application'

CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels.layers.InMemoryChannelLayer"
    },
}
```

> Replace `'petfood'` with your Django project name if different.

---

## 📦 Deployment Tips

- ✅ Use **Daphne**, not `runserver`, for production.
- ⚠️ Avoid **Vercel PostgreSQL** for real-time or high-frequency APIs.
- ✅ Enable proper **CORS** settings for frontend-backend communication.
- ✅ Consider stack with **Nginx + Gunicorn + Daphne + Redis** for production scaling.

---

## 👤 Author

**Muhammed Afsal CP**

- GitHub: [@MuhammedAfsalCP](https://github.com/MuhammedAfsalCP)
- LinkedIn: [in/muhammed-afsal-cp](https://www.linkedin.com/in/muhammed-afsal-cp)

---
