import axios from "axios";
import { useEffect, useState } from "react"
import { AuthHeader } from "../components/loggedinHeader";
import { Table } from "../components/table";
import { Players } from "../components/players";

export function LeagueInfo() {
    const id = localStorage.getItem("leagueId");
    const [name, setname] = useState("");
    const [code, setCode] = useState("");
    const [image, setImage] = useState("");
    const [table, setTable] = useState([]);
    const [stats, setStats] = useState([]);

    useEffect(() => {
        async function fetchName() {
            try {
                const response = await axios.get("http://localhost:5000/api/competitions");
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
                const response = await axios.get(`http://localhost:5000/api/competitions/${code}/standings`);
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
                const response = await axios.get(`http://localhost:5000/api/competitions/${code}/scorers`);
                setStats(response.data.scorers);
            } catch (e) {
                console.error("Error fetching top scorers:", e);
            }
        }

        fetchTable();
        fetchStats();
    }, [code]);

    return (
        <div style = {{
            backgroundColor : "#f3fcf1"
        }}>
            <AuthHeader />
            <div style={{ display: "flex" }}>
                <img
                    src={image}
                    style={{ width: "50px", height: "50px", margin: "45px 0 0 120px" }}
                />
                <h1 style={{ fontFamily: "Arial", margin: "50px", marginLeft: "30px" }}>{name}</h1>
            </div>

            <div style={{ display: "flex", flexWrap : "wrap" }}>
                <div style = {{
                    width : "55%",
                    paddingLeft : "80px"
                }}>
                    <h2 style={{ fontFamily: "Arial", margin: "50px", marginLeft: "30px", fontSize : "30px" }}>Table</h2>
                    <Table table={table} />
                </div>

                <div style = {{
                    padding : "0 80px 0 80px",
                    width : "30%"
                }}>
                    <h2 style={{ fontFamily: "Arial", margin: "50px", marginLeft: "30px", fontSize : "30px" }}>Top Scorers</h2>
                    <Players players={stats} />
                </div>
            </div>
        </div>
    );
}
