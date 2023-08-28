import { TaskContextProvider } from "./context/TasksContext";

import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";

export const App = () => {
  return (
    <TaskContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Header />
        <Tasks />
      </ThemeProvider>
    </TaskContextProvider>
  );
};
