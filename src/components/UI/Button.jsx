import styled from "styled-components";

export const Button = ({
  children,
  variant = "filled",
  onClick,
  borderStyle = "rounded",
}) => {
  return (
    <StyledButton variant={variant} onClick={onClick} borderStyle={borderStyle}>
      {children}
    </StyledButton>
  );
};

const getBackgroundColor = (props) => {
  return props.variant === "filled" ? "#8a2b06" : "white";
};

const getBorder = (props) => {
  return props.variant === "filled" ? "none" : "1px solid #8a2b06";
};

const getColor = (props) => {
  return props.variant === "filled" ? "white" : "#8a2b06";
};

const getBorderRadius = (props) => {
  return props.borderStyle === "rounded" ? "20px" : "6px";
};

const StyledButton = styled.button`
  padding: 10px 32px;
  background: ${getBackgroundColor};
  border-radius: ${getBorderRadius};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${getColor};
  border: ${getBorder};
  :hover {
    background-color: ${(props) =>
      props.variant === "filled" ? "#4d1d0a" : "#8a2b06"};
    color: ${(props) => (props.variant === "filled" ? "#ffffff" : "#ffffff")};
  }
`;
