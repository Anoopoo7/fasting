import React, { useState } from 'react';
import AnimatedPage from '../../animation/AnimatedPage';
import Settingscomponent from './settingscomponent';
import "./settings.css"

function Settingscontainer(props) {
    const [profileEdit, setProfileEdit] = useState(false);
    return (
        <AnimatedPage>
            <Settingscomponent profileEdit={profileEdit} setProfileEdit={setProfileEdit} />
        </AnimatedPage>
    );
}

export default Settingscontainer;