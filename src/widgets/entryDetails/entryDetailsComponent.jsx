import React, { useEffect, useState } from 'react';
import fastingplanStore from '../../localStorage/fastingplanStore';
import EntryDetailsTemplate from './entryDetails';

function EntryDetailsComponent() {
    const [plan, setPlan] = useState(false);
    useEffect(() => {
        setPlan(fastingplanStore.getSelectedPlan());
    }, []);
    return (
        <EntryDetailsTemplate plan={plan} />
    );
}

export default EntryDetailsComponent;