import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Authcontainer from './authcontainer';
import FastPlan from './fastPlan';
import ProfileDetails from './profileDetails';

function ProfileContainer(props) {
    const history = useHistory();
    const [completed, setCompleted] = useState(true);
    const goSettings = () => {
        history.push("/settings")
    }
    return (
        <div>
            <ProfileDetails completed={completed} setCompleted={setCompleted} goSettings={goSettings} />
            <FastPlan />
            <Authcontainer />
        </div>
    );
}

export default ProfileContainer;