import React from 'react';

function Signup() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 col-md-6 align-content-center mx-auto">
                    <div className="card shad border-0 mt-md-5">
                        <div className="card-title text-center mt-5">
                            <h1>SIGN UP</h1>
                        </div>
                        <div className="card-body text-center">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <input className="input100 justfy-content-center col-11 col-md-0 ml-2 ml-md-0" type="text" name="username" placeholder="First Name"/>   
                                </div>
                                <div className="col-12 col-md-6 mt-3 mt-md-0">
                                    <input className="input100  justfy-content-center col-11 col-md-0 ml-2 ml-md-0" type="text" name="username" placeholder="Last Name"/>   
                                </div>
                                <div className="col-12 mt-4">
                                    <i className="fa fa-user icon"></i><input className="input100 col-11 justfy-content-center" type="text" name="username" placeholder="Username"/>
                                </div>
                                <div className="col-12 mt-4">
                                    <i class="fa fa-envelope icon"></i><input className="input100 col-11 justfy-content-center" type="text" name="username" placeholder="Email ID"/>
                                </div>
                                <div className="col-12 wrap-input100 validate-input" data-validate="Enter password">
                                    <i className="fa fa-unlock"></i><input className="input100 col-11 justfy-content-center mt-4" type="password" name="pass" placeholder="Password"/>
                                </div>
                                <div className="col-12 wrap-input100 validate-input" data-validate="Enter password">
                                    <i className="fa fa-lock"></i><input className="input100 col-11 justfy-content-center mt-4" type="password" name="pass" placeholder="Re-enter Password"/>
                                </div>
                                <div className="col-12 ">
                                <button className="btn btn-dark badge-pill loginbtn px-4 py-2 mt-5 mb-5">Sign Up</button>
                                </div>
                                <div className="col-12 text-center">
                                    <p className='forgotPass'>Already have an account?</p>
                                </div>
                                <div className="col-12 text-center">
                                    <p><a className="forgotPass" href="/#">Click here to go to Login Page!</a></p>
                                </div>

                            </div>
                                     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;