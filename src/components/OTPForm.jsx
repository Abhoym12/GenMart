import React, { useState } from "react";
import AuthService from "../services/AuthService";
import { useNavigate } from "react-router-dom";

const OTPForm = () => {
  const [username, setUsername] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.verifyOtp({ username, otp });
      localStorage.setItem("token", response.data.token);
      navigate("/products");
    } catch (error) {
      console.error("OTP verification error:", error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="otp" className="form-label">
          OTP
        </label>
        <input
          type="text"
          className="form-control"
          id="otp"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Verify OTP
      </button>
    </form>
  );
};

export default OTPForm;
