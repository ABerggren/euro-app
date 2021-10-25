import React from "react";
import styled from "styled-components";
import { MyInsurances } from "../../components/myinsurances";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";
//import { MyInsurances } from "./myinsurances";

import { useParams } from "react-router-dom";

const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 4em;
`;

export function MyPages(props) {

  return (
    <PageContainer>
      <Navbar />
      <StyledInnerContainer>
              <MyInsurances />
      </StyledInnerContainer>
      <Footer />
    </PageContainer>
  );
}
