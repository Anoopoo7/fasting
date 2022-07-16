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

    const getRegistered = async (data) => {
        setLoading(true);
        if (data.first_name == "") return;
        if (data.last_name == "") return;
        if (data.age == "") return;
        if (data.gender == null) return;
        if (data.email == "") return;
        if (data.password == "") return;
        if (data.c_password == null) return;
        if (data.password !== data.c_password) return;
        const isregistered = await userServices.register(data);
        setLoading(false);
        if (isregistered) {
            history.push("/profile")
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