import { useState, useEffect } from "react";
import { Header } from "../components/header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../url.js";

export function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [conPassword, setConPass] = useState('');
  const [error, setError] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const style = {
    height: "auto",
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
    padding: isMobile ? "20px" : "0",
  };

  const boxStyle = {
    borderRadius: "10px",
    border: "2px solid #92e88d",
    backgroundColor: "#e0fade",
    width: isMobile ? "90%" : "400px",
    padding: isMobile ? "15px" : "20px",
    height: "auto",
  };

  const inputStyle = {
    width: "97%",
    lineHeight: "2em",
    border: "none",
    borderRadius: "4px",
    marginTop: "3px",
    fontSize: isMobile ? "13px" : "14px",
    padding: "6px",
  };

  const titleStyle = {
    display: "flex",
    justifyContent: "center",
    fontSize: isMobile ? "26px" : "33px",
    fontWeight: "900",
    flexWrap: "wrap",
    textAlign: "center"
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}/api/signup`, { email, password, conPassword });
      console.log(response);
      if (!response.data.message) {
        localStorage.setItem("token", response.data.token);
        navigate("/leagues");
      }
    } catch (e) {
      setError(e.response.data.message);
    }
  };

  function ErrorBlock() {
    return (
      <div style={{
        color: "red",
        fontSize: "12px",
        margin: "0",
        padding: "0",
        marginTop: "5px"
      }}>{error}</div>
    );
  }

  return (
    <div style={{ backgroundColor: "#f3fcf1" }}>
      <Header />
      <div style={style}>
        <div style={boxStyle}>
          <div style={titleStyle}>
            <p style={{ color: "#071210", margin: "0", paddingRight: "10px" }}>Welcome to</p>
            <p style={{ color: "#1e601b", margin: "0", paddingBottom: "10px" }}>FOOT</p>
            <p style={{ margin: "0", paddingBottom: "10px", color: "#071210" }}>code</p>
          </div>

          <div>
            <p style={{ margin: "20px 5px 5px 0", fontSize: isMobile ? "18px" : "20px" }}>Email</p>
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="name@email.com" style={inputStyle} />

            <p style={{ margin: "10px 5px 5px 0", fontSize: isMobile ? "18px" : "20px" }}>Password</p>
            <input type="password" onChange={(e) => setPass(e.target.value)} placeholder="••••••••••" style={inputStyle} />

            <p style={{ margin: "10px 5px 5px 0", fontSize: isMobile ? "18px" : "20px" }}>Confirm Password</p>
            <input type="password" onChange={(e) => setConPass(e.target.value)} placeholder="••••••••••" style={inputStyle} />
          </div>

          <ErrorBlock />

          <button
            onClick={submit}
            style={{
              width: "100%",
              height: isMobile ? "40px" : "50px",
              marginTop: "10px",
              backgroundColor: "#20791c",
              color: "#f3fcf1",
              fontSize: isMobile ? "18px" : "22px",
              border: "none",
              borderRadius: "10px"
            }}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
