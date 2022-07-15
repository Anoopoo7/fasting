import React from 'react';

function Editprofile({ }) {
    return (
        <div className='edit-profile'>
            <br />
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
            <textarea type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Bio" />
            <br />
            <button type="submit" class="btn btn-light btn-outline btn-block">Submit</button>
            <br /><br />
        </div>
    );
}

export default Editprofile;