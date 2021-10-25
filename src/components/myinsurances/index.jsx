import React, { useContext } from "react";
import styled from "styled-components";
import { AccountBox } from "../../components/accountBox";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";
import { DataContext } from "../accountBox/loginForm";

import { useParams } from "react-router-dom";
import { Insurances } from "../../containers/HomePage/myinsurances";

const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 4em;
`;

export function MyInsurances(props) {

    const data = useContext(DataContext);
    console.log(data);

  return (
    <PageContainer>
      <Navbar />
          <StyledInnerContainer>
              <Insurances />
      </StyledInnerContainer>
      <Footer />
    </PageContainer>
  );
}