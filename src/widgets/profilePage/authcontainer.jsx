import React, { useEffect, useState } from 'react';
import AnimatedPage from '../../animation/AnimatedPage';
import Logincomponent from './logincomponent';
import Registercomponent from './registercomponent';
import userServices from '../../services/userServices';
import { useHistory } from 'react-router-dom';

const Authcontainer = ({ setLoading }) => {
    const [login, setLogin] = useState(true);
    const history = useHistory();

    const getLoggedIn = async (data) => {
        setLoading(true);
        if (data.email != "" && data.password != "") {
            const isLoggedIn = await userServices.login(data);
            setLoading(false);
            if (isLoggedIn) {
                history.push("/profile")
            }
        }
        else {
            setLoading(false);
            alert("Kindily fill the form!")
        }
    }
    const varify = (data) => {
        if (data.first_name === "") return "Enter first name";
        if (data.last_name === "") return "Enter last name";
        if (data.age === "") return "Enter age";
        if (data.gender === "") return "Enter gender";
        if (data.email === "") return "Enter email";
        if (data.password === "") return "Enter password";
        if (data.c_password === "") return "Enter confirm password";
        if (data.password !== data.c_password) return "passwords not matches";
        return true
    }
    const getRegistered = async (data) => {
        if (varify(data) !== true) {
            alert(varify(data));
            return;
        }
        setLoading(true);
        const isregistered = await userServices.register(data);
        setLoading(false);
        if (isregistered) {
            history.push("/profile")
        }
        else {
            alert("cannot register this details")
        }
    }

    return (
        <div>
            {!login && <AnimatedPage><Registercomponent setLogin={setLogin} getRegistered={getRegistered} /></AnimatedPage>}
            {login && <AnimatedPage><Logincomponent setLogin={setLogin} getLoggedIn={getLoggedIn} /></AnimatedPage>}
        </div>
    );
};

export default Authcontainer;