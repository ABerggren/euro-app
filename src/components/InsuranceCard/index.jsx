import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Button } from "../button";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 400px;
  min-height: 250px;
  background-color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  margin: 0.5em;
  margin-bottom: 1.3em;
  border: 2px;
  border-color: #543265;
  border-radius: 25px;
`;

const TopContainer = styled.div`
  width: 100%;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #eeeeee;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  padding: 15px 14px;
  border: 2px;
  border-color: #543265;
  border-radius: 25px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 0;
  font-weight: 500;
  color: #000;
  text-align: start;
`;

const Preamble = styled.h3`
  font-size: 14px;
  margin: 0;
  font-weight: 500;
  color: #000;
  text-align: start;
`;

const Body = styled.p`
  font-size: 12px;
  margin: 0;
  font-weight: 500;
  color: #000;
  text-align: start;
  padding-right: 20px;
`;

const AnchorLink = styled(Link)`
  font-size: 12px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: contrast(0.6);
  }
`;

export function InsuranceCard(props) {
  const { title, preamble, body, url } = props;

  console.log(props);

  return (
    <CardContainer>
      <TopContainer>
      </TopContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <Marginer direction="vertical" margin={10} />
        <Preamble>{preamble}</Preamble>
        <Marginer direction="vertical" margin={10} />
        <Body>{body}</Body>
        <Marginer direction="vertical" margin={10} />
        <Link to={url}>
        <Button size={14}>Läs mer</Button>
        </Link>
      </ContentContainer>
    </CardContainer>
  );
}