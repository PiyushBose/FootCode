import { useState } from "react";
import { Header } from "../components/header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const style = {
    height : "814px",
    display : "flex",
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center",
    fontFamily : "Arial"
}

const boxStyle = {
    borderRadius : "10px",
    border : "2px solid #92e88d",
    backgroundColor  : "#e0fade",
    width : "400px",
    padding : "20px",
    height : "40vh"
}

const inputStyle = {
    width : "97%",
    lineHeight : "2em",
    border : "none",
    borderRadius : "4px",
    marginTop : "3px",
    fontSize : "14px",
    padding : "6px"
}

export function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [conPassword, setConPass] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post("http://localhost:3000/api/signup", {email, password, conPassword});

            console.log(response)

            if(!response.data.message) {
                localStorage.setItem("token", response.data.token);
                navigate("/leagues");
            }

        } catch(e) {
            setError(e.response.data.message);
        }
    }

    function ErrorBlock() {
        return <div style = {{
                color : "red",
                fontSize : "12px",
                margin : "0",
                padding : "0",
                marginTop : "5px"
            }}>{error}</div>
    }


    return <div style = {{backgroundColor : "#f3fcf1"}}>
        <Header />
        <div style = {style}>
            <div style = {boxStyle}> 
                <div style = {{
                    display : "flex",
                    justifyContent : "center",
                    fontSize : "33px",
                    fontWeight : "900"
                }}>
                    <p style = {{
                        color : "#071210",
                        margin : "0",
                        paddingRight : "10px"
                    }}>
                        Welcome to
                    </p>
                    <p style = {{
                        color : "#1e601b",
                        margin : "0",
                        paddingBottom : "10px"
                        }}>
                            FOOT
                        </p>
                    <p style = {{
                        margin : "0",
                        paddingBottom : "10px",
                        color : "#071210"
                    }}>
                        code
                    </p>
                </div>

                <div>
                    <p style = {{
                        margin : "20px 5px 5px 0",
                        fontSize : "20px"
                    }}>
                        Email
                    </p>
                    <input type="email" onChange = {(e) => {setEmail(e.target.value)}} placeholder="name@email.com" style = {inputStyle}></input>
                    <p style = {{
                        margin : "10px 5px 5px 0",
                        fontSize : "20px"
                    }}>
                        Password
                    </p>
                    <input type="password" onChange = {(e) => {setPass(e.target.value)}} placeholder="••••••••••" style = {inputStyle}></input>
                    <p style = {{
                        margin : "10px 5px 5px 0",
                        fontSize : "20px"
                    }}>
                        Confirm Password
                    </p>
                    <input type="password" onChange = {(e) => {setConPass(e.target.value)}} placeholder="••••••••••" style = {inputStyle}></input>
                </div>

                <ErrorBlock />

                <button onClick = {submit} style = {{
                    width : "100%",
                    height : "13%",
                    marginTop : "10px",
                    backgroundColor : "#20791c",
                    color : "#f3fcf1",
                    fontSize : "22px",
                    border : "none",
                    borderRadius : "10px"
                }}>
                    Sign up
                </button>
            </div>
        </div>
    </div>
}