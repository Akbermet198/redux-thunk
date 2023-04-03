import { useContext } from "react";
import styled from "styled-components";
import { BasketContext } from "../../store/BasketContext";
import Modal from "../UI/Modal";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";
import { useSelector } from "react-redux";

export const Basket = ({ onClose }) => {
  // const { items } = useContext(BasketContext);
const items = useSelector((state)=>state.basket.item)

  // const getTotalPrice = () => {
  //   return items.reduce((s, { price, amount}) => {
  //     return s + (price*amount);
  //   }, 0);
  // };



  return (
    <Modal onClose={onClose}>


      <BasketDiv>
        {items ? (
          <FixedHeightContainer>
            {items.map((element) => {
              return (
                <BasketItem
                  key={element.title}
                  id={element.id}
                  price={element.price}
                  title={element.title}
                  amount={element.amount}
                />
              );
            })}
          </FixedHeightContainer>
        ) : null}

        <TotalAmount /* price={getTotalPrice()} */ onClose={onClose} onOrder={() => {}} />
      </BasketDiv>
    </Modal>
  );
};

const BasketDiv = styled.div`
  padding: 1rem 1rem 1.5rem 1rem;

  height: 100%;
`;

const FixedHeightContainer = styled.div`
  max-height: 228px;
  overflow-y: scroll;
`;
