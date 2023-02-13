import React from "react";
import * as S from './style';


const Sidebar = () => {
  return (
    <S.Container>
      <S.MenuContainer>
        <S.Li><S.To to="/">Página Inical</S.To><S.IconArrow /></S.Li>
        <S.Li><S.To to="/config">Configurações</S.To><S.IconArrow /></S.Li>
      </S.MenuContainer>
    </S.Container>
  );
}

export default Sidebar;