import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function AuthHeader() {
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
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: isMobile ? "4vw" : "7vw",
        paddingRight: isMobile ? "4vw" : "7vw",
        flexDirection: "row",
        borderBottom: "2px solid #1e601b",
        backgroundColor: "#f3fcf1"
    };

    const logoStyle = {
        fontSize: isMobile ? "26px" : "32px",
        padding: "0",
        margin: "10px 0",
        border: "0",
        backgroundColor: "#f3fcf1",
        display: "flex",
        fontWeight: "900"
    };

    const logoutContainerStyle = {
        padding: "10px 0",
        display: "flex",
        justifyContent: "flex-end",
        width: isMobile ? "100%" : "15%",
    };

    const logoutButtonStyle = {
        backgroundColor: "#fbfefd",
        borderRadius: "10px",
        border: "1px solid #c3f3bf",
        padding: isMobile ? "8px 16px" : "10px",
        fontSize: isMobile ? "16px" : "20px",
        color: "#092b08",
        cursor: "pointer"
    };

    return (
        <div style={containerStyle}>
            <button style={logoStyle}>
                <p><Link to='/leagues' style={{ textDecoration: "none", color: "#1e601b" }}>FOOT</Link></p>
                <p><Link to='/leagues' style={{ textDecoration: "none", color: "#071210" }}>code</Link></p>
            </button>

            <div style={logoutContainerStyle}>
                <Link to='/' style={{ textDecoration: "none" }}>
                    <button
                        onClick={() => {
                            localStorage.removeItem("token");
                            localStorage.removeItem("leagueId");
                        }}
                        style={logoutButtonStyle}
                    >
                        Logout
                    </button>
                </Link>
            </div>
        </div>
    );
}
