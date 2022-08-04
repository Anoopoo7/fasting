import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Authcontainer from './authcontainer';
import FastPlan from './fastPlan';
import ProfileDetails from './profileDetails';
import userStorage from '../../localStorage/userStorage';
import planServices from '../../services/planServices';

function ProfileContainer({ setLoading }) {
    const history = useHistory();
    const [completed, setCompleted] = useState(true);
    const [logged, setLogged] = useState(false);
    const [curretUser, setCurrentUser] = useState({});
    const [plans, setPlans] = useState(false);
    useEffect(() => {
        const user = userStorage.getUser();
        if (user && user.active) {
            setCurrentUser(user);
            setLogged(true);
        }
        setPlan();
    }, [])
    const goSettings = () => {
        history.push("/settings")
    }
    const setPlan = async () => {
        const plan = await planServices.getAllPlansByuserId();
        setPlans(plan);
    }
    return (

        <div>
            {logged && <ProfileDetails
                completed={completed}
                setCompleted={setCompleted}
                goSettings={goSettings}
                curretUser={curretUser}
            />}
            {logged && plans && <FastPlan plans={plans} />}
            {!logged && <Authcontainer setLoading={setLoading} />}
        </div>
    );
}

export default ProfileContainer;