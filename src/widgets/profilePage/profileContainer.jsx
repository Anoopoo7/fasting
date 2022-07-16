import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Authcontainer from './authcontainer';
import FastPlan from './fastPlan';
import ProfileDetails from './profileDetails';
import userStorage from '../../localStorage/userStorage';

function ProfileContainer({ setLoading }) {
    const history = useHistory();
    const [completed, setCompleted] = useState(true);
    const [logged, setLogged] = useState(false);
    const [curretUser, setCurrentUser] = useState({});
    useEffect(() => {
        const user = userStorage.getUser();
        if (user && user.active) {
            setCurrentUser(user);
            setLogged(true);
        }
    }, [])
    const goSettings = () => {
        history.push("/settings")
    }
    return (
        <div>
            {logged && <ProfileDetails
                completed={completed}
                setCompleted={setCompleted}
                goSettings={goSettings}
                curretUser={curretUser}
            />}
            {logged && <FastPlan />}
            {!logged && <Authcontainer setLoading={setLoading} />}
        </div>
    );
}

export default ProfileContainer;