import React from 'react';

function Logincomponent({ setLogin }) {
    return (
        <div className='registration-outer'>
            <div className='registration-inner border rounded'>
                <h3 className='text-center'>Login</h3>
                <hr />
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" />
                <button type="submit" class="btn btn-dark btn-block">Login</button>
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