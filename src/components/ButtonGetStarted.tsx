import React, { ReactNode } from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  background: #9DE9E9;
  color: #000;
  font-size: 15px;
  padding: 10px 20px;
  margin-top: 20px;
  width: 210px;
  border: 1px solid #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <ButtonStyles onClick={onClick}>{children}</ButtonStyles>;
};

export default Button;
