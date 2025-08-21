import React, { useState } from "react";
import "../admin/styles/Dashboard.scss";
import UserManager from "./Management/UserManager";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("users");

  const logOut = () => {
    document.cookie =
      "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    localStorage.removeItem("authToken");

    window.location.href = "/login";
  };

  const renderTab = () => {
    switch (activeTab) {
      case "users":
        return <UserManager />;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h1 className="dashboard__title">Admin Dashboard</h1>
        <button onClick={logOut} className="dashboard__logout">
          Log ud
        </button>
      </div>

      <div className="dashboard__tabs">
        <button
          className={`dashboard__tab ${activeTab === "users" ? "active" : ""
            }`}
          onClick={() => setActiveTab("users")}
        >
          Brugere
        </button>
        <button
          className={`dashboard__tab ${activeTab === "hero" ? "active" : ""
            }`}
          onClick={() => setActiveTab("hero")}
        >
          Hero
        </button>
        <button
          className={`dashboard__tab ${activeTab === "about" ? "active" : ""
            }`}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>
        <button
          className={`dashboard__tab ${activeTab === "treatment" ? "active" : ""
            }`}
          onClick={() => setActiveTab("treatment")}
        >
          Treatment
        </button>
        <button
          className={`dashboard__tab ${activeTab === "footer" ? "active" : ""
            }`}
          onClick={() => setActiveTab("footer")}
        >
          Footer
        </button>
      </div>

      {renderTab()}
    </div>
  );
}
