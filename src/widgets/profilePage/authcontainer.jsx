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

    return (
        <div>
            {!login && <AnimatedPage><Registercomponent setLogin={setLogin} /></AnimatedPage>}
            {login && <AnimatedPage><Logincomponent setLogin={setLogin} getLoggedIn={getLoggedIn} /></AnimatedPage>}
        </div>
    );
};

export default Authcontainer;