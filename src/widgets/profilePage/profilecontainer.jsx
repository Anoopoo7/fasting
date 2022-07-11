import React, { useEffect } from 'react';
import ProfileDetails from "./profileDetails";
import FastPlan from "./fastPlan";
import { useSelector, useDispatch } from 'react-redux'


function Profilecontainer() {
    const isLoggedIn = useSelector((state) => state.user.active)
    useEffect(() => {
        if (!isLoggedIn) {
            window.location.href = "/auth"
        }
    }, [isLoggedIn])
    const logout = () => {
        window.location.href = "/auth"
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