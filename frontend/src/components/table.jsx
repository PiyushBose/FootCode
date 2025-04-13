import { useEffect, useState } from "react";

export function Table({ table }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div style={{
            border: "2px solid #20791c",
            marginBottom: "70px",
            padding: isMobile ? "10px" : "0"
        }}>
            {!isMobile && (
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "20px",
                    backgroundColor: "#20791c",
                    color: "#f3fcf1",
                    padding: "0 30px 0 100px",
                    fontFamily: "Arial",
                    flexWrap: "wrap"
                }}>
                    <p style={{ marginRight: "95px" }}>Club</p>
                    <p>MP</p>
                    <p>W</p>
                    <p>D</p>
                    <p>L</p>
                    <p>GF</p>
                    <p>GA</p>
                    <p>GD</p>
                    <p><b>Pts</b></p>
                </div>
            )}

            <div>
                {table.map((team, index) => (
                    <div
                        key={index}
                        style={{
                            display: isMobile ? "flex" : "flex",
                            justifyContent: "space-between",
                            fontSize: "18px",
                            width: "100%",
                            color: "#092b0b",
                            borderTop: "2px solid #20791c",
                            fontFamily: "Arial",
                            padding: isMobile ? "15px 0" : "0"
                        }}
                    >
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            width: isMobile ? "80%" : "20%",
                            paddingLeft: isMobile ? "15px" : "30px",
                            marginBottom: isMobile ? "10px" : "0"
                        }}>
                            <p style={{ fontWeight: "bold" }}>{team.position}.</p>
                            <img src={team.team.crest} alt="crest" style={{ width: "25px", height: "25px" }} />
                            <p>{team.team.shortName}</p>
                        </div>

                        {isMobile ? (
                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gap: "5px",
                                paddingLeft: "0px",
                                width : "200px"
                            }}>
                                <p><b>MP:</b> {team.playedGames}</p>
                                <p><b>W:</b> {team.won}</p>
                                <p><b>D:</b> {team.draw}</p>
                                <p><b>L:</b> {team.lost}</p>
                                <p><b>GF:</b> {team.goalsFor}</p>
                                <p><b>GA:</b> {team.goalsAgainst}</p>
                                <p><b>GD:</b> {team.goalDifference}</p>
                                <p><b>Pts:</b> {team.points}</p>
                            </div>
                        ) : (
                            <>
                                <p>{team.playedGames}</p>
                                <p>{team.won}</p>
                                <p>{team.draw}</p>
                                <p>{team.lost}</p>
                                <p>{team.goalsFor}</p>
                                <p>{team.goalsAgainst}</p>
                                <p>{team.goalDifference}</p>
                                <p style={{ paddingRight: "35px" }}>{team.points}</p>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
