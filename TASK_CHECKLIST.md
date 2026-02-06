# IT342_G5_Cabatana_Lab1 - Task Checklist

## 📋 Project Progress Tracker

---

## ✅ DONE

### Initial Setup & Infrastructure
- [x] **Initialize Git repository** - `06f11a2`
  - Created project structure
  - Initial commit with README

- [x] **Set up Web folder with Vite** - `6ccb4e4`
  - Initialized React + TypeScript + Vite project
  - Configured build tools and dependencies
  - Set up project structure

- [x] **Create project directories** - `e7010e9`
  - Added backend/ folder with Spring Boot structure
  - Added docs/ folder for documentation
  - Created TASK_CHECKLIST.md for progress tracking

### Backend Implementation
- [x] **Complete backend setup** - `d21858c`
  - Configured Spring Boot 4.0.2 with Java 17
  - Set up MySQL database connection
  - Implemented Spring Security with JWT authentication
  - Created user entity and repository
  - Implemented AuthService and UserService
  - Created REST API controllers (AuthController, UserController)
  - Configured CORS and security filters
  - Added global exception handling
  - Implemented BCrypt password encryption
  - Added input validation

### Frontend - Pages Implementation
- [x] **Add web pages structure** - `7497972`
  - Created pages/ folder
  - Set up routing structure
  - Added component organization

- [x] **Implement Login page** - `dac0288`
  - Created Login.tsx with form handling
  - Implemented login form validation
  - Added error message display
  - Integrated with AuthContext

- [x] **Implement Register page** - `28b7541`
  - Created Register.tsx with registration form
  - Added password confirmation validation
  - Implemented email format validation
  - Integrated with backend API

- [x] **Implement Logout functionality** - `0018e17`, `4915dfd`
  - Created Logout.tsx component
  - Implemented logout logic in AuthContext
  - Added token cleanup
  - Configured redirect to login

- [x] **Implement Dashboard page** - `dfa18d2`
  - Created Dashboard.tsx with user profile display
  - Added protected route implementation
  - Integrated user data fetching
  - Added logout button

### Frontend - Core Features
- [x] **Add mobile folder structure** - `4da6416`
  - Created mobile/ folder for future mobile app development
  - Organized project for multi-platform support

- [x] **Add documentation and features** - `2f89a29`
  - Created SYSTEM_DOCUMENTATION.md (500+ lines)
  - Created QUICK_START.md with setup guide
  - Created SYSTEM_STATUS.md with complete status report
  - Documented API endpoints
  - Added defense preparation guide
  - Created troubleshooting section

### Authentication System
- [x] **Implement JWT token generation** - `d21858c`
  - Created JwtService with token generation
  - Configured 24-hour token expiration
  - Implemented HS384 signing algorithm

- [x] **Create AuthContext for state management** - `dac0288`
  - Implemented global authentication state
  - Added login/register/logout methods
  - Created user state persistence

- [x] **Implement ProtectedRoute component** - `dfa18d2`
  - Created route guard for authenticated pages
  - Added automatic redirect to login
  - Integrated with AuthContext

- [x] **Set up Axios interceptors** - `dac0288`
  - Created api.ts with request/response interceptors
  - Auto-inject JWT token in headers
  - Handle 401 errors with auto-logout

### Styling & UI
- [x] **Design authentication pages** - `dac0288`, `28b7541`
  - Created Auth.css with gradient design
  - Added responsive layout
  - Implemented loading states
  - Added error message styling

- [x] **Design dashboard** - `dfa18d2`
  - Created Dashboard.css with professional styling
  - Added gradient backgrounds
  - Implemented card-based layout
  - Added responsive design

---

## 🔄 IN-PROGRESS

### Bug Fixes & Improvements
- [ ] **Fix JWT authentication filter error handling** (Not yet committed)
  - Modified JwtAuthenticationFilter.java to handle malformed tokens
  - Added try-catch for JWT parsing errors
  - Added empty token validation
  - Allows public endpoints to work with invalid tokens
  - **Files modified:** `backend/src/main/java/com/project/backend/config/JwtAuthenticationFilter.java`

- [ ] **Enhance frontend token management** (Not yet committed)
  - Updated api.ts to skip empty tokens
  - Added token validation in authService.ts
  - Implemented clearInvalidToken() method
  - Auto-cleanup of malformed tokens before login/register
  - **Files modified:** `web/src/services/api.ts`, `web/src/services/authService.ts`

### Testing & Validation
- [ ] **End-to-end testing**
  - Test complete registration flow
  - Test login/logout cycle
  - Verify protected routes
  - Test token expiration handling
  - Validate error messages

- [ ] **Database testing**
  - Verify user records in MySQL
  - Test duplicate email prevention
  - Validate password encryption
  - Test database constraints

---

## 📝 TODO

### Documentation & Diagrams
- [ ] **Update Activity Diagram**
  - Update UI flow and validation points
  - Add all pages (Login, Register, Dashboard, Logout)
  - Include JWT token flow
  - Show error handling paths
  - Document password validation steps
  - Add database interaction points

- [ ] **Create Class Diagram**
  - Backend classes (Entity, Service, Controller, Repository)
  - Frontend components and contexts
  - Show relationships and dependencies
  - Include DTO classes
  - Document Spring Security components

- [ ] **Create Sequence Diagram**
  - Registration flow sequence
  - Login authentication sequence
  - Token validation flow
  - Protected route access sequence
  - Logout process flow

### Enhancements (Optional)
- [ ] **Add password strength indicator**
  - Visual feedback on password strength
  - Minimum requirements display

- [ ] **Implement "Remember Me" functionality**
  - Extended token expiration
  - Checkbox on login form

- [ ] **Add email verification**
  - Send verification email on registration
  - Email verification endpoint

- [ ] **Implement refresh tokens**
  - Long-lived refresh tokens
  - Short-lived access tokens
  - Token refresh endpoint

- [ ] **Add user profile editing**
  - Edit first name, last name
  - Change password functionality
  - Profile picture upload

---

## 📊 Statistics

**Total Commits:** 11  
**Completed Tasks:** 25+ tasks  
**In Progress:** 5 tasks  
**Pending:** 3 required diagrams + 5 optional enhancements  

**Lines of Code:**
- Backend: ~2000+ lines (Java)
- Frontend: ~1500+ lines (TypeScript/TSX)
- Documentation: ~1500+ lines (Markdown)

**Last Updated:** February 6, 2026 
