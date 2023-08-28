import { css, styled } from "styled-components";

interface ContainerProps {
  isCompleted: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: fit-content(1.125rem) 1fr fit-content(1.5rem);
  column-gap: 0.75rem;
  align-items: center;
  padding: 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors["gray-500"]};
  border-radius: 0.5rem;

  & p {
    color: ${({ theme }) => theme.colors["gray-100"]};
    font-size: ${({ theme }) => theme.fontSizes["m"]};
    line-height: 140%;
    word-wrap: break-word;

    ${({ isCompleted }) =>
      isCompleted &&
      css`
        color: ${({ theme }) => theme.colors["gray-300"]};
        text-decoration: line-through;
      `}
  }

  & > svg {
    width: 1.375rem;
    height: 1.375rem;
    color: ${({ theme, isCompleted }) =>
      isCompleted ? theme.colors["purple-600"] : theme.colors["blue-500"]};

    cursor: pointer;

    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme, isCompleted }) =>
        isCompleted ? theme.colors["purple-500"] : theme.colors["blue-600"]};
    }
  }
`;

export const IconWrapper = styled.div`
  align-self: baseline;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 0.25rem;
  border-radius: 0.25rem;

  transition: background-color 0.3s ease;

  & svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors["gray-300"]};
    transition: all 0.3s ease;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors["gray-400"]};
    cursor: pointer;

    & svg {
      path,
      line {
        stroke: #e25858;
      }
    }
  }
`;
