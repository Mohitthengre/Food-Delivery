# 🍔 QuickBite - Food Delivery Web Application

QuickBite is a full-stack Food Delivery Web Application built using the MERN Stack. It enables users to browse food items, manage their cart, place orders, and securely authenticate. The project also includes a dedicated Admin Panel for managing food items and customer orders.

---

<div align="center">

## A Full-Stack Food Delivery Web Application built using the MERN Stack

Browse delicious food, securely authenticate users, manage carts and orders, and control everything through a dedicated admin dashboard.

<br>

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-22-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge&logo=jsonwebtokens)
![Cloudinary](https://img.shields.io/badge/Cloudinary-Image_Storage-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![Render](https://img.shields.io/badge/Deploy-Render-46E3B7?style=for-the-badge&logo=render)

</div>

---

# 🚀 Live Demo

### 🌐 Frontend

https://food-delivery-web-wqgl.onrender.com

### ⚙️ Backend API

https://food-delivery-sseg.onrender.com

### 🛠️ Admin Panel

https://food-delivery-admin-drks.onrender.com

---

# ✨ Features

## 👤 User Features

- User Registration & Login
- JWT Authentication
- Browse Food Menu
- Category Filtering
- Add / Remove Cart Items
- Responsive Design


## 🛠️ Admin Features

- Secure Admin Dashboard
- Add Food Items
- Upload Images (Cloudinary)
- Delete Food Items


---

# 📸 Screenshots

Food-Delivery/
│
├── screenshots/
│   ├── home.png
│   ├── menu.png
│   ├── cart.png
│   ├── login.png
│   ├── admin-dashboard.png
│   ├── add-food.png
│   └── orders.png
```

## 🏠 Home Page

![Home Page](https://github.com/Mohitthengre/Food-Delivery/blob/main/screenshots/home.png)

---

## 🍽️ Menu

![Menu](https://github.com/Mohitthengre/Food-Delivery/blob/main/screenshots/menu.png)

---

## 🛒 Cart

![Cart](https://github.com/Mohitthengre/Food-Delivery/blob/main/screenshots/cart.png)

---

## 🔐 Login

![Login](https://github.com/Mohitthengre/Food-Delivery/blob/main/screenshots/login.png)

---

## 🛠️ Admin Dashboard

![Admin Dashboard](https://github.com/Mohitthengre/Food-Delivery/blob/main/screenshots/admin-dashboard.png)

---

# 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- React Router DOM
- Axios
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt
- Multer
- Cloudinary

### Database

- MongoDB Atlas

### Deployment

- Render

---

# 📂 Project Structure

```text
Food-Delivery/
│
├── frontend/
├── backend/
├── admin/
├── screenshots/
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Mohitthengre/Food-Delivery.git

cd Food-Delivery
```

---

## Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file inside the backend folder.

```env
PORT=4000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLOUDINARY_NAME=your_cloudinary_name

CLOUDINARY_API_KEY=your_cloudinary_api_key

CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
```

Run Backend

```bash
npm start
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## Admin Panel Setup

```bash
cd admin

npm install

npm run dev
```

---

# 📦 API Endpoints

## Authentication

```
POST /api/user/register
POST /api/user/login
```

## Food

```
GET  /api/food/list
POST /api/food/add
POST /api/food/remove
```

## Cart

```
POST /api/cart/add
POST /api/cart/remove
POST /api/cart/get
```
---

# 🔐 Environment Variables

Backend `.env`

```env
PORT=4000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLOUDINARY_NAME=your_cloudinary_name

CLOUDINARY_API_KEY=your_cloudinary_api_key

CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
```

---

# 🔮 Future Improvements

- Online Payment Integration
- Email Notifications
- Search Functionality
- Wishlist
- User Profile
- Ratings & Reviews
- Order Tracking
- Dark Mode

---

# 🤝 Contributing

1. Fork the repository.

2. Create a new branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Added feature"
```

4. Push to your branch.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

# 👨‍💻 Author

**Mohit Thengre**

GitHub:

https://github.com/Mohitthengre

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.
