# 🛡️ Blacksmith E-commerce Web App

[Live Demo](https://blacksmithsolution-e5dfd7auercug3cz.westeurope-01.azurewebsites.net/) | [GitHub Repo](https://github.com/ktopchiev/BlacksmithSolution)

Blacksmith is a full-stack, clean architecture web application designed as an e-commerce platform.
The backend is built with **ASP.NET Core**, while the frontend is developed using **React** with **Redux Toolkit** and **RTK Query**.
The application is connected to a **PostgreSQL** database hosted on **Supabase**, and the entire project is deployed using **Azure App Service** with **GitHub Actions** for CI/CD.

---

## 📸 Preview

![Blacksmith App Preview](../images/blacksmith.png)

---

## 🚀 Features

- 🔐 User authentication with JWT
- 🛒 Product catalog and item management
- 📦 Clean separation of concerns using **Clean Architecture**
- 🌐 Real-time data handling with **RTK Query**
- 🎨 UI with **Material UI**
- ☁️ Deployment via **Azure App Service**
- 🔄 Continuous deployment with **GitHub Actions**

---

## 🛠️ Tech Stack

| Frontend        | Backend         | DevOps & DB       |
|-----------------|-----------------|-------------------|
| React           | ASP.NET Core    | PostgreSQL (Supabase) |
| Redux Toolkit   | Entity Framework| Azure App Service |
| RTK Query       | Clean Architecture | GitHub Actions |
| Material UI     | JWT Auth        | CI/CD Pipelines   |

---
## ☁️ Deployment (CI/CD)

Deployment is fully automated using **GitHub Actions** and **Azure App Service**.

### 🚀 Workflow Overview

✅ On **every push to the `main` branch**, the pipeline:

1. 🏗️ **Builds the frontend**  
   Runs `npm run build` inside the `client/` folder.

2. ⚙️ **Publishes the backend**  
   Uses `dotnet publish` to prepare the ASP.NET Core app.

3. ☁️ **Deploys to Azure**  
   Pushes the published output using the `azure/webapps-deploy` action.

4. 🛢️ **Database**  
   Uses either **Supabase PostgreSQL** or **Azure Database for PostgreSQL**.

📄 **GitHub Actions Workflow File:**  
`.github/workflows/azure-webapp.yml`

---

**Note:**  
This project was built as a learning exercise to practice:
- RTK Query for data fetching and caching
- Clean Architecture principles for maintainable code
- Azure deployment using GitHub Actions

---

## 📁 Project Structure
BlacksmithSolution/
│
├── Blacksmith.Core # Domain and Application interfaces

├── Blacksmith.Infrastructure # Data access layer, repositories, DB context

├── Blacksmith.UI # API (ASP.NET) + middleware

├── client/ # React frontend app

└── .github/workflows/ # GitHub Actions for CI/CD

## 📌 TODO / Improvements

✅ Add registration & user roles

⏳ Admin dashboard

⏳ Shopping cart and checkout

⏳ Unit and integration tests

⏳ Responsive UI
