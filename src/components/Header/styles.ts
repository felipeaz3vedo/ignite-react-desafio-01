import { styled } from "styled-components";

export const Container = styled("header")`
  position: relative;
  background-color: ${({ theme }) => theme.colors["gray-700"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.3125rem;
  padding-block: 4.5rem 5rem;
`;

export const Logo = styled("img")`
  width: 7.875rem;
  height: 3rem;
`;
