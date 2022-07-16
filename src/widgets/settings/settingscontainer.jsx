import React, { useState } from 'react';
import AnimatedPage from '../../animation/AnimatedPage';
import Settingscomponent from './settingscomponent';
import "./settings.css"
import userStorage from '../../localStorage/userStorage';
import { useHistory } from 'react-router-dom';

function Settingscontainer(props) {
    const history = useHistory();
    const [profileEdit, setProfileEdit] = useState(false);
    const logout = () => {
        const islogout = confirm("Are you sure to go out?");
        if (islogout) {
            userStorage.deleteUser();
            history.push("/profile");
        }
    }
    return (
        <AnimatedPage>
            <Settingscomponent profileEdit={profileEdit} setProfileEdit={setProfileEdit} logout={logout} />
        </AnimatedPage>
    );
}

export default Settingscontainer;