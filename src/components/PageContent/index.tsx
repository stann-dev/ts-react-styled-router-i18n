import React from "react";
import styled from "styled-components/macro";
import {media} from "../../styles/consts";

type PageContentProps = {
    children?: React.ReactNode;
}

const StyledPageContent = styled.div`
  width: 100%;
  @media ${media.large} {
    width: 1440px;
  }
`

const PageContent = ({children}: PageContentProps) => {
    return (
        <StyledPageContent>
            {children}
        </StyledPageContent>
    )
}

export default PageContent;
