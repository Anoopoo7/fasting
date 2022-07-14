import React, { useState } from 'react';
import Logincomponent from './logincomponent';
import "./authentification.css"
import Registercomponent from './registercomponent';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../../app/user/userSlice'
import { useHistory } from "react-router-dom"

function AuthentificationComponent() {
    const history = useHistory();

    const dispatch = useDispatch()
    const [pagetoggler, setPageToggler] = useState(false);
    const LoginHandler = () => {
        dispatch(login())
        history.push("/")
    }

    return (
        <div>
            {!pagetoggler && <Logincomponent setPageToggler={setPageToggler} LoginHandler={LoginHandler} />}
            {pagetoggler && <Registercomponent setPageToggler={setPageToggler} />}
        </div>
    );
}

export default AuthentificationComponent;