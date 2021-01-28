import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from "./context/userContext";
import Axios from 'axios';
import ErrorNotice from './misc/ErrorNotice';

function Register() {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [error,setError] = useState();
    const { setUserData } = useContext(UserContext);
    const [show,setShow] = useState({
        toggleShow: false
    }
    );

    const {toggleShow} = show;
    
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try{
        const newUser = {firstName, lastName, userName, email, password, passwordCheck};
        await Axios.post (
            "http://localhost:5000/users/register",
            newUser
        );
        const loginRes = await Axios.post("http://localhost:5000/users/login",{
            email,
            password
        });
        setUserData({
            token: loginRes.data.token,
            user: loginRes.data.user
        });
        localStorage.setItem("auth-token", loginRes.data.token);
        history.push("/SignupSuccessful");
    }catch(err){
            err.response.data.message && setError(err.response.data.message);
            setShow({
                ...show,toggleShow : !toggleShow
            })
        }
    };

    const errorNotice = () =>{
        return(
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Error Found </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setError(undefined)}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    { error && (<ErrorNotice message={error} />) }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setError(undefined)}>Close</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    return (
        <div className="container mt-2">
            <div className="row">

                <div className="col-12 col-lg-6 col-md-10 align-content-center mx-auto">
                    <div className="card shad border-0 mt-md-5">
                        <div className="card-title text-center mt-5">
                            <h1>SIGN UP</h1>
                        </div>
                        <div className="card-body text-center">
                            {show && errorNotice()}
                           
                            <form onSubmit={submit}>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <input className="input100 justfy-content-center col-11 col-md-0 ml-2 ml-md-0" type="text" name="firstname" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>   
                                    </div>
                                    <div className="col-12 col-md-6 mt-3 mt-md-0">
                                        <input className="input100  justfy-content-center col-11 col-md-0 ml-2 ml-md-0" type="text" name="lastname" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>   
                                    </div>
                                    <div className="col-12 mt-4">
                                        <i className="fa fa-user icon"></i><input className="input100 col-11 justfy-content-center" type="text" name="username" placeholder="Username" onChange={(e) => setUserName(e.target.value)}/>
                                    </div>
                                    <div className="col-12 mt-4">
                                        <i className="fa fa-envelope icon"></i><input className="input100 col-11 justfy-content-center" type="email" name="email" placeholder="Email ID" onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                    <div className="col-12 wrap-input100 validate-input" data-validate="Enter password">
                                        <i className="fa fa-unlock"></i><input className="input100 col-11 justfy-content-center mt-4" type="password" name="pass" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                    <div className="col-12 wrap-input100 validate-input" data-validate="Enter password">
                                        <i className="fa fa-lock"></i><input className="input100 col-11 justfy-content-center mt-4" type="password" name="pass" placeholder="Re-enter Password" onChange={(e) => setPasswordCheck(e.target.value)}/>
                                    </div>
                                    <div className="col-12 ">
                                        <button  className="btn btn-dark badge-pill loginbtn px-4 py-2 mt-5 mb-md-5 mb-3" type="submit" data-toggle="modal" data-target="#exampleModal">Sign Up</button>
                                    </div>
                                    <div className="col-12 text-center">
                                        <p className='forgotPass'>Already have an account?</p>
                                    </div>
                                    <div className="col-12 text-center">
                                        <p><Link to="login"className="forgotPass" >Click here to go to Login Page!</Link></p>
                                    </div>
                                </div>
                            </form>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;