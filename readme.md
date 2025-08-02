# Internshala Dashboard 💼

A responsive Intern Management Dashboard built with **React**, **Tailwind CSS**, and **MongoDB (via Express backend)**. This app includes login, registration, and a personalized user dashboard.

## 📦 Tech Stack

**Frontend:**

- React
- React Router
- Tailwind CSS
- Lucide React Icons
- Axios

**Backend:**

- Node.js
- Express
- MongoDB
- dotenv
- CORS

---

## 📁 Folder Structure

```
root/
├── Backend/
    ├──Config/
    │   └──mongooseConnection.js
    ├──Controllers/
    │   └──getcode.js
    ├── Models/
    │    └──registrationModel.js
    ├── Routes/
    │   └──codeRouetr.js
│   └── server.js
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── Pages/
│   │   │   └── Internhome.jsx
│   │   │   └── LoginPage.jsx
│   │   ├── Components/
│   │   └── App.jsx
│   └── index.html
├── README.md

```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Laxman2546/intern
```

### 2. Setup Frontend

```bash
cd Frontend
npm install
echo > .env
```

### 3. Setup Backend

```bash
cd backend
npm install
echo > .env
```

Add this to your `.env` file:

Backend env sample:

```
MONGODB_URL= "mongodb+srv://<username>:<password>@intern.7y461c9.mongodb.net/?retryWrites=true&w=majority&appName=INTERN"
PORT=3000
```

Frontend env sample:

```
VITE_BACKEND_URL=http://localhost:3000
```

Start the backend:

```bash
npx nodemon
```

Run the Frontend:

```bash
npm run dev
```

## ⚙️ Deployment

Frontend deploy on <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer"> vercel</a>

Backend deploy on <a href="https://render.com/" target="_blank" rel="noopener noreferrer"> render</a>

## 📄 License

This project is licensed under the [MIT License](LICENSE).
