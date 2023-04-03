import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../Assets/Icons/Group.svg";

export const BasketButton = ({ count, ...restProps }) => {
  return (
    <StyledBasketButton {...restProps} >
      <BasketIcon />

      <StyledTitle>Your cart</StyledTitle>
      <StyledCounter id="counter">{count || 0}</StyledCounter>
    </StyledBasketButton>
  );
};

const StyledBasketButton = styled.button`
  padding: 12px 32px;
  background: #5a1f08;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  :hover {
    background: #2c0d00;
  }
  :hover > #counter {
    background: #672003;
  }

  &.bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const StyledTitle = styled.span`
  margin-left: 12px;
  margin-right: 24px;
`;

const StyledCounter = styled.span`
  background-color: #8a2b06;
  border-radius: 30px;
  color: white;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  padding: 4px 20px;
`;
