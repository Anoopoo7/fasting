import React, { useState } from 'react';
import AnimatedPage from '../../animation/AnimatedPage';
import Settingscomponent from './settingscomponent';
import "./settings.css"
import userStorage from '../../localStorage/userStorage';
import userServices from '../../services/userServices';
import { useHistory } from 'react-router-dom';
import { toast } from "react-toastify"

function Settingscontainer({ setLoading }) {
    const history = useHistory();
    const [profileEdit, setProfileEdit] = useState(false);
    const currentuser = userStorage.getUser();

    const logout = () => {
        const islogout = confirm("Are you sure to go out?");

        if (islogout) {
            userStorage.deleteUser();
            history.push("/profile");
        }
    }
    const editProfile = async (data) => {
        if (data.first_name == "" && data.bio == "") {
            setProfileEdit(false)
            return;
        }
        let editedData = {
            email: currentuser.email,
            first_name: data.first_name !== "" ? data.first_name : currentuser.first_name,
            bio: data.bio !== "" ? data.bio : currentuser.bio
        }
        setLoading(true);
        const isUpdated = await userServices.editProfile(editedData);
        setLoading(false);
        if (isUpdated) {
            toast.success('successfully updated the profile', {
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
    const uploadPhoto = async (file) => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = async function () {
                let data = {
                    email: currentuser.email,
                    image: reader.result
                }
                setLoading(true);
                const isUpdated = await userServices.uploadPhoto(data);
                setLoading(false);
                if (isUpdated) {
                    toast.success('photo updated successfully', {
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
            reader.readAsDataURL(file);
        }
    }
    return (
        <AnimatedPage>
            <Settingscomponent
                profileEdit={profileEdit}
                setProfileEdit={setProfileEdit}
                logout={logout}
                editProfile={editProfile}
                uploadPhoto={uploadPhoto}
            />
        </AnimatedPage>
    );
}

export default Settingscontainer;