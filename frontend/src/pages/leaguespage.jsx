import axios from "axios";
import { AuthHeader } from "../components/loggedinHeader";
import { Card } from "../components/card";
import { useEffect, useState } from "react";

const initialLeagues = [2001, 2002, 2003, 2014, 2015, 2017, 2019, 2021];

export function Leagues() {
    const [competitions, setCompetitions] = useState([]);
    const [followedLeagues, setFollowedLeagues] = useState([]);

    useEffect(() => {
        async function fetchUserInfo() {
            try {
                const response = await axios.get('http://localhost:3000/api/me', {
                    headers: {
                        token: localStorage.getItem("token")
                    }
                });

                const followed = response.data.user.followedLeagues || [];
                setFollowedLeagues(followed);
            } catch (e) {
                console.log(e);
            }
        }

        async function fetchCompetitions() {
            try {
                const response = await axios.get("http://localhost:5000/api/competitions");
                const filtered = response.data.competitions
                    .filter(c => initialLeagues.includes(c.id))
                    .sort((a, b) => a.id - b.id);
                setCompetitions(filtered);
            } catch (error) {
                console.error("Error fetching competitions:", error);
            }
        }

        fetchUserInfo();
        fetchCompetitions();
    }, []);

    function isFollowed(leagueId) {
        return followedLeagues.some(league => league.id === leagueId && league.followed);
    }

    async function handleToggleFollow(id, follow) {
        try {
            await axios.post("http://localhost:3000/api/follow", {
                leagueId: id,
                follow: follow
            }, {
                headers: {
                    token: localStorage.getItem("token")
                }
            });

            setFollowedLeagues(prev =>
                prev.map(league =>
                    league.id === id ? { ...league, followed: follow } : league
                )
            );
        } catch (e) {
            console.log("Error toggling follow:", e);
        }
    }

    const followedCompetitions = competitions.filter(comp => isFollowed(comp.id));

    return (
        <div style={{ backgroundColor: "#f3fcf1" }}>
            <AuthHeader />

            {followedCompetitions.length > 0 && (
                <div>
                    <h1 style={{ fontFamily: "Arial", margin: "50px", marginLeft: "120px" }}>Followed Leagues</h1>
                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        overflow: "hidden"
                    }}>
                        {followedCompetitions.map((comp, index) => (
                            <Card
                                key={index}
                                image={comp.emblem}
                                following={true}
                                data={comp}
                                onToggleFollow={handleToggleFollow}
                            />
                        ))}
                    </div>
                </div>
            )}

            <div style={{ backgroundColor: "#f3fcf1", paddingBottom: "50px" }}>
                <h1 style={{ fontFamily: "Arial", margin: "50px", marginLeft: "120px" }}>All Leagues</h1>
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    overflow: "hidden"
                }}>
                    {competitions.map((comp, index) => (
                        <Card
                            key={index}
                            image={comp.emblem}
                            following={isFollowed(comp.id)}
                            data={comp}
                            onToggleFollow={handleToggleFollow}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}