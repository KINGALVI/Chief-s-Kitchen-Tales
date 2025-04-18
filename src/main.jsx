// Import React library and ReactDOM for rendering the application
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the main App component
import App from './App';

// Import the global styles (if applicable)
import './index.css';

// Create the root element and render the App component inside it
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
