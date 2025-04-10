import { redirect, useNavigate } from "react-router-dom"

const style = {
    padding : "10px",
    margin : "1% 6.4% 1% 6.4%",
    width : "200px",
    height : "250px",
    display : "flex",
    flexDirection : "column",
    alignItems : "center"
    
}

const followButtonStyle = {
    fontSize : "20px",
    padding : "5px",
    margin : "15px 0 0 0",
    backgroundColor : "#20791c",
    color : "#f3fcf1",
    border : "1px solid #092b08",
    borderRadius : "10px",
    fontFamily : "Arial"
}

const unfollowButtonStyle = {
    fontSize : "20px",
    padding : "5px",
    margin : "15px 0 0 0",
    backgroundColor : "#fbfefd",
    color : "#092b08",
    border : "1px solid #c3f3bf",
    borderRadius : "10px",
    fontFamily : "Arial"
}

const Follow = () => {
    return <div>
        <button style = {followButtonStyle}>
            + Follow
        </button>
    </div>
}

const Unfollow = () => {
    return <div style = {unfollowButtonStyle}>
        Unfollow
    </div>
}

export function Card({ image, following, data }) {
    const navigate = useNavigate();

    function handleRedirect(data) {    
        localStorage.setItem("leagueId", data.id);
        navigate("/league_info");
    }

    return (
        <div style={style}>
            <img
                onClick={() => handleRedirect(data)}
                src={image}
                style={{
                    border: "2px solid #092b08",
                    padding: "8px",
                    borderRadius: "16px"
                }}
            />
            {following ? <Follow /> : <Unfollow />}
        </div>
    );
}
