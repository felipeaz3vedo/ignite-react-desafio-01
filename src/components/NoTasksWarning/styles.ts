import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 4rem 1rem;
  border-top: 0.0625rem solid ${({ theme }) => theme.colors["gray-300"]};

  & img {
    margin-bottom: 1rem;
  }

  & p,
  b {
    color: ${({ theme }) => theme.colors["gray-300"]};
    line-height: 140%;
  }
`;
