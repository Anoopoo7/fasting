import React, { useRef } from 'react';

function Logincomponent({ setLogin, getLoggedIn }) {
    const email = useRef();
    const password = useRef();
    const login = () => {
        const logindata = {
            email: email.current.value,
            password: password.current.value
        }
        getLoggedIn(logindata)
    }
    return (
        <div className='registration-outer'>
            <div className='registration-inner border rounded'>
                <h3 className='text-center'>Login</h3>
                <hr />
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" ref={email} />
                <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" ref={password} />
                <button type="submit" class="btn btn-dark btn-block" onClick={login}>Login</button>
                <div className='text-right'>
                    <small>forgot password?</small>
                    <br />
                    <br />
                    <small onClick={() => { setLogin(false) }}>No account yet? register now</small>
                </div>
            </div>
        </div>
    );
}

export default Logincomponent;