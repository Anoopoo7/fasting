import React from 'react';
import { Link } from "react-router-dom";

function Logincomponent({ setPageToggler, LoginHandler }) {
    return (
        <section class="vh-100" id="login">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card text-white" style={{ borderRadius: "1rem" }}>
                            <div class="card-body p-5 text-center">

                                <div class="mb-md-5 mt-md-4 pb-5">

                                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p class="text-white-50 mb-5">Please enter your email and password</p>

                                    <div class="form-outline form-white mb-4 text-left">
                                        <label class="form-label" for="typeEmailX">Email</label>
                                        <input type="email" id="typeEmailX" class="form-control form-control-lg" />
                                    </div>

                                    <div class="form-outline form-white mb-4 text-left">
                                        <label class="form-label" for="typePasswordX">Password</label>
                                        <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                                    </div>

                                    <button class="btn btn-dark btn-lg px-5" type="submit" onClick={LoginHandler}>Login</button>
                                    <p class="small mb-5 pb-lg-2"><span class="text-white-50">Forgot password?</span></p>

                                </div>

                                <div>
                                    <p class="mb-0">Don't have an account? <Link to="#reg" onClick={() => { setPageToggler(true) }} class="text-white-50 fw-bold">Sign Up</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Logincomponent;