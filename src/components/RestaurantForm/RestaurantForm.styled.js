import styled from "styled-components";

export const StyledForm = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
  z-index: 9;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 70%;
  }
`;
