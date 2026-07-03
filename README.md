# 🪐 Organo

**Organo** is a React + TypeScript application for managing teams and collaborators within an organization. Collaborators are grouped by technical area, making it easy to visualize team composition at a glance.

Originally built during the Alura React course and later refactored to TypeScript with an improved structure and features.

## ✨ Features

- 🧩 Create new teams with custom names and colors
- 👤 Add collaborator cards with Name, Role, Image URL, and assigned team
- ⭐ Favorite / unfavorite collaborators
- 🗑️ Delete collaborator cards
- 🎨 Change team colors dynamically

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | UI library (Hooks, functional components) |
| TypeScript | Static typing |
| CSS | Styling |
| react-icons | Scalable vector icons |
| hex-to-rgba | Color manipulation |
| uuid | Unique ID generation |

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (comes bundled with Node.js)

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/devgigifa/organo_typescript.git
   ```

2. Navigate to the project directory:
   ```bash
   cd organo_typescript
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser. The page will reload automatically as you make changes.

## 📂 Project Structure

```
src/
├── components/   # Reusable UI components
├── types/        # TypeScript type definitions
├── App.tsx       # Root component
└── index.tsx     # Application entry point
```

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm start` | Runs the app in development mode |
| `npm test` | Launches the test runner in interactive watch mode |
| `npm run build` | Builds the app for production into the `build` folder, bundling React in production mode with optimized performance |

## 👤 Author

Developed by Giovanna.