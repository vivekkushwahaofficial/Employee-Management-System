# Employee Management System

A Full Stack Employee Management System built using Spring Boot (Backend) and React (Frontend).  
This application allows users to perform CRUD operations on employees.

---

## 🚀 Tech Stack

### Backend
- Java 17
- Spring Boot
- Spring Data JPA
- Hibernate
- PostgreSQL
- Maven

### Frontend
- React (Vite)
- Axios
- Bootstrap / CSS

---

## 📌 Features

- Add Employee
- Update Employee
- Delete Employee
- View All Employees
- RESTful API Integration
- Exception Handling
- Clean MVC Architecture

---

## 📂 Project Structure

employee-management-system  
│  
├── ems-backend (Spring Boot Application)  
└── ems-frontend (React Application)

---

## ⚙️ Backend Setup

1. Navigate to backend folder:
   cd ems-backend

2. Configure PostgreSQL in:
   src/main/resources/application.properties

3. Run the application:
   mvn spring-boot:run

Backend runs on:
http://localhost:8080

## 🐳 Docker Setup

Start the whole stack from the repository root:

```bash
docker compose up --build
```

Services exposed by compose:
- Frontend: http://localhost
- Backend API: http://localhost:8080
- PostgreSQL: localhost:5432

Container networking details:
- The frontend is served by Nginx and proxies `/api/*` to the backend container.
- The backend connects to the `db` container using the service name `db`.
- Backend database settings are injected through `DATABASE_URL`, `DB_USERNAME`, `DB_PASSWORD`, and `DDL_AUTO`.

---

## ⚙️ Frontend Setup

1. Navigate to frontend folder:
   cd ems-frontend

2. Install dependencies:
   npm install

3. Start the app:
   npm run dev

Frontend runs on:
http://localhost:5173

---

## 📡 API Endpoints

GET     /api/employees  
POST    /api/employees  
GET     /api/employees/{id}  
PUT     /api/employees/{id}  
DELETE  /api/employees/{id}  

---

## 🎯 Future Improvements

- Authentication (JWT)
- Role-based access
- Pagination
- Deployment (AWS / Render)

---

## 👨‍💻 Author

Vivek Kushwaha  
B.Tech CSE Student  
Full Stack Developer