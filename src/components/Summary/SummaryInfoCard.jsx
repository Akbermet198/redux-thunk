import styled from "styled-components";

export const SummaryInfoCard = () => {
  return (
    <Card>
      <h1>Delicious Food, Delivered To You</h1>

      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>

      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by  experienced chefs!
      </p>
    </Card>
  );
};

const Card = styled.div`
  color: white;
  width: 854px;
  background: #383838;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  padding: 36px 54px;
  text-align: center;
  margin: 0 auto;
  position: relative;
  top: -12rem;

  > h1 {
     margin-bottom: 28px;
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
  }

  > p {
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
  }
`;
