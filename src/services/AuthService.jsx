import axios from "axios";

const AuthService = {
  register: (userData) => axios.post("/api/auth/register", userData),
  login: (credentials) => axios.post("/api/auth/login", credentials),
  verifyOtp: (otpData) => axios.post("/api/auth/verify-otp", otpData),
  changePassword: (passwordData) =>
    axios.post("/api/auth/change-password", passwordData),
  forgotPassword: (email) => axios.post("/api/auth/forgot-password", { email }),
};

export default AuthService;
