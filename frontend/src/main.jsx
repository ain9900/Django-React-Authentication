import React, { StrictMode } from 'react'; // Import React and StrictMode
import ReactDOM from 'react-dom/client'; // Import ReactDOM correctly
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>
  </Router>
);
