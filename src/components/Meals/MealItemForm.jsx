import React, { useContext, useState } from "react";
import { Button } from "../UI/Button";
import { ReactComponent as PlusIcon } from "../../Assets/Icons/PlusIcon.svg";
import styled from "styled-components";
import { BasketContext } from "../../store/BasketContext";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../store/basket/basketReducer";

const MealItemForm = ({ id, title, price}) => {
    // const {addToBasket} = useContext(BasketContext)
    const dispatch = useDispatch()
const [amount, setAmount] = useState(1)

const amountChangeHandler = ( event)=> {
    setAmount(event.target.value)
}



    const submitHandler = (event)=> {
        event.preventDefault()

        const basketItem = {
            id,
            price,
            title,
             amount,
        }
        dispatch(addToBasket(basketItem))
    }

  return (

    <StyledForm onSubmit={submitHandler}>
      <span>
        <StyledLabel htmlFor={id}>Amount</StyledLabel>
        <StyledInput value={amount} onChange={amountChangeHandler}  id={id} type="number" min={1}  max={5}/>
      </span>

      <Button>
        <StyledIcon /> <p>Add</p> 
      </Button>
    </StyledForm>
  );
};

export default MealItemForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  Button {
    margin-top: 12px;
    cursor: pointer;

    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.03em;
    text-transform: capitalize;
    color: white;
    :hover {
      background: #491c07;
    }
  }
`;

const StyledIcon = styled(PlusIcon)`
 
`;

const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
`;

const StyledInput = styled.input`
  width: 60px;
  height: 32px;
  border: 1px solid #d6d6d6;
  border-radius: 6px;
  margin-left: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  padding: 4px 12px;
  outline: none;
`;
