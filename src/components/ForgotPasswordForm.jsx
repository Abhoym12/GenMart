import React, { useState } from "react";
import AuthService from "../services/AuthService";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthService.forgotPassword(email);
      alert("OTP sent to your email");
    } catch (error) {
      console.error("Forgot password error:", error.response.data.message);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Send OTP
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
