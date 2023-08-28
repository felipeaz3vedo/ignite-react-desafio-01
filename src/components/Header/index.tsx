import * as S from "./styles";
import Logo from "../../assets/logo.png";
import { AddTask } from "../AddTask";

export const Header = () => {
  return (
    <S.Container>
      <S.Logo src={Logo} alt="" />

      <AddTask />
    </S.Container>
  );
};
