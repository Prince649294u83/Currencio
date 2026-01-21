# ▶️ How to Run Currencio (From Scratch)

This file explains **everything required to install, configure, and run the Currencio project**, starting from a clean system.

---

## 🖥️ System Requirements

### Required Software

| Tool | Minimum Version | Purpose |
|---|---|---|
| Java | 17 | Spring Boot backend |
| Maven | 3.9+ | Build & run backend |
| Node.js | 18+ (LTS) | Frontend runtime |
| npm | Comes with Node | Frontend package manager |
| Git | Optional | Version control |

---

## 🔧 Installation Instructions

### 1️⃣ Install Java 17

Check version:
```bash
java -version

If not installed:

Download from: https://adoptium.net

Install Java 17 (LTS)

2️⃣ Install Maven

Check version:

mvn -version


If not installed:

Download from: https://maven.apache.org/download.cgi

Add Maven to system PATH

3️⃣ Install Node.js (Includes npm)

Check version:

node -v
npm -v


If not installed:

Download from: https://nodejs.org

Install LTS version

📦 Project Setup
4️⃣ Clone or Extract Project
git clone <repository-url>
cd Currencio


(Or extract the ZIP and navigate into the folder)

🚀 Backend (Spring Boot)

5️⃣ Navigate to Backend

cd currency-backend

6️⃣ Run Backend Server

mvn spring-boot:run

✅ Backend Details

Port: 8081

Base URL:

http://localhost:8081

🔍 Test Backend Health

Open in browser:

http://localhost:8081/api/health


Expected response:

{
  "status": "UP",
  "message": "Currency backend is running"
}

🌐 Frontend (React + Vite)

7️⃣ Navigate to Frontend
cd ../currency-frontend

8️⃣ Install Dependencies
npm install

9️⃣ Start Frontend Dev Server
npm run dev

✅ Frontend Details

Port: 5173

Open in browser:

http://localhost:5173

🔁 Backend ↔ Frontend Communication

Frontend API base:

http://localhost:8081/api


Backend must be running before frontend

CORS is already configured in backend

🌐 Backend API Endpoints
Endpoint	Description
/api/convert	Convert currency
/api/currencies	Fetch supported currencies
/api/rates/history	Fetch exchange rate history
/api/health	Backend health check
🧪 Common Issues & Fixes
❌ Port Already in Use

Change backend port in application.properties

server.port=8082

❌ Node Modules Error
rm -rf node_modules
npm install

❌ Java Version Error

Ensure Java 17 is selected:

java --version
