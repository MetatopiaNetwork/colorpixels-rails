import React from "react"
import Logo from "../assets/logo-with-text.png";

function LogoHeader() {
    return (
        <>
			<div style={{backgroundColor: "white", padding: "10px", borderBottom: "1px solid lightgrey", marginBottom: "25px", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
				<img src={Logo} width={150}/>
			</div>
        </>
    )
}

export default LogoHeader