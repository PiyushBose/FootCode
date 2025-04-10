import { Link } from "react-router-dom"

const style = {
    display : "flex",
    justifyContent : "space-between",
    paddingLeft : "8vw",
    paddingRight : "8vw",  
    margin : "0",
    borderBottom : "2px solid #1e601b"
}

const loginButtonStyle = {
    backgroundColor : "#c3f3bf",
    margin : "10px",
    borderRadius : "10px",
    border : "0",
    padding : "10px",
    fontSize : "20px"
}

const signupButtonStyle = {
    backgroundColor : "#20791c",
    color : "#f3fcf1",
    margin : "10px",
    borderRadius : "10px",
    border : "0",
    padding : "10px",
    fontSize : "20px"
}

export function Header() {
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
            <p>
                <Link to = '/' style = {{textDecoration : "none", color : "#1e601b"}}>FOOT</Link>
            </p>
            <p><Link to = '/' style = {{textDecoration : "none", color : "#071210"}}>code</Link></p>
        </button>
        <div style = {{
            display : "flex",
            justifyContent : "space-around",
            width : "15%",
            padding : "15px"
        }}>
            <Link to = '/login' style = {{textDecoration : "none"}}>
                <button style = {loginButtonStyle}>
                    Login
                </button>
            </Link>
            <Link to = '/signup' style = {{textDecoration : "none"}}>
                <button style = {signupButtonStyle}>
                    Sign up
                </button>
            </Link>
        </div>
    </div>
}

