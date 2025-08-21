import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./admin/styles/Login.scss";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5029/login/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const contentType = response.headers.get("content-type");
      let data;

      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        data = { name: text };
      }

      if (data?.name) {
        setUserData(data);
        setError("");
        navigate("/dashboard"); 
      } else {
        setError("Brugernavn ikke fundet.");
        setUserData(null);
      }
    } catch (err) {
      setError("Login mislykkedes. Tjek brugernavnet og prøv igen.");
      setUserData(null);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Welcome Back 👋</h2>
        <p className="subtitle">Please log in to continue</p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error">{error}</p>}

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        <button className="home-btn" onClick={() => navigate("/")}>
          ← Go Back Home
        </button>

        {userData && (
          <div className="user-info">
            <p><strong>Navn:</strong> {userData.name}</p>
          </div>
        )}
      </div>
    </div>
  );
}
