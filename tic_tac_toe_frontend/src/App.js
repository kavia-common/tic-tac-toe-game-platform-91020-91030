import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import BoardStatic from './pages/BoardStatic';

// PUBLIC_INTERFACE
function Home({ theme, toggleTheme }) {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ position: 'absolute', top: 20, left: 20 }}>
          <Link to="/board" className="App-link" aria-label="Go to Board screen">Go to Board</Link>
        </div>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Current theme: <strong>{theme}</strong>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Routes>
      <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
      <Route path="/board" element={<BoardStatic />} />
    </Routes>
  );
}

export default App;
