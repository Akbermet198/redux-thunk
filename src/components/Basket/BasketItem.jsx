import React, { useContext } from "react";
import styled from "styled-components";
import { BasketContext } from "../../store/BasketContext";
import { Button } from "../UI/Button";

const BasketItem = ({ title, price, amount,id }) => {

  const { increaseBasketItem, decreaseBasketItem } = useContext(BasketContext);
   
  return (
    <Container>
      <Title>{title}</Title>

      <main>
        <div>
          <Price>${price}</Price>
          <Amount>x{amount}</Amount>
        </div>

        <div>
          <Button variant="outlined" borderStyle="squared" onClick={()=>decreaseBasketItem(id)}>-</Button>
          <Button variant="outlined" borderStyle="squared" onClick={()=>increaseBasketItem(id)}>+</Button>
        </div>
      </main>
    </Container>
  );
};

export default BasketItem;

const Container = styled.div`
  padding: 24px 0;
  width: 100%;

  main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;

      p {
        margin-right: 47px;
      }

      Button {
        margin-left: 14px;
      }

      :first-child {
        width: 153px;
        justify-content: space-between;
      }
    }
  }
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #222222;
  margin-bottom: 12px;
`;

const Price = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #ad5502;
`;

const Amount = styled.span`
  padding: 6px 14px;
  border: 1px solid #d6d6d6;
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
`;
