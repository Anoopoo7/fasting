import React from 'react';

function Confirm({ setCompleteModel, completeModalData, submitModal }) {
    return (
        <div class="modal fade bd-example-modal-sm show" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" style={{ display: "block" }}>
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <div>
                            <img src="images/icons8-tear-off-calendar-24.png" width={24} alt="" />{" "}
                            <span class="modal-title" id="mySmallModalLabel">{completeModalData.data}</span>
                            <br />
                            {/* <small></small> */}
                            <img src="images/icons8-time-span-48.png" alt="" width={24} />{" "}
                            <span class="modal-title" id="mySmallModalLabel">{completeModalData.time}</span>
                        </div>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={() => setCompleteModel(false)}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark" data-dismiss="modal" onClick={submitModal}>Done</button>
                        {/* <button type="button" class="btn btn-outline-dark">Yes</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Confirm;