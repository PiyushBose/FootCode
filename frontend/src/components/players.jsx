export function Players({ players }) {
    return (
        <div>
            <div style={{
                display: "flex",
                fontSize: "28px",
                justifyContent: "space-between",
                fontFamily: "Arial",
                borderBottom: "4px solid #194f18",
                marginBottom: "20px"
            }}>
                <p>Player</p>
                <p><b>Goals</b></p>
            </div>

            <div style={{
                borderBottom: "2px solid #194f18"
            }}>
                {players.map((player, index) => (
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        borderBottom: "1px solid #194f18",
                        marginTop: "20px",
                        flexWrap: "wrap"
                    }}>
                        <div style={{
                            display: "flex",
                            width: "70%",
                            flexWrap: "wrap",
                            alignItems: "center"
                        }}>
                            <p style={{
                                fontSize: "24px",
                                position: "relative",
                                top: "-15px",
                                fontFamily: "Arial",
                                marginRight: "30px"
                            }}>
                                {index + 1}
                            </p>

                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                fontFamily: "Arial"
                            }}>
                                <p style={{
                                    padding: "0",
                                    margin: "0",
                                    fontSize: "20px"
                                }}>
                                    {player.player.name}
                                </p>

                                <div style={{
                                    display: "flex",
                                    position: "relative",
                                    top: "-15px",
                                    alignItems: "center"
                                }}>
                                    <img src={player.team.crest} style={{ width: "25px", height: "25px", marginTop: "20px" }} />
                                    <p style={{
                                        fontSize: "16px",
                                        paddingTop: "10px",
                                        marginLeft: "5px"
                                    }}>
                                        {player.team.shortName}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div style={{
                            fontSize: "24px",
                            position: "relative",
                            top: "-15px",
                            fontFamily: "Arial",
                            width: "auto",
                            textAlign: "right"
                        }}>
                            <p>{player.goals}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
