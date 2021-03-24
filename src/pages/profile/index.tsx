import React from "react";
import {useParams} from "react-router";
import DefaultTemplate from "../../templates/defaultTemplate";

type paramsTypes = {
    profileId: string
}

const ProfilePage = () => {
    const {profileId}: paramsTypes = useParams();
    return(
        <DefaultTemplate>
            {profileId}
        </DefaultTemplate>
    )
}

export default ProfilePage;
