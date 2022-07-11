import React, { useState } from 'react';
import Logincomponent from './logincomponent';
import "./authentification.css"
import Registercomponent from './registercomponent';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../../app/user/userSlice'

function AuthentificationComponent() {

    const dispatch = useDispatch()
    const [pagetoggler, setPageToggler] = useState(false);
    const LoginHandler = () => {
        dispatch(login())
    }

    return (
        <div>
            {!pagetoggler && <Logincomponent setPageToggler={setPageToggler} LoginHandler={LoginHandler} />}
            {pagetoggler && <Registercomponent setPageToggler={setPageToggler} />}
        </div>
    );
}

export default AuthentificationComponent;