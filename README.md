# Final Project – React Refactoring + Docker Deployment  
Author: Aarti Saini  
Course: ICT Engineering – Web Development  

---

## 📌 Project Overview  
This project refactors one original static HTML/CSS page into a modern **React + Vite** application.  
The goal was to rebuild the page using **semantic React components**, maintain the **same layout and design**, and deploy the working system using **Docker**.

---

## 📁 Project Structure  

final-project/
│
├── originalPage/          # Original HTML + CSS version
│   ├── index.html
│   ├── style.css
│   └── images/
│
├── public/
│   └── images/            # Images used by React version
│
├── src/
│   ├── components/        # Header, MainContent, Footer
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── package.json
├── vite.config.js
└── README.md

---

## 🧩 React Component Structure  

The page is divided into clean, semantic components:

- `Header.jsx`
- `MainContent.jsx`
- `Footer.jsx`

The entire page is **not** placed inside `App.jsx`.  
Each section is modular and reusable.

---

## 🐳 Docker Setup  

### Build & Run with Docker Compose

docker-compose up --build

The app runs at: http://localhost:5173

The container serves the production build using **Nginx**.

---

## 📸 Screenshot (Required for Submission)

The screenshot includes:

- The application running in a browser  
- Docker Desktop showing the running container  

*(Screenshot submitted separately as required.)*

---

## 🔗 GitHub Repository

Link to this project:  
https://github.com/AartiSaini2002/final-project

---

## ✅ Checklist (Completed)

- [x] Original page added to `originalPage/`
- [x] React project created with Vite
- [x] Dockerfile added
- [x] docker-compose.yml added
- [x] .dockerignore added
- [x] Project runs inside Docker
- [x] Page rebuilt in React
- [x] Layout matches original page
- [x] Components used properly
- [x] App.jsx kept clean
- [x] Code pushed to GitHub
- [x] Screenshot taken

---

## 🏁 Final Result  
The project meets all requirements:

- Correct structure  
- Fully working React version  
- Visually matches the original  
- Clean component-based architecture  
- Docker deployment demonstrated  


