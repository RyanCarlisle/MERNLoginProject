import React from "react";

function Login(){
    return (
        <div className="container mt-5">
            <div className="row mt-md-5">
                <div className="col-12 col-md-6 align-content-center mx-auto">
                    <div className="card shad border-0 mt-md-5">
                        <div className="card-title text-center mt-5">
                            <h1>LOG IN</h1>
                        </div>
                        <div className="card-body text-center">
                            <i className="fa fa-user icon"></i><input className="input100 col-11 justfy-content-center" type="text" name="username" placeholder="Username"/>
                            <div className="wrap-input100 validate-input" data-validate="Enter password">
                                <i className="fa fa-lock"></i><input className="input100 col-11 justfy-content-center mt-4" type="password" name="pass" placeholder="Password"/>
                            </div>
                            <button className="btn btn-dark badge-pill loginbtn px-4 py-2 mt-5 mb-5">Login</button>
                            <p className="mt-5"><a className='forgotPass' href="/#">Forgot password?</a></p>
                            <p>Don't have an account? <a className="forgotPass" href="/#">Click here to Sign up!</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }

export default Login;