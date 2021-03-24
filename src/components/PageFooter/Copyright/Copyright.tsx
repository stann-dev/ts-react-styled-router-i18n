import React from "react";
import styled from "styled-components/macro";
import {useTranslation} from "react-i18next";

const StyledCopyright = styled.div`
    `;

const Copyright = () => {
    const {t} = useTranslation();
    const year = new Date().getFullYear();

    return(
        <StyledCopyright>
            Copyright © 2021 - {year} {t("COPYRIGHT_RIGHTS_RESERVED") + ' ' + t("APP_NAME")}
        </StyledCopyright>
    )
}

export default Copyright;
