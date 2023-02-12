import React from "react";
import * as S from './style';

type Props = {
  children: any
}

const Sidebar = ({ children } :Props) => {
  return (
    <S.Container>
      { children }
    </S.Container>
  );
}

export default Sidebar;