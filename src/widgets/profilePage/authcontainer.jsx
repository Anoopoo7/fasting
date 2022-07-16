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
        if (data.first_name == "") return false;
        if (data.last_name == "") return false;
        if (data.age == "") return false;
        if (data.gender == null) return false;
        if (data.email == "") return false;
        if (data.password == "") return false;
        if (data.c_password == null) return false;
        if (data.password !== data.c_password) return false;
    }
    const getRegistered = async (data) => {
        setLoading(true);
        if (!varify) {
            setLoading(false);
            alert("invalid inputs")
            return;
        }
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