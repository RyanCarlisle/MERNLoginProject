import React, { useState, useEffect, useRef } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min'

function StartingButtons() {
    return (
        <div className="container mt-5">
            <div className="row mt-5">
                <div className="mt-5 align-items-center mx-auto">
                    <h1 className="text-center">Welcome to the most useless login website!</h1>
                    <div className="row mt-5">
                        <div className="col-md-6 mx-auto text-center">
                            <button className="btn btn-lg startLoginBtn mx-auto align-items-center">Login</button>
                            <button className="btn btn-lg startSignupBtn ml-3">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartingButtons;
