import { Link } from "react-router-dom"

const style = {
    display : "flex",
    justifyContent : "space-between",
    paddingLeft : "7vw",
    paddingRight : "7vw",  
    margin : "0",
    borderBottom : "2px solid #1e601b"
}

const logoutButtonStyle = {
    backgroundColor : "#fbfefd",
    margin : "10px",
    borderRadius : "10px",
    border : "1px solid #c3f3bf",
    padding : "10px",
    fontSize : "20px",
    color : "#092b08"
}

export function AuthHeader() {
    return <div style = {style}>
        <button style = {{
            fontSize : "32px",
            padding : "0",
            margin : "0",
            border : "0",
            backgroundColor : "#f3fcf1",
            display : "flex",
            fontWeight : "900"
        }}>
            <p><Link to = '/leagues' style = {{textDecoration : "none", color : "#1e601b"}}>FOOT</Link></p>
            <p><Link to = '/leagues' style = {{textDecoration : "none", color : "#071210"}}>code</Link></p>
        </button>
        <div style = {{
            width : "15%",
            padding : "15px",
            position : "relative",
            left : "80px"
        }}>
            <Link to = '/' style = {{textDecoration : "none"}}>
                <button onClick = {() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("leagueId")
                }} style = {logoutButtonStyle}>
                    Logout
                </button>
            </Link>
        </div>
    </div>
}

