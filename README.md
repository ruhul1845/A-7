# 👥 KeenKeeper — Keep Your Friendships Alive

KeenKeeper is a friendship management web app that helps you stay connected with the people who matter most. Track your interactions, set contact goals, and never let a friendship go cold again.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Build the UI |
| React Router DOM | Handle page navigation |
| Tailwind CSS | Styling and responsiveness |
| Recharts | Pie chart for analytics |
| Context API | Global state management (Timeline) |
| React Hot Toast | Toast notifications |

---

## ✨ Key Features

### 👫 Friend Cards
- Displays all friends in a 4-column grid
- Each card shows profile picture, name, days since contact, tags, and status
- Status badge color changes based on: `on-track`, `almost due`, or `overdue`
- Click any card to navigate to the Friend Details page

### 📋 Friend Details Page
- Two-column layout with full friend info (bio, email, tags, status)
- Stats cards: Days Since Contact, Goal, Next Due Date
- Quick Check-In buttons: **Call**, **Text**, **Video**
- Clicking a button logs a new timeline entry and shows a toast notification
- Action buttons: Snooze 2 Weeks, Archive, Delete

### 📜 Timeline Page
- Shows full history of all interactions (calls, texts, video calls)
- Each entry displays date, interaction type icon, and title
- Filter entries by: Call, Text, or Video

### 📊 Friendship Analytics (Stats Page)
- Pie chart (Recharts) showing count of Call / Text / Video interactions

### 🔝 Navbar & 🦶 Footer
- Responsive Navbar with logo, navigation links (Home, Timeline, Stats), and icons
- Active link is highlighted
- Clean footer matching the design

### 📱 Fully Responsive
- Works on mobile, tablet, and desktop screen sizes

### 🔒 Other
- 404 Error Page for unknown routes
- Loading animation while friends data is being fetched
- No page errors on reload after deployment

---

## 🚀 Live Demo

🔗 [Live Link](https://assign-7-nine.vercel.app/)

## 📁 GitHub Repository

🔗 [GitHub Repo](https://github.com/ruhul1845/A-7)