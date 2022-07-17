import React, { useRef } from 'react';

function Editprofile({ editProfile }) {
    const name = useRef();
    const bio = useRef();
    const image = useRef();
    const edit = () => {
        editProfile({
            first_name: name.current.value,
            bio: bio.current.value,
            image:image.current
        })
    }
    return (
        <div className='edit-profile'>
            <br />
            <input ref={name} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
            <textarea ref={bio} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Bio" />
            <br />
            <button type="submit" onClick={edit} class="btn btn-light btn-outline btn-block">Submit</button>
            <br /><br />
        </div>
    );
}

export default Editprofile;