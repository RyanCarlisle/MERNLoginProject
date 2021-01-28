import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from "./context/userContext";
import ErrorNotice from "./misc/ErrorNotice";
import Axios from 'axios';

function Login(){

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error,setError] = useState();
    const [show,setShow] = useState({
        toggleShow: false
    }
    );
    const {toggleShow} = show;

    const { setUserData } = useContext(UserContext);

    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try {
            const loginUser = {email, password};

            const loginRes = await Axios.post("http://localhost:5000/users/login", loginUser);
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/loginSuccessful");
        }catch(err) {
            err.response.data.message && setError(err.response.data.message);
            setShow({
                toggleShow: !toggleShow
            })
        }
    };

    const errorNotice = () => {
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

        );
    };

    return (
        <div className="container mt-3">
            <div className="row mt-md-5">
                <div className="col-12 col-lg-6 col-md-10 align-content-center mx-auto">
                    <div className="card shad border-0 mt-md-5">
                        <div className="card-title text-center mt-5">
                            <h1>LOG IN</h1>
                        </div>
                        <div className="card-body text-center">
                            
                            <form onSubmit={submit}>
                                <div className="row">
                                    <div className="col-12 mt-4">
                                        <i className="fa fa-envelope icon"></i><input className="input100 col-11 justfy-content-center" type="email" name="email" placeholder="Email ID" onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                    <div className="col-12 wrap-input100 validate-input" data-validate="Enter password">
                                        <i className="fa fa-lock"></i><input className="input100 col-11 justfy-content-center mt-4" type="password" name="pass" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                    <div className="col-12 ">
                                    <button className="btn btn-dark badge-pill loginbtn px-4 py-2 mt-5" type="submit" data-toggle="modal" data-target="#exampleModal">Login</button>
                                    </div>
                                    <div className="col-12 text-center">
                                        <p className="mt-5"><Link className='forgotPass' to="/forgotpassword">Forgot password?</Link></p>
                                    </div>
                                    <div className="col-12 text-center">
                                        <p>Don't have an account? <Link className="forgotPass" to="register">Click here to Sign up!</Link></p>
                                    </div>
                                </div>
                            </form>
                            {show && errorNotice()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }

export default Login;