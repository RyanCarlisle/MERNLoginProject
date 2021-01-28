import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import UserContext from "./context/userContext";

function Header() {

    const {userData, setUserData} = useContext(UserContext); 

    const history = useHistory();

    //for the buttons
    const register = () => history.push("/register");
    const login = () => history.push("/login");
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        });
        localStorage.setItem("auth-token", "");
    };

    return (
        <div className="">
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">MERN Login App</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mr-auto">
                    </ul>
                    
                    {/* checks if user is logged in or not. */}
                    {userData.user ? (
                        <button className="btn btn-outline-danger my-2 my-sm-0" onClick={logout}>Logout</button>
                     ) : (
                        <div>
                            <button className="btn btn-outline-danger my-2 my-sm-0" onClick={register}>Sign up</button>
                            <button className="btn btn-outline-success my-2 my-sm-0 ml-4" onClick={login}>Login</button>
                        </div>
                    )}
                </div>
            </nav>           
        </div>
    )
}

export default Header;
