import React from "react";
import { Link } from "react-router-dom";

const NavBar = () =>{
    return(
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to={"/Cadastro"}>Cadastro</Link>
                <Link to='/Login'>Login</Link>
            </nav>
        </>
    )
}

export default  NavBar;