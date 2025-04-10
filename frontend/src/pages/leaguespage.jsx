import axios from "axios";
import { AuthHeader } from "../components/loggedinHeader";
import { Card } from "../components/card";
import { useEffect, useState } from "react";

export function Leagues() {

    const leaguesArr = [2001, 2002, 2003, 2014, 2015, 2017, 2019, 2021];

    
      
    async function getUserInfo() {

        try {
            const response = await axios.get('http://localhost:3000/api/me', {
                headers: {
                  token: localStorage.getItem("token")
                }
              });
        } catch(e) {
            console.log(e);
        }
    }    

    const [competitions, setCompetitions] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:5000/api/competitions");
                setCompetitions(response.data.competitions);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div style={{ backgroundColor: "#f3fcf1" }}>
            <AuthHeader />
            <div style = {{
                height : "790px",
                backgroundColor : "#f3fcf1"
            }}>
                <h1 style={{ fontFamily: "Arial", margin: "50px", marginLeft : "120px" }}>All Leagues</h1>
                <div style = {{
                    display : "flex",
                    flexWrap : "wrap",
                    overflow : "hidden"
                }}>
                    {competitions.length > 0 && leaguesArr.map((leagueId, index) => {
                        const comp = competitions.find(c => c.id === leagueId);

                        return comp ? (
                            <Card
                                key = {index}
                                image = {comp.emblem}
                                following = {false}
                                data = {comp}
                            />
                        ) : null;
                    })}
                </div>
            </div>
        </div>
    );
}