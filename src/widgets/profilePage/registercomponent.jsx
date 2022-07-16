import React, { useRef } from 'react';

const Registercomponent = ({ setLogin, getRegistered }) => {
    const first_name = useRef();
    const last_name = useRef();
    const age = useRef();
    const gender = useRef();
    const email = useRef();
    const password = useRef();
    const c_password = useRef();
    const register = () => {
        getRegistered({
            first_name: first_name.current.value,
            last_name: last_name.current.value,
            age: age.current.value,
            gender: gender.current.value,
            email: email.current.value,
            password: password.current.value,
            c_password: c_password.current.value,
        })
    }

    return (
        <div className='registration-outer'>
            <div className='registration-inner border rounded'>
                <h3 className='text-center'>Registration</h3>
                <hr />
                <input type="text" ref={first_name} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Firstname" />
                <input type="text" ref={last_name} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Lastname" />
                <input type="email" ref={email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                <input type="number" ref={age} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Age" />
                <select ref={gender} class="form-control" id="exampleFormControlSelect1">
                    <option value="">Gender</option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                </select>
                <input ref={password} type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" />
                <input ref={c_password} type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Confirm password" />
                <button type="submit" onClick={register} class="btn btn-dark btn-block">Register Now</button>
                <br />
                <small onClick={() => { setLogin(true) }}> Already have an account? login</small>
            </div>
        </div>
    );
};

export default Registercomponent;