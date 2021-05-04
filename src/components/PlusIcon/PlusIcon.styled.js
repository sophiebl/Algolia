// PlusIcon.styled.js
import styled from "styled-components";
export const StyledPlusIcon = styled.button`
  position: absolute;
  top: 25px;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    display: inline-block;
    width: 50px;
    height: 50px;

    background: linear-gradient(#000, #000), linear-gradient(#000, #000);
    background-position: center;
    background-size: 48% 4px, 4px 70%;
    background-repeat: no-repeat;

    :first-child {
      transform: ${({ openRestaurantForm }) =>
        openRestaurantForm ? "rotate(45deg)" : "rotate(0deg)"};
    }
  }
`;
