import React from "react";
import styled from "styled-components/macro";
import PageHeader from "../../components/PageHeader";
import PageContent from "../../components/PageContent";
import PageFooter from "../../components/PageFooter";

type DefaultTemplateProps = {
    children?: React.ReactNode
}

const StyledDefaultTemplate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const DefaultTemplate = ({children}: DefaultTemplateProps) => {
    return (
        <StyledDefaultTemplate>
            <PageHeader />
            <PageContent>
                {children}
            </PageContent>
            <PageFooter />
        </StyledDefaultTemplate>
    )
}

export default DefaultTemplate;
