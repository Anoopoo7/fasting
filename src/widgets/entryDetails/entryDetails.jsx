import React from 'react';

function EntryDetailsTemplate({ plan }) {
    console.log(plan);
    return (
        <div className="card m-2">
            {
                plan && <div className="card-body">
                    <h5>{plan.name} </h5>
                    <br />
                    {
                        plan.fasting_items.map(item => <div className="tracking-card">
                            <div className="time"> {item.time}</div>
                            <div className="description">{item.data}</div>
                        </div>)
                    }
                    <br />
                    <strong>Categories : </strong><span>{plan.category.map(cat => cat + ",")}</span><br />
                    <strong>Foodtype : </strong><span>{plan.foodType.toLowerCase()}</span><br />
                    <strong>Agegroup : </strong><span>{plan.ageGroup.toLowerCase()}</span><br />
                    <strong>Duration : </strong><span>{plan.duration}</span><br />
                    <strong>Labels : </strong><span>{plan.labels.map(lab => lab.toLowerCase() + ",")}</span><br />
                </div>
            }
        </div>
    );
}

export default EntryDetailsTemplate;