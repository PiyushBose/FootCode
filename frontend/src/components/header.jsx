import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: isMobile ? "center" : "flex-start",
    paddingLeft: isMobile ? "4vw" : "8vw",
    paddingRight: isMobile ? "4vw" : "8vw",
    paddingTop: "10px",
    paddingBottom: "10px",
    margin: "0",
    borderBottom: "2px solid #1e601b",
    backgroundColor: "#f3fcf1",
    gap: isMobile ? "50px" : "0",
  };

  const logoStyle = {
    fontSize: isMobile ? "24px" : "32px",
    padding: "0",
    margin: "0",
    border: "0",
    backgroundColor: "transparent",
    display: "flex",
    fontWeight: "900",
  };

  const loginButtonStyle = {
    backgroundColor: "#c3f3bf",
    margin: "10px",
    borderRadius: "10px",
    border: "0",
    padding: isMobile ? "8px" : "10px",
    fontSize: isMobile ? "16px" : "20px",
  };

  const signupButtonStyle = {
    backgroundColor: "#20791c",
    color: "#f3fcf1",
    margin: "10px",
    borderRadius: "10px",
    border: "0",
    padding: isMobile ? "8px" : "10px",
    fontSize: isMobile ? "16px" : "20px",
  };

  const buttonContainerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: isMobile ? "100%" : "15%",
    padding: isMobile ? "5px" : "15px",
    gap: "5px",
  };

  return (
    <div style={containerStyle}>
      <button style={logoStyle}>
        <p>
          <Link to="/" style={{ textDecoration: "none", color: "#1e601b" }}>FOOT</Link>
        </p>
        <p>
          <Link to="/" style={{ textDecoration: "none", color: "#071210" }}>code</Link>
        </p>
      </button>

      <div style={buttonContainerStyle}>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <button style={loginButtonStyle}>Login</button>
        </Link>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <button style={signupButtonStyle}>Sign up</button>
        </Link>
      </div>
    </div>
  );
}
