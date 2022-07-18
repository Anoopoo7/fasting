import React from 'react';
import AnimatedPage from '../../animation/AnimatedPage';
import Editprofile from './editprofile';

function Settingscomponent({ profileEdit, setProfileEdit, logout, editProfile, uploadPhoto }) {
    return (
        <div className="settings-outer">
            <div className="settings-inner">
                <h3 className='text-center pt-5'>Settings</h3>
                <br />
                <div className="s-border" onClick={() => { setProfileEdit(!profileEdit) }}>
                    Edit profile
                    <img src="/images/icons8-edit-30.png" alt="" width={25} />
                </div>
                {profileEdit && <AnimatedPage><Editprofile editProfile={editProfile} /></AnimatedPage>}
                <div className="s-border" >
                    Upload profile Photo
                    <input id="upload-photo" type="file" placeholder='enter' onChange={(e) => { uploadPhoto(e.target.files[0]) }} />
                    <img src="/images/icons8-upload-64.png" alt="" width={25} />
                </div>
                <div className="s-border" onClick={logout}>
                    Logout
                    <img src="/images/icons8-logout-48.png" className="rounded" alt="" width={25} />
                </div>
                <div className="s-border">
                    Community updates
                    <img src="/images/icons8-user-groups-64.png" alt="" width={25} />
                </div>
            </div>
        </div>
    );
}

export default Settingscomponent;