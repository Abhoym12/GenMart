import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import OTPPage from './containers/OTPPage';
import ProductsPage from './containers/ProductsPage';
import ChangePasswordPage from './containers/ChangePasswordPage';
import ForgotPasswordPage from './containers/ForgotPasswordPage';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';
import Navbar from './components/Navbar';
import AboutPage from './containers/AboutPage';
import ContactPage from './containers/ContactPage';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/otp" element={<OTPPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/change-password" element={<ChangePasswordPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
