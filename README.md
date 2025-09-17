# easyEnglish

A React + TypeScript web app for learning English, built with modern tools and best practices.

---

## ✨ Features

🔐 Authentication – Login, Register, Forgot Password, Verify Email

🏠 Homepage – Display playlists, newest lessons, and most-listened lessons

🔥 Daily Streak – Track daily learning activity, reset automatically if missed

📝 Lessons – Create lesson, take test, view results, ranking board

🏆 Challenges – Create challenge, join challenge

👤 Profile Management – Update user information, change password, manage settings

---

## 🚀 Live Demo

[👉 Try it here](https://easy-english-psi.vercel.app/)

---

## 🧰 Tech Stack

- **Framework / Bundler:** React + Vite  
- **Language:** TypeScript  
- **UI / Styling:** Material UI (MUI), Tailwind CSS  
- **Validation:** Zod  

---

---

## 📸 Screenshots
### 🏠 Home
![Home](https://github.com/user-attachments/assets/40713fa2-78a0-40fc-83df-8de62471d0d0)

### 🔑 Authentication

| Login | Forgot password |
|---------------|--------------|
| ![Login](https://github.com/user-attachments/assets/8da9b885-ee71-45fd-9cae-9813e4615fd5) | ![Forgot password](https://github.com/user-attachments/assets/576a288f-8b3c-4c9d-a5d1-362eaf941ee1) |


### 📝 Register
| Enter email | Validation email |
|---------------|--------------|
| ![Enter email ](https://github.com/user-attachments/assets/c7467f31-d148-4b31-bb32-2f8df383c289) | ![Validation email](https://github.com/user-attachments/assets/29a8d02a-170c-4bfb-b9be-8795b0c57268) |


### ➕ Create New Lesson

| Create Lesson | Generate hint |
|---------------|--------------|
| ![Create Lesson](https://github.com/user-attachments/assets/ee5a02ed-2bcc-4ab1-8014-c4902862927a) | ![Generate hint](https://github.com/user-attachments/assets/a1bc60f5-8def-4f83-9ff3-3b2f646c8a77) |


### 🎧 Learn Lesson

| Learn Lesson | View result|
|---------------|--------------|
| ![Learn Lesson](https://github.com/user-attachments/assets/89f11a82-c649-411b-9935-3953c58450ac) | ![View result](https://github.com/user-attachments/assets/5eacf889-8730-4713-9ea7-cddc2ec8ca82) |

### ➕ Challenge

| Create New Challenge | View challenge |
|---------------|--------------|
| ![Create New Challenge](https://github.com/user-attachments/assets/72e4cd1a-69e7-4fbe-b862-080e7742ed9a) | ![View challenge](https://github.com/user-attachments/assets/0109ad96-bea0-45f7-bf3e-222ce1f50765) |


## 📂 Project Structure

```
/
├─ public/
├─ src/
│   ├─ components/      # reusable UI components
│   ├─ pages/           # page-level components / routes
│   ├─ hooks/           # custom hooks
│   ├─ utils/           # utility functions
│   ├─ types/           # TypeScript type definitions
│   └─ validation/      # Zod schemas
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
└─ README.md
```

---

## 🛠 Getting Started

### Prerequisites

- Node.js (>=16)  
- npm or yarn  

### Installation

```bash
git clone https://github.com/thungan1909/easyEnglish.git
cd easyEnglish
npm install   # or yarn install
```

### Development

```bash
npm run dev   # or yarn dev
```

Runs at [http://localhost:5173](http://localhost:5173) (default Vite port).


## ✅ Validation

- **Zod** is used for input validation and runtime type safety.  
- Schemas are located in the `validation/` folder.  

---

## 🎨 UI

- **MUI** for accessible, production-ready components.  
- **Tailwind CSS** for utility-first, responsive design.  

---

## 🌐 Deployment

- Hosted on **Vercel**.  
- Push to main triggers auto-deploy.  


---

## 🙋‍♀️ Author

Developed with ❤️ by [**thungan1909**](https://github.com/thungan1909)  

