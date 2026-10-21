# Abhay - Frontend Developer Portfolio Website 🚀

A modern, fast, and recruiter-focused portfolio website tailored for **Frontend Developer & B.Tech CSE Student @ Government Engineering College Bharatpur (2nd Year, 3rd Sem)**.

Built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Lucide React**.

---

## 🌟 Key Features

1. **Recruiter-First Hero Section**: Clear positioning as a Frontend Developer & CSE Undergraduate with direct Resume download and contact options.
2. **Interactive Developer Code Card**: Shows your current stack, college (GEC Bharatpur), semester, and readiness for internships.
3. **About Me**: Highlights your Computer Science foundation, clean code principles, and problem-solving focus.
4. **Skills Section**: Categorized into Frontend (React, JS, Tailwind), CS Fundamentals (DSA, C/C++, OOP), and Tools (Git, GitHub, VS Code, Vite).
5. **Projects Showcase**: Filterable showcase with problem statements, features list, live demo links, and GitHub source code links.
6. **Education Timeline**: Highlights your B.Tech in CSE at Govt. Engineering College Bharatpur.
7. **Contact Form**: Pre-wired with direct `mailto:` integration, plus LinkedIn & GitHub quick links.

---

## 🛠️ How to Run Locally

1. **Install dependencies** (already done):
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

---

## ✏️ How to Customize Your Details (Super Easy!)

All your personal details, project links, and skills are centralized in a single file:
👉 [src/data/portfolioData.js](file:///c:/portfolio/src/data/portfolioData.js)

### What to update:
1. **Your Links**:
   - `email`: Replace with your actual email address.
   - `github`: Replace with your actual GitHub profile link.
   - `linkedin`: Replace with your actual LinkedIn profile URL.
2. **Your Resume**:
   - Save your resume PDF as `resume.pdf` inside the `public/` folder (`public/resume.pdf`).
3. **Your Projects**:
   - Change the project titles, descriptions, and `liveUrl` / `githubUrl` to your own GitHub repos.

---

## 🌐 How to Upload & Make it Live (100% Free on Vercel)

Recruiters want to see a live working link (e.g. `abhay-portfolio.vercel.app`). Here is the simplest way:

### Step 1: Create a repository on GitHub
1. Go to [github.com](https://github.com) and click **New Repository**.
2. Name it `portfolio` and click **Create repository**.
3. In your terminal inside `c:\portfolio`, run:
   ```bash
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/portfolio.git
   git push -u origin main
   ```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New Project"** and select your `portfolio` repository.
3. Keep default settings (Vite is detected automatically) and click **Deploy**.
4. Within 1 minute, you will get your free live link (e.g. `https://abhay-portfolio.vercel.app`)!
