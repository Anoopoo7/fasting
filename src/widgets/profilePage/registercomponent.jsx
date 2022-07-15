import React from 'react';

const Registercomponent = ({setLogin}) => {
    return (
        <div className='registration-outer'>
            <div className='registration-inner border rounded'>
                <h3 className='text-center'>Registration</h3>
                <hr />
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Firstname" />
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Lastname" />
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Age" />
                <select class="form-control" id="exampleFormControlSelect1">
                    <option >Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
                <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" />
                <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Confirm password" />
                <button type="submit" class="btn btn-dark btn-block">Register Now</button>
                <br />
                <small onClick={()=>{setLogin(true)}}> Already have an account? login</small>
            </div>
        </div>
    );
};

export default Registercomponent;