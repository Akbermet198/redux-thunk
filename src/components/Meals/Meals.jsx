import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchAPI } from "../../lib/fetchApi";

import { MealItem } from "./MealItem";
import { useDispatch, useSelector } from "react-redux";
import { getMeals, mealsactionTypes } from "../../store/meals/mealsReducer";

const DUMMY_MEALS = [
  {
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    title: "Schnitzel",
    description: "A german specialty!",
    price: 16,
  },
  {
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 19.99,
  },
];

export const Meals = () => {
  // const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");
  const meals = useSelector((state) => state.mealsReducer);

  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch({type: mealsactionTypes.GET_MEALS})
    dispatch(getMeals())
  
  }, [dispatch]);

  return (
    <Card>
      {error && <p style={{color: "red"}}>{error}</p>}

      {DUMMY_MEALS.map((meal) => {
        return (
          <MealItem
            key={meal.title}
            id={meal.price}
            title={meal.title}
            description={meal.description}
            price={meal.price}
          ></MealItem>
        );
      })}
    </Card>
  );
};

const Card = styled.ul`
  margin: 0 auto;
  margin-top: 40px;
  background: #ffffff;
  border-radius: 16px;
  width: 1039px;
  padding: 40px;
`;
