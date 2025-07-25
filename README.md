# [iTask - Todo List Application](https://todos-plum-seven.vercel.app/)

<div align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React Badge"/>
  <img src="https://img.shields.io/badge/Vite-5.1.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite Badge"/>
  <img src="https://img.shields.io/badge/TailwindCSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind Badge"/>
</div>



## 📋 Overview

**iTask** is a modern, responsive todo list application built with React and styled with Tailwind CSS. It allows users to manage their tasks efficiently with features like adding, editing, and deleting todos, marking tasks as completed, and filtering completed tasks.

## ✨ Features

- **Task Management**: Add, edit, and delete tasks with ease
- **Task Completion**: Mark tasks as completed with a simple checkbox
- **Persistence**: All tasks are saved to local storage, so they persist between sessions
- **Filtering**: Toggle visibility of completed tasks
- **Responsive Design**: Works seamlessly on both desktop and mobile devices
- **Modern UI**: Clean and intuitive interface built with Tailwind CSS

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/itask.git
   cd itask
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) - Popular icons in your React projects
- [UUID](https://github.com/uuidjs/uuid) - For generating unique IDs for tasks

## 📁 Project Structure

```
itask/
├── public/              # Static files
├── src/                 # Source files
│   ├── components/      # React components
│   │   └── Navbar.jsx   # Navigation bar component
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles (Tailwind imports)
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

## 🔍 Key Components

### App.jsx
The main component that handles:
- State management for todos
- Local storage integration
- CRUD operations for tasks
- UI rendering for the todo list

### Navbar.jsx
A simple navigation component that displays the application name and navigation links.

## 💻 Usage

1. **Adding a Task**:
   - Type your task in the input field
   - Click the "Save" button (requires at least 4 characters)

2. **Completing a Task**:
   - Click the checkbox next to a task to mark it as completed
   - Completed tasks will have a strikethrough text

3. **Editing a Task**:
   - Click the edit icon (pencil) next to a task
   - The task text will appear in the input field
   - Modify the text and click "Save"

4. **Deleting a Task**:
   - Click the delete icon (trash) next to a task

5. **Filtering Tasks**:
   - Toggle the "Show Finished" checkbox to show/hide completed tasks

## 🔧 Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Previews the production build locally
- `npm run lint` - Runs ESLint to check for code issues

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
