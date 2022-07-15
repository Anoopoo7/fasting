import React, { useState } from 'react';
import AnimatedPage from '../../animation/AnimatedPage';
import Logincomponent from './logincomponent';
import Registercomponent from './registercomponent';

const Authcontainer = () => {
    const [login, setLogin] = useState(true);
    return (
        <div>
            {!login && <AnimatedPage><Registercomponent setLogin={setLogin} /></AnimatedPage>}
            {login && <AnimatedPage><Logincomponent setLogin={setLogin} /></AnimatedPage>}
        </div>
    );
};

export default Authcontainer;