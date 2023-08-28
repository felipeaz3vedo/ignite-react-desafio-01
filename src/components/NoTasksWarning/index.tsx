import ClipboardIcon from "../../assets/clipboard-icon.png";

import * as S from "./styles";

export const NoTasksWarning = () => {
  return (
    <S.Container>
      <img src={ClipboardIcon} alt="Ícone de uma prancheta" />
      <b>Você ainda não tem tarefas cadastradas</b>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </S.Container>
  );
};
