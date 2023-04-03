import React from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";

const TotalAmount = ({ price, onClose, onOrder }) => {
  const orderButton =
    price > 0 ? (
      <Button variant="filled" onClick={onOrder}>
        Order
      </Button>
    ) : null;

  // const fixedPrice = price.toFixed(2);

  return (
    <div>
      <TotalAmountDiv>
        <Label>TotalAmount</Label>
        <Price>{"$"}</Price>
      </TotalAmountDiv>

      <ButtonDiv>
        <Button variant="outlined" onClick={onClose}>
          Close
        </Button>
        {orderButton}
      </ButtonDiv>
    </div>
  );
};

export default TotalAmount;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 16px;

  Button {
    margin-top: 24px;
  }
`;

const TotalAmountDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 29px;
`;

const Label = styled.p`
 
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #222222;
`;

const Price = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: #8a2b06;
`;
