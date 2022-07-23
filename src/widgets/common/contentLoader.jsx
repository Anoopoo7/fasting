import React from 'react';

function ContentLoader() {
    return (
        <div className="m-5">
            <div className="d-flex justify-content-center">
                <div class="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default ContentLoader;