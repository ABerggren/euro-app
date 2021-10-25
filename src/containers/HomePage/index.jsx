import React from "react";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { TopSection } from "./topSection";
import { Navbar } from "../../components/navbar";
import styled from 'styled-components';
import { deviceSize } from '../../components/responsive';
import { Insurances } from "./insurances";
import { Footer } from "../../components/footer";

const ContentContainer = styled.div`
width: 100%;
max-width: ${deviceSize.laptop}px;
display: flex;
flex-direction: column;
`;

export function HomePage(props) {
    return (
        <PageContainer>
            <Navbar />
            <TopSection>
            </TopSection>
            <InnerPageContainer>
                <ContentContainer>
                    <Insurances />
                </ContentContainer>
            </InnerPageContainer>
            <Footer />
        </PageContainer>
    );
}