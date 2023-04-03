import styled from "styled-components";
import BackgroundImage from "../../Assets/Images/Background.png";
import { SummaryInfoCard } from "./SummaryInfoCard";

export const Summary = () => {
  return (
    <Container>
      <StyledImg src={BackgroundImage} alt="summary" />
      <SummaryInfoCard></SummaryInfoCard>
    </Container>
  );
};

const Container = styled.div`
   height: 650px;

  
`;

const StyledImg = styled.img`
  width: 100%;
`;
