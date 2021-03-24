import React from "react";
import styled from "styled-components/macro";
import Copyright from "./Copyright/Copyright";

const StyledPageFooter = styled.div`
  width: 100%;
`
const PageFooter = () => {
    return (
        <StyledPageFooter>
            <Copyright />
        </StyledPageFooter>
    )
}

export default PageFooter;
