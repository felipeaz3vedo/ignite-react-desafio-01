import { styled } from "styled-components";

export const Container = styled("main")`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Wrapper = styled("div")`
  width: 100%;
  max-width: 46rem;
  margin-top: 5.6875rem;
`;

export const TasksInfo = styled("header")`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const TasksContainer = styled("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

export const AvailableTasks = styled("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.colors["blue-500"]};
  font-size: ${({ theme }) => theme.fontSizes["m"]};
  font-weight: 700;
`;

export const CompletedTasks = styled(AvailableTasks)`
  color: ${({ theme }) => theme.colors["purple-500"]};
`;

export const Counter = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.125rem 0.5rem;
  background-color: ${({ theme }) => theme.colors["gray-400"]};
  border-radius: 62.4375rem;

  color: ${({ theme }) => theme.colors["gray-200"]};
  font-size: ${({ theme }) => theme.fontSizes["s"]};
  font-weight: 700;
`;
