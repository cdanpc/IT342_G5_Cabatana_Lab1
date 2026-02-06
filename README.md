# IT342_G5_Cabatana_Lab1

## Full-Stack User Authentication System

A production-ready, industry-standard authentication system built with **Spring Boot** backend and **React with TypeScript** frontend, featuring JWT authentication, BCrypt password encryption, and protected routes.

---

## 🎯 Project Overview

This project demonstrates a complete full-stack application following best practices and industry standards:

- **RESTful API** design
- **JWT-based authentication**
- **Layered architecture** (Controller → Service → Repository)
- **Secure password encryption** using BCrypt
- **Protected routes** with authentication guards
- **Type-safe frontend** with TypeScript
- **Comprehensive error handling**
- **Input validation** on both frontend and backend
- **Reusable and scalable code structure**

---

## 📚 Documentation

### Setup & Configuration
- 📖 [**Setup Guide**](./docs/SETUP_GUIDE.md) - Complete installation and setup instructions
- 📋 [**API Reference**](./docs/API_REFERENCE.md) - Detailed API endpoints documentation
- ✅ [**Testing Guide**](./docs/TESTING_GUIDE.md) - Testing workflows and checklists

### Backend Fixes & Updates
- 🔧 [**Quick Reference**](./docs/QUICK_REFERENCE.md) - Backend fixes summary (START HERE)
- 📊 [**Fixes Summary**](./docs/FIXES_SUMMARY.md) - Complete overview of all fixes
- 📝 [**Code Comparison**](./docs/CODE_COMPARISON.md) - Before/after code changes
- 🔍 [**Backend Fixes**](./docs/BACKEND_FIXES.md) - Detailed technical explanations
- ⚡ [**Quick Fix Guide**](./docs/QUICK_FIX.md) - Troubleshooting commands

---

## 🏗️ Technology Stack

### Backend
- **Spring Boot 4.0.2** (Java 21)
- **Spring Security** with JWT
- **Spring Data JPA**
- **MySQL Database**
- **BCrypt Password Encoder**
- **Maven** build tool
- **Lombok** for cleaner code

### Frontend
- **React 19** with TypeScript
- **React Router v6** for navigation
- **Axios** for HTTP requests
- **Context API** for state management
- **Vite** for fast development

---

## ✨ Features

### Backend API
- ✅ `POST /api/auth/register` - User registration with validation
- ✅ `POST /api/auth/login` - User authentication with JWT generation
- ✅ `GET /api/user/me` - Get current user profile (Protected)

### Frontend Pages
- ✅ **Login Page** - User authentication
- ✅ **Registration Page** - New user registration
- ✅ **Dashboard** - Protected user profile page
- ✅ **Logout** - Clear authentication state

### Security Features
- ✅ JWT token-based authentication
- ✅ BCrypt password hashing
- ✅ Protected route guards
- ✅ CORS configuration
- ✅ Request/Response interceptors
- ✅ Token expiration handling

---

## 🚀 Quick Start

### Prerequisites
- Java 17
- Node.js 18+
- MySQL 8.0+
- Maven 3.9+

### 1. Database Setup
```sql
CREATE DATABASE user_management_db;
```

### 2. Start Backend
```bash
cd backend
mvnw spring-boot:run
```
Backend runs on: http://localhost:8080

### 3. Start Frontend
```bash
cd web
npm install
npm run dev
```
Frontend runs on: http://localhost:5173

---

## 📁 Project Structure

```
IT342_G5_Cabatana_Lab1/
├── backend/
│   ├── src/main/java/com/project/backend/
│   │   ├── config/           # Security & Global config
│   │   ├── controller/       # REST Controllers
│   │   ├── dto/              # Data Transfer Objects
│   │   ├── model/            # JPA Entities
│   │   ├── repository/       # Data Access Layer
│   │   └── service/          # Business Logic
│   └── src/main/resources/
│       └── application.properties
├── web/
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── contexts/         # React contexts
│   │   ├── pages/            # Page components
│   │   ├── services/         # API services
│   │   └── App.tsx          # Main app with routing
│   └── package.json
├── docs/
│   ├── SETUP_GUIDE.md       # Setup instructions
│   ├── API_REFERENCE.md     # API documentation
│   └── TESTING_GUIDE.md     # Testing procedures
└── README.md
```

---

## 🔐 API Endpoints

### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Get Current User (Protected)
```http
GET /api/user/me
Authorization: Bearer {jwt_token}
```

See [API Reference](./docs/API_REFERENCE.md) for complete documentation.

---

## 🧪 Testing

```bash
# Test registration
curl -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"firstName":"John","lastName":"Doe","email":"john@example.com","password":"test123"}'

# Test login
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"test123"}'

# Test protected endpoint
curl -X GET http://localhost:8080/api/user/me \
  -H "Authorization: Bearer YOUR_TOKEN"
```

See [Testing Guide](./docs/TESTING_GUIDE.md) for comprehensive testing procedures.

---

## 🎨 UI Screenshots

### Login Page
Clean, modern authentication interface with form validation.

### Registration Page
Multi-field registration with real-time validation.

### Dashboard
Protected user profile page with logout functionality.

---

## 🔧 Configuration

### Backend Configuration
Edit `backend/src/main/resources/application.properties`:
```properties
# Database
spring.datasource.url=jdbc:mysql://localhost:3306/user_management_db
spring.datasource.username=root
spring.datasource.password=your_password

# JWT
jwt.secret=your_secret_key
jwt.expiration=86400000

# Server
server.port=8080
```

### Frontend Configuration
Edit `web/src/services/api.ts`:
```typescript
const API_URL = 'http://localhost:8080/api';
```

---

## 📊 Database Schema

### Users Table
| Column | Type | Constraints |
|--------|------|-------------|
| id | BIGINT | PRIMARY KEY, AUTO_INCREMENT |
| first_name | VARCHAR(50) | NOT NULL |
| last_name | VARCHAR(50) | NOT NULL |
| email | VARCHAR(100) | NOT NULL, UNIQUE |
| password | VARCHAR(255) | NOT NULL |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP |

---

## 🏆 Best Practices Implemented

### Backend
✅ Layered architecture (Controller → Service → Repository)  
✅ DTOs for request/response separation  
✅ Global exception handling  
✅ Input validation with Bean Validation  
✅ JWT authentication  
✅ BCrypt password hashing  
✅ CORS configuration  

### Frontend
✅ Component-based architecture  
✅ Reusable components  
✅ Context API for state management  
✅ Protected routes  
✅ Type safety with TypeScript  
✅ API service layer  
✅ Error handling  
✅ Loading states  

---

## 🎓 Learning Outcomes

This project demonstrates proficiency in:

1. **Full-stack development** - Backend and frontend integration
2. **RESTful API design** - Industry-standard endpoints
3. **Authentication & Authorization** - JWT implementation
4. **Security** - Password hashing, token validation
5. **Database design** - Proper schema and relationships
6. **Modern frameworks** - Spring Boot 4, React 19
7. **TypeScript** - Type-safe code
8. **Git version control** - Professional workflow

---

## 👥 Team

**IT342 - Group 5**
- Group Leader: Cabatana

---

## 📝 License

This project is for educational purposes only.

---

## 🙏 Acknowledgments

- Spring Boot Documentation
- React Documentation
- JWT.io
- MySQL Documentation

---

## 📞 Support

For questions or issues:
1. Review the [Setup Guide](./docs/SETUP_GUIDE.md)
2. Check the [API Reference](./docs/API_REFERENCE.md)
3. Follow the [Testing Guide](./docs/TESTING_GUIDE.md)
4. Check console logs for errors

---

**Happy Coding! 🚀**
