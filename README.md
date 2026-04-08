# 🎵 Spotify Backend Clone

This project is a **Spotify-like backend service** built using **Node.js**, **Express**, and **MongoDB**.
It provides APIs for **user authentication** and **music upload/management**, forming the server-side foundation of a music streaming application.

---

## 🚀 Features

* User Registration
* User Login Authentication (JWT-based)
* Secure Password Hashing
* Music Upload API
* MongoDB Database Integration
* RESTful API Architecture
* Error Handling Middleware

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **JWT (JSON Web Token)**
* **bcrypt**
* **Multer** (for file uploads)
* **CORS**

---

## 📁 Project Structure

```
server-side-development/
│
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── middleware/
│
├── server.js          # Main server entry point
├── package.json       # Dependencies and scripts
├── package-lock.json
└── .gitignore
```

---

## ⚙️ Installation

### 1. Clone the repository

```
git clone https://github.com/your-username/server-side-development.git
```

### 2. Navigate into the project

```
cd server-side-development
```

### 3. Install dependencies

```
npm install
```

---

## ▶️ Running the Server

```
npm start
```

OR (if using nodemon)

```
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

## 🔐 Authentication APIs

### Register User

```
POST /api/register
```

Request Body:

```
{
  "username": "aditya",
  "email": "aditya@gmail.com",
  "password": "123456"
}
```

---

### Login User

```
POST /api/login
```

Response:

```
{
  "token": "JWT_TOKEN"
}
```

This token must be included in protected routes:

```
Authorization: Bearer <token>
```

---

## 🎶 Music Upload API

### Upload Music

```
POST /api/upload
```

Form Data:

```
song: file
title: string
artist: string
```

This endpoint allows users to upload music files to the server.

---

## 🌐 Environment Variables

Create a `.env` file in the root directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 🧪 Testing the API

You can test APIs using:

* Postman


Example:

```
POST http://localhost:5000/api/login
```

---

## 📌 Future Improvements

* Add playlist feature
* Add song streaming
* Add search functionality
* Add user profile management
* Deploy backend to cloud (Render / AWS)

---

## 👨‍💻 Author

**Aditya Singh Tomar**

Backend Developer | MERN Stack Develeoper

---

## 📄 License

This project is licensed under the MIT License.
