import React, { useEffect } from 'react';
import ProfileDetails from "./profileDetails";
import FastPlan from "./fastPlan";
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';


function Profilecontainer() {
    const isLoggedIn = useSelector((state) => state.user.active)
    const history = useHistory();
    useEffect(() => {
        if (!isLoggedIn) {
            history.push("/auth")
        }
    }, [isLoggedIn])
    const logout = () => {
        history.push("/auth")
    }
    return (
        <div>
            {
                isLoggedIn && <div>
                    <ProfileDetails logout={logout} />
                    <FastPlan />
                </div>
            }
        </div>
    );
}

export default Profilecontainer;