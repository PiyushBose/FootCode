import axios from "axios";
import { useEffect, useState } from "react";
import { AuthHeader } from "../components/loggedinHeader";
import { Table } from "../components/table";
import { Players } from "../components/players";
import { proxyUrl } from "../url.js";
import { Header } from "../components/header.jsx";

export function LeagueInfo() {
    const id = localStorage.getItem("leagueId");
    const [name, setname] = useState("");
    const [code, setCode] = useState("");
    const [image, setImage] = useState("");
    const [table, setTable] = useState([]);
    const [stats, setStats] = useState([]);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        async function fetchName() {
            try {
                const response = await axios.get(`${proxyUrl}/api/competitions`);
                const competitions = response.data.competitions;
                const comp = competitions.find(c => String(c.id) === String(id));
                if (comp) {
                    setname(comp.name);
                    setCode(comp.code);
                    setImage(comp.emblem);
                }
            } catch (e) {
                console.error("Error fetching competition info:", e);
            }
        }

        fetchName();
    }, [id]);

    useEffect(() => {
        if (!code) return;

        async function fetchTable() {
            try {
                const response = await axios.get(`${proxyUrl}/api/competitions/${code}/standings`);
                const standings = response.data.standings;
                if (standings && standings.length > 0) {
                    setTable(standings[0].table);
                }
            } catch (e) {
                console.error("Error fetching table:", e);
            }
        }

        async function fetchStats() {
            try {
                const response = await axios.get(`${proxyUrl}/api/competitions/${code}/scorers`);
                setStats(response.data.scorers);
            } catch (e) {
                console.error("Error fetching top scorers:", e);
            }
        }

        fetchTable();
        fetchStats();
    }, [code]);

    return (
        <div style={{ backgroundColor: "#f3fcf1" }}>
            {localStorage.getItem("token") ? <AuthHeader /> : <Header />}

            <div style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "center" : "flex-start",
                padding: isMobile ? "20px" : "40px 120px",
                gap: "20px"
            }}>
                <img
                    src={image}
                    alt="League Emblem"
                    style={{
                        width: isMobile ? "60px" : "50px",
                        height: isMobile ? "60px" : "50px"
                    }}
                />
                <h1 style={{
                    fontFamily: "Arial",
                    fontSize: isMobile ? "26px" : "32px",
                    margin: 0
                }}>
                    {name}
                </h1>
            </div>

            <div style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                flexWrap: "wrap",
                padding: isMobile ? "0 20px 50px" : "0 80px 50px",
                gap: "40px"
            }}>
                <div style={{
                    width: isMobile ? "100%" : "60%"
                }}>
                    <h2 style={{
                        fontFamily: "Arial",
                        fontSize: "26px",
                        marginBottom: "20px"
                    }}>Table</h2>
                    <Table table={table} />
                </div>

                <div style={{
                    width: isMobile ? "100%" : "35%"
                }}>
                    <h2 style={{
                        fontFamily: "Arial",
                        fontSize: "26px",
                        marginBottom: "20px"
                    }}>Top Scorers</h2>
                    <Players players={stats} />
                </div>
            </div>
        </div>
    );
}
