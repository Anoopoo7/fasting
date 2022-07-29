import React, { useEffect, useState } from 'react';
import fastingplanStore from '../../localStorage/fastingplanStore';
import EntryDetailsTemplate from './entryDetails';
import planServices from '../../services/planServices';
import userStorage from '../../localStorage/userStorage';
import { toast } from "react-toastify";

function EntryDetailsComponent({ setLoading }) {
    const [plan, setPlan] = useState(false);
    useEffect(() => {
        setPlan(fastingplanStore.getSelectedPlan());
    }, []);
    const startPlanHandler = async (planId) => {
        const userId = userStorage.getUser() ? userStorage.getUser().id : false;
        if (!userId) {
            toast.error('You must be logged in for Starting a plan !', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            if (fastingplanStore.getFastingPlan()) {
                toast.error('You are already in a plan !', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                return;
            }
            setLoading(true);
            const started = await planServices.startPlan({ ...planId, userId });
            setLoading(false);
            if (started) {
                toast.success('Congratz, activated the plan !', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                toast.error('Something went Wrong !', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
    }
    return (
        <EntryDetailsTemplate plan={plan} startPlanHandler={startPlanHandler} />
    );
}

export default EntryDetailsComponent;