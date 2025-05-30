# 🛠️ Node.js Authentication Backend

## 📌 Introduction

Welcome to the **Node.js Authentication Backend** repository. This project is built using **Node.js** and serves as the backend for handling essential **authentication features**, including:

- ✅ User Signup
- ✅ User Signin
- ✅ User Logout
- ✅ Auth Check & Middleware
- ✅ Email Verification & Notifications

## 📧 Email Service Integration

Initially, this project used **Mailtrap** for email testing. However, due to service limitations, it was switched to **[Brevo (formerly Sendinblue)](https://www.brevo.com/)** for a more robust and production-ready email solution. The current implementation uses **Brevo's official SDK** for sending transactional emails such as welcome messages, password resets, and verification codes.

## 🗂️ Features

- Secure JWT-based authentication
- Email services via Brevo SDK
- Middleware to protect routes
- Environment variable support using `.env`
- Organized project structure with routes, controllers, and services

## 🚀 Getting Started

To run this project locally:

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
npm install
npm run dev
