import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import PasswordReset from './components/PasswordReset';
import PasswordResetRequest from './components/PasswordResetRequest';
import { Routes, Route, useLocation } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const location = useLocation();

  // Define routes that should not display the navbar
  const noNavbarPaths = ["/register", "/", "/request/password-reset", "/password-reset/:token", location.pathname.includes("password")];
  const noNavbar = noNavbarPaths.some(path => location.pathname.startsWith(path));

  return (
    <>
      {noNavbar ? (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/request/password-reset" element={<PasswordResetRequest />} />
          <Route path="/password-reset/:token" element={<PasswordReset />} />
          <Route path="*" element={<Login />} /> {/* Fallback route */}
        </Routes>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Route>
            <Route path="*" element={<Home />} /> {/* Fallback route */}
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
