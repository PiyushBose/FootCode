const style = {
    height : "814px",
    display : "flex",
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center"
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

const paraStyle = {
    fontSize : "20px",
    padding : "0",
    margin : "0"
}

export function Body() {
    return <div style = {style}>
        <div style = {{
            fontSize : "42px",
            padding : "0",
            margin : "0",
            border : "0",
            backgroundColor : "#f3fcf1",
            display : "flex",
            fontWeight : "900"
        }}>
            <p style = {{
                color : "#1e601b",
                margin : "0",
                paddingBottom : "10px"
                }}>
                    FOOT
                </p>
            <p style = {{
                margin : "0",
                paddingBottom : "10px"
            }}>
                code
            </p>
        </div>
        <p style = {paraStyle}>All football information</p>
        <p style = {paraStyle}>at one place</p>
        <div style = {{
            display : "flex",
            justifyContent : "space-between",
            width : "12%",
            padding : "15px"
        }}>
            <button style = {loginButtonStyle}>Login</button>
            <button style = {signupButtonStyle}>Sign up</button>
        </div>
    </div>
}
