import React from 'react';

function Confirm() {
    return (
        <div class="modal fade bd-example-modal-sm show" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" style={{ display: "block" }}>
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <h6 class="modal-title" id="mySmallModalLabel">"message.message"</h6>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark" data-dismiss="modal">No</button>
                        <button type="button" class="btn btn-outline-dark">Yes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Confirm;