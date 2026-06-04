# PressureVerse

## Title
**PressureVerse — Pressure and Its Applications in Real Life**

## Team Name
**Beyond Pressure** (S-07)

## Description
PressureVerse is a premium interactive educational website that explains the concept of **Pressure** using a modern glassmorphism user interface, animated backgrounds, live simulations, and a clickable storyboard. The website is fully frontend-based and does not require any backend, login, or database.

The project includes interactive demonstrations for:

- Hydraulic car lift
- Water pressure bottle experiment
- Pneumatic piston system
- Sharp knife vs blunt knife pressure comparison
- High heels vs sports shoes pressure comparison
- Pressure formula lab: `P = F / A`
- Storyboard page section connected to Excalidraw
- Vercel deployment setup

## Live Storyboard Link
The storyboard image is added inside the **Story Board** section on the home page. Clicking the storyboard opens this Excalidraw board:

```txt
https://excalidraw.com/#room=c0405172e531a802c8ff,zBpnHyTmjO4lnR2YlA3qfg
```

## Workflow

1. **Problem Understanding**  
   Selected the topic **Pressure and Its Applications in Real Life** and identified real-life examples such as water pressure, hydraulics, pneumatics, cutting tools, and footwear pressure.

2. **Wireframe and Storyboard**  
   Created a visual storyboard to explain pressure in a simple way using scenes such as mystery, formula explanation, applications, hydraulics, fluid pressure, and challenge/problem-solving.

3. **Vibe Coding Website Development**  
   Built the website using React + Vite with a clean component-based structure. The UI uses glassmorphism, animated gradients, glowing effects, smooth transitions, and responsive layout.

4. **Interactive Simulations**  
   Developed working simulations using React state and CSS animations. Users can move sliders, press buttons, and visually understand how pressure changes.

5. **Testing and Responsiveness**  
   Checked the project for desktop, tablet, and mobile responsiveness. The website is frontend-only and works without server-side setup.

6. **Git Repository and Deployment**  
   Project is ready to push into one GitHub repository and deploy automatically using Vercel.

## Team Members and Task Distribution

| Team Member | Role | Task Performed |
|---|---|---|
| A. Siva Rama Nageswara Rao | Project Lead / Frontend Developer | Planned website structure, created React components, integrated simulations, and prepared deployment setup |
| Team Member 2 | Storyboard Designer | Prepared storyboard scenes and visual flow for explaining pressure |
| Team Member 3 | Content Researcher | Collected real-life applications of pressure and educational explanations |
| Team Member 4 | Testing and Documentation | Tested responsiveness, checked UI flow, and helped with README/documentation |

> Replace Team Member 2, 3, and 4 names with your actual teammates before final submission.

## Project Structure

```txt
PressureVerse/
├── src/
│   ├── pages/
│   │   └── Home.jsx
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Storyboard.jsx
│   │   ├── PressureFormulaLab.jsx
│   │   ├── HydraulicLift.jsx
│   │   ├── WaterBottle.jsx
│   │   ├── PneumaticPiston.jsx
│   │   ├── KnifePressure.jsx
│   │   ├── FootwearPressure.jsx
│   │   ├── ApplicationsGrid.jsx
│   │   ├── Requirements.jsx
│   │   ├── ProjectStructure.jsx
│   │   └── Footer.jsx
│   ├── assets/
│   │   └── storyboard-pressure-applications.png
│   ├── data/
│   │   └── applications.js
│   ├── utils/
│   │   └── physics.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .github/
│   └── workflows/
│       └── vercel-deploy.yml
├── vercel.json
├── package.json
├── deploy-vercel.bat
├── deploy-vercel.sh
├── DEPLOY_TO_VERCEL.md
└── README.md
```

## Requirements Satisfied

- `/src/pages` folder included
- `/src/components` folder included
- Storyboard section added to home page
- Storyboard image added to project assets
- Storyboard image redirects to Excalidraw link when clicked
- No backend required
- No login required
- No database required
- Interactive simulations included
- Modern UI and animations included
- README file included with title, description, workflow, and team tasks
- Vercel deployment setup included
- GitHub Actions auto-deployment workflow included

## Run Locally

### 1. Install Node.js
Install Node.js version 18 or above.

### 2. Open the project folder

```bash
cd PressureVerse
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start development server

```bash
npm run dev
```

### 5. Open the local website

```txt
http://localhost:5173/
```

## Build for Production

```bash
npm run build
```

The production-ready files will be generated inside the `dist` folder.

## Deploy to Vercel Manually

```bash
npm install
npm run build
npx vercel --prod
```

## Auto Deploy to Vercel with GitHub

### Step 1: Create one GitHub repository
Create a repository with a name like:

```txt
pressureverse
```

### Step 2: Push this project into GitHub

```bash
git init
git add .
git commit -m "Initial PressureVerse vibe coding project"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/pressureverse.git
git push -u origin main
```

### Step 3: Connect repository to Vercel

1. Open Vercel
2. Click **Add New Project**
3. Import the GitHub repository
4. Framework: **Vite**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Deploy

### Step 4: Add GitHub secrets for auto deployment

In GitHub repository:

```txt
Settings → Secrets and variables → Actions → New repository secret
```

Add these secrets:

```txt
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
```

After this, every push to the `main` branch can automatically deploy to Vercel using the workflow in `.github/workflows/vercel-deploy.yml`.

## Scripts

```bash
npm run dev          # Start local development server
npm run build        # Create production build
npm run preview      # Preview production build locally
npm run deploy       # Deploy to Vercel production
npm run deploy:preview # Deploy preview version to Vercel
```

## Notes

This project is made for educational demonstration and internship/project submission. It focuses on visual learning, interactive physics, clean project structure, and easy deployment.
