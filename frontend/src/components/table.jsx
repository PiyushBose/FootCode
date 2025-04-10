export function Table({ table }) {
    return (
        <div style = {{
            border : "2px solid #20791c"
        }}>
            <div style = {{
                display : "flex",
                justifyContent : "space-between",
                fontSize : "20px",
                backgroundColor : "#20791c",
                color : "#f3fcf1",
                padding : "0 30px 0 70px"
            }}>
                <p style = {{
                    marginRight : "75px"
                }}>Club</p>
                <p>MP</p>
                <p>W</p>
                <p>D</p>
                <p>L</p>
                <p>GF</p>
                <p>GA</p>
                <p>GD</p>
                <p><b>Pts</b></p>
            </div>

            <div>
                {table.map((team, index) => (
                    <div key={index} style = {{
                        display : "flex",
                        justifyContent : "space-between",
                        fontSize : "18px",
                        width : "100%",
                        color : "#092b0b",
                        borderBottom : "2px solid #20791c",
                    }}>
                        <div style = {{
                            display : "flex",
                            justifyContent : "space-between",
                            width : "15%",
                            paddingLeft : "30px"
                        }}>
                            <p>{team.position}</p>
                            <p>{team.team.shortName}</p>
                            <img src={team.team.crest} style = {{width : "25px", height : "25px", marginTop : "20px"}}/>
                        </div>
                        <p>{team.playedGames}</p>
                        <p>{team.won}</p>
                        <p>{team.draw}</p>
                        <p>{team.lost}</p>
                        <p>{team.goalsFor}</p>
                        <p>{team.goalsAgainst}</p>
                        <p>{team.goalDifference}</p>
                        <p style = {{paddingRight : "35px"}}>{team.points}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
