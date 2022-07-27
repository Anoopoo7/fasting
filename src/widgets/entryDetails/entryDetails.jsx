import React, { useRef } from 'react';
import Stars from '../common/stars';

function EntryDetailsTemplate({ plan, startPlanHandler }) {
    const startDay = useRef();
    const planHandler = () => {
        startPlanHandler({
            fastId: plan.id,
            startDay: startDay.current.value
        });
    }
    return (
        <div className="card m-2">
            {
                plan && <div className="card-body">
                    <h5><strong>{plan.name}</strong></h5>
                    <br />
                    {
                        plan.fasting_items.map(item => <div className="tracking-card">
                            <div className="time"> {item.time}</div>
                            <div className="description">{item.data}</div>
                        </div>)
                    }
                    <br />
                    <table>
                        <tr>
                            <td>
                                <strong>Categories </strong>
                            </td>
                            <td>
                                <span>: {plan.category.map(cat => cat + ",")}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Foodtype </strong>
                            </td>
                            <td>
                                <span>: {plan.foodType.toLowerCase()}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Agegroup </strong>
                            </td>
                            <td>
                                <span>: {plan.ageGroup.toLowerCase()}</span><br />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Duration </strong>
                            </td>
                            <td>
                                <span>: {plan.duration}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Labels </strong>
                            </td>
                            <td>
                                <span>: {plan.labels.map(lab => lab.toLowerCase() + ",")}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>success rate </strong>
                            </td>
                            <td>
                                <Stars rate={plan.successRate} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>deficulty rate </strong>
                            </td>
                            <td>
                                <Stars rate={plan.deficultyRate} />
                            </td>
                        </tr>
                    </table>
                    <br /><strong>start </strong>
                    <div class="input-group mb-3">
                        <select ref={startDay} class="form-control" >
                            <option value="TODAY">Today</option>
                            <option value="TOMARROW">Tomarrow</option>
                            <option value="DAYAFTERTOMARROW">Day after tomarrow</option>
                        </select>
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary btn-sm" onClick={planHandler} type="button">Start</button>
                        </div>
                    </div>
                </div>
            }
            <br /><br /><br /><br /><br />
        </div>
    );
}

export default EntryDetailsTemplate;