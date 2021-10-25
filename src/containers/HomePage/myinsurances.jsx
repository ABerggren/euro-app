import Axios from "axios";
import React, { useEffect, useState, useParams } from "react";
import styled from "styled-components";
import { deviceSize } from "../../components/responsive";
import { InsuranceCard } from "../../components/InsuranceCard";

const InsurancesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-weight: 900;
  color: #000;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 25px;
  }
`;

const InsurancesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const WarningText = styled.h3`
  color: rgba(100, 100, 100);
  font-weight: 500;
`;

const wait = (num) => new Promise((rs) => setTimeout(rs, num));

export function Insurances(props) {
    const [offeredInsurances, setInsurances] = useState([]);
    const [userInsurances, setUserInsurances] = useState([]);
    const [currentUserInsurances, setCurrentUserInsurances] = useState([]);
    const [isLoading, setLoading] = useState(false);

  const isInsurancesEmpty =
    !offeredInsurances || (offeredInsurances && offeredInsurances.length === 0);

  const fetchUserInsurances = async () => {
    setLoading(true);
    const response = await Axios.get("https://my-json-server.typicode.com/proactivehealth/work-test-sample/user_insurances").catch(
      (err) => {
        console.log("Error: ", err);
      }
    );

    if (response) {
        setUserInsurances(response.data);
        console.log(response);
    }

      setLoading(false);
  };

  useEffect(() => {
    fetchUserInsurances();
  },[]);
    
    const fetchInsurances = async () => {
    setLoading(true);
    const response = await Axios.get("https://my-json-server.typicode.com/proactivehealth/work-test-sample/insurances").catch(
      (err) => {
        console.log("Error: ", err);
      }
    );

    if (response) {
      setInsurances(response.data);
      console.log(response.data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchInsurances();
  }, []);

  return (
    <InsurancesContainer>
      <Title>Mina försäkringar</Title>
      <InsurancesWrapper>
        {isInsurancesEmpty && !isLoading && (
          <WarningText>Inga försäkringar än!</WarningText>
        )}
        {isLoading && <WarningText>Laddar...</WarningText>}
        {!isInsurancesEmpty &&
          !isLoading &&
          offeredInsurances.map((insurance, idx) => (
            <InsuranceCard key={idx} {...insurance} />
          ))}
      </InsurancesWrapper>
    </InsurancesContainer>
  );
}