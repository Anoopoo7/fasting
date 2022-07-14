import React from 'react';
import { Link } from 'react-router-dom';

function Registercomponent({ setPageToggler }) {
    return (
        <section class="vh-100" id="reg">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card text-white" style={{ borderRadius: "1rem" }}>
                            <div class="card-body p-5 text-center">

                                <div class="mb-md-5 mt-md-4 pb-5">

                                    <h2 class="fw-bold mb-2 text-uppercase">Register</h2>
                                    <p class="text-white-50 mb-5">Please enter your details</p>

                                    <div class="form-outline form-white mb-4 text-left">
                                        <label class="form-label" for="typePasswordX">first name</label>
                                        <input type="text" id="name" class="form-control form-control-lg" />
                                    </div>

                                    <div class="form-outline form-white mb-4 text-left">
                                        <label class="form-label" for="typePasswordX">last name</label>
                                        <input type="text" id="name" class="form-control form-control-lg" />
                                    </div>

                                    <div class="form-outline form-white mb-4 text-left">
                                        <label class="form-label" for="typeEmailX">Email</label>
                                        <input type="email" id="typeEmailX" class="form-control form-control-lg" />
                                    </div>

                                    <div class="form-outline form-white mb-4 text-left">
                                        <label class="form-label" for="typePasswordX">Password</label>
                                        <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                                    </div>

                                    <div class="form-outline form-white mb-4 text-left">
                                        <label class="form-label" for="typePasswordX">confirm password</label>
                                        <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                                    </div>

                                    <button class="btn btn-dark btn-lg px-5" type="submit">Registers</button>
                                    <p class="mb-0">Don't have an account? <Link to="#login" onClick={() => setPageToggler(false)} class="text-white-50 fw-bold">Sign Up</Link>
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

export default Registercomponent;