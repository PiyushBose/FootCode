import { useState } from "react";
import axios from 'axios';
import { Header } from "../components/header";

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
    height : "30vh"
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

export function Login() {

    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    const submit = async (e) => {
        e.preventDefault()

        try {
            await axios.post("http://localhost:3000/api/login", {email, password})
        } catch(e) {
            console.log(e);
        }
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
                </div>

                <div style = {{
                    color : "red",
                    fontSize : "12px",
                    margin : "0",
                    padding : "0",
                    marginTop : "5px",
                    visibility : "hidden"
                }}>Error</div>

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
                    Login
                </button>
            </div>
        </div>
    </div>
}