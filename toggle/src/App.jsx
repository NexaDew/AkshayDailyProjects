import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Change the class on the main div instead of document
  return (
    <div className={darkMode ? 'container dark' : 'container'}>
      <h1>Dark Mode Toggle</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        Switch  {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default App;
