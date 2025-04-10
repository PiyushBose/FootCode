import { useNavigate } from "react-router-dom"

const style = {
    padding: "10px",
    margin: "1% 6.4% 1% 6.4%",
    width: "200px",
    height: "250px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
};

const followButtonStyle = {
    fontSize: "20px",
    padding: "5px",
    margin: "15px 0 0 0",
    backgroundColor: "#20791c",
    color: "#f3fcf1",
    border: "1px solid #092b08",
    borderRadius: "10px",
    fontFamily: "Arial",
    cursor: "pointer"
};

const unfollowButtonStyle = {
    fontSize: "20px",
    padding: "5px",
    margin: "15px 0 0 0",
    backgroundColor: "#fbfefd",
    color: "#092b08",
    border: "1px solid #c3f3bf",
    borderRadius: "10px",
    fontFamily: "Arial",
    cursor: "pointer"
};

const Follow = ({ onClick }) => {
    return (
        <div>
            <button style={followButtonStyle} onClick={onClick}>+ Follow</button>
        </div>
    );
};

const Unfollow = ({ onClick }) => {
    return <button style={unfollowButtonStyle} onClick={onClick}>Unfollow</button>;
};

export function Card({ image, following, data, onToggleFollow }) {
    const navigate = useNavigate();

    function handleRedirect() {
        localStorage.setItem("leagueId", data.id);
        navigate("/league_info");
    }

    return (
        <div style={style}>
            <img
                onClick={handleRedirect}
                src={image}
                alt="league logo"
                style={{
                    border: "2px solid #092b08",
                    padding: "8px",
                    borderRadius: "16px",
                    cursor: "pointer"
                }}
            />
            {following ? (
                <Unfollow onClick={() => onToggleFollow(data.id, false)} />
            ) : (
                <Follow onClick={() => onToggleFollow(data.id, true)} />
            )}
        </div>
    );
}
