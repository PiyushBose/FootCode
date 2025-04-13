import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function LandingBody() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const style = {
    height: "87vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
    padding: isMobile ? "20px" : "0",
  };

  const loginButtonStyle = {
    backgroundColor: "#c3f3bf",
    margin: "10px",
    borderRadius: "10px",
    border: "0",
    padding: isMobile ? "10px 15px" : "10px 20px",
    fontSize: isMobile ? "16px" : "20px",
  };

  const signupButtonStyle = {
    backgroundColor: "#20791c",
    color: "#f3fcf1",
    margin: "10px",
    borderRadius: "10px",
    border: "0",
    padding: isMobile ? "10px 15px" : "10px 20px",
    fontSize: isMobile ? "16px" : "20px",
  };

  const paraStyle = {
    fontSize: isMobile ? "16px" : "20px",
    padding: "0",
    margin: "0",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: isMobile ? "32px" : "42px",
    padding: "0",
    margin: "0",
    border: "0",
    backgroundColor: "#f3fcf1",
    display: "flex",
    fontWeight: "900",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: isMobile ? "wrap" : "nowrap",
    width: isMobile ? "100%" : "13%",
    padding: "15px",
  };

  return (
    <div style={style}>
      <div style={headingStyle}>
        <p style={{ color: "#1e601b", margin: "0", paddingBottom: "10px" }}>FOOT</p>
        <p style={{ margin: "0", paddingBottom: "10px", color: "#071210" }}>code</p>
      </div>
      <p style={paraStyle}>All football information</p>
      <p style={paraStyle}>at one place</p>
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
