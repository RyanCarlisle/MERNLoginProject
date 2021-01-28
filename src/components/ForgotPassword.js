import React from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-10 mx-auto mt-5">
                    <div className="card shad mt-5">
                        <div className="card-body my-4 text-center">
                            <h2>
                                Forgot your password?
                            </h2>
                            <h5 className="mt-5">
                                Unfortunately, we don't have this feature available now.
                            </h5>
                            <h5 className="mt-5"><Link className="blackLinks" to="/">Return to home page</Link></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;
