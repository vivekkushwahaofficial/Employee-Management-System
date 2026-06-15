# 📋 Employee Management System (EMS)

Developed a modern, full-stack Employee Management System using **Spring Boot** (Backend), **React.js** (Frontend), and **PostgreSQL** to streamline employee record management. This application implements a clean MVC architecture with RESTful APIs for CRUD (Create, Read, Update, Delete) operations, integrating PostgreSQL with Spring Data JPA and Hibernate.

---

## 🔗 Live Deployments

*   **Frontend Client (Vercel):** [https://employee-management-system-wnla.vercel.app](https://employee-management-system-wnla.vercel.app)
*   **Backend REST API (Render):** [https://ems-backend-0udc.onrender.com](https://ems-backend-0udc.onrender.com)
*   **API Health Status:** [https://ems-backend-0udc.onrender.com/health](https://ems-backend-0udc.onrender.com/health)

---

## 🛠️ Tech Stack & Architecture

### Backend
*   **Language:** Java 17
*   **Framework:** Spring Boot 4.0.2
*   **Data Access:** Spring Data JPA / Hibernate
*   **Database:** PostgreSQL (Neon Serverless PostgreSQL)
*   **Build Tool:** Maven
*   **Utilities:** Lombok (Boilerplate reduction)

### Frontend
*   **Library:** React 19 (Vite)
*   **Routing:** React Router DOM v7
*   **HTTP Client:** Axios
*   **Styling:** Bootstrap 5 / Vanilla CSS

---

## ✨ Features

*   **Full CRUD Support:** Add, edit, delete, and view all employee details.
*   **Health Check Endpoint:** Ready-to-use `/health` endpoint returning system metrics and status.
*   **Docker Ready:** Optimized multi-stage build `Dockerfile` for the Spring Boot backend.
*   **Neon Serverless PostgreSQL Integration:** Pre-configured local dev and cloud database profiles.
*   **Secure CORS Configuration:** Configured to communicate securely with the Vercel-hosted frontend client.
*   **Exception Handling:** Clean global exception mapping for `ResourceNotFoundException`.

---

## 📂 Project Structure

```text
employee-management-system  
├── ems-backend               # Spring Boot Application (REST APIs)
│   ├── src/                  # Source code
│   ├── Dockerfile            # Containerization instructions
│   └── pom.xml               # Maven configuration
└── ems-frontend              # React Application (UI Client)
    ├── src/                  # Components, service files, routing
    ├── .env                  # Local env configs
    └── package.json          # Node dependencies & scripts
```

---

## ⚙️ Backend Setup (`ems-backend`)

The backend is configured to read database parameters from cloud environment variables (`DB_URL`, `DB_USERNAME`, `DB_PASSWORD`) in production, and contains a pre-configured profile (`dev`) for local development that connects to Neon PostgreSQL.

### Method 1: Local Development Run (Using Dev Profile)
To run local development with a preconfigured database without setting up PostgreSQL locally:

1.  Navigate to the backend directory:
    ```bash
    cd ems-backend
    ```
2.  Start the application with the `dev` profile active:
    ```bash
    mvn spring-boot:run -Dspring-boot.run.profiles=dev
    ```
    The application will bind to port `8080` and use the development Neon PostgreSQL instance.

### Method 2: Custom Environment Run
If you want to run the project using your custom database:

1.  Set the environment variables or pass them as system properties:
    ```bash
    mvn spring-boot:run -Dspring-boot.run.jvmArguments="-DDB_URL=jdbc:postgresql://your-host:5432/db -DDB_USERNAME=your-user -DDB_PASSWORD=your-pass"
    ```

### Method 3: Container Run (Docker)
The backend is packaged with a multi-stage Docker build file.

1.  Build the Docker image:
    ```bash
    docker build -t ems-backend .
    ```
2.  Run the container:
    ```bash
    docker run -p 8080:8080 -e DB_URL=your_db_url -e DB_USERNAME=your_username -e DB_PASSWORD=your_password ems-backend
    ```

---

## ⚙️ Frontend Setup (`ems-frontend`)

1.  Navigate to the frontend folder:
    ```bash
    cd ems-frontend
    ```
2.  Install packages:
    ```bash
    npm install
    ```
3.  Configure environment variables. Create a `.env` file in the root of the `ems-frontend` directory:
    ```env
    VITE_API_URL=http://localhost:8080
    ```
4.  Run the Vite dev server:
    ```bash
    npm run dev
    ```
    Frontend will be available at: `http://localhost:5173`

---

## 📡 API Reference

All requests and responses use JSON.

### Employee Endpoints

| HTTP Method | Endpoint | Description | Request Body Example |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/employees` | Retrieve a list of all employees | *None* |
| **GET** | `/api/employees/{id}` | Retrieve details of a specific employee | *None* |
| **POST** | `/api/employees` | Create a new employee record | `{"firstName": "John", "lastName": "Doe", "email": "john@example.com"}` |
| **PUT** | `/api/employees/{id}` | Update details of an existing employee | `{"firstName": "John", "lastName": "Smith", "email": "john.smith@example.com"}` |
| **DELETE** | `/api/employees/{id}` | Delete an employee | *None* |

### System Endpoints

| HTTP Method | Endpoint | Description | Response Example |
| :--- | :--- | :--- | :--- |
| **GET** | `/health` | Verify backend server status and responsiveness | `{"status": "UP", "service": "EMS Backend", "timestamp": "2026-06-15T18:00:00"}` |

---

## 👨‍💻 Author

**Vivek Kushwaha**  
*   B.Tech CSE Student
*   Full Stack Developer
