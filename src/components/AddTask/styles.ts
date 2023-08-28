import { styled } from "styled-components";

export const AddTaskForm = styled.form`
  position: absolute;
  bottom: -1.375rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  max-width: 46rem;
`;

export const Input = styled.input`
  flex: 1;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors["gray-500"]};
  border-radius: 0.5rem;

  color: #fff;
  font-size: ${({ theme }) => theme.fontSizes["l"]};

  &:focus {
    outline: 0.0625rem solid ${({ theme }) => theme.colors["purple-600"]};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors["gray-300"]};
    font-size: ${({ theme }) => theme.fontSizes["l"]};
  }
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors["blue-600"]};
  border-radius: 0.5rem;

  color: #fff;
  font-size: ${({ theme }) => theme.fontSizes["m"]};
  font-weight: 700;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors["blue-500"]};
  }
`;
