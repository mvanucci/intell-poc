import React from "react";
import * as S from './style';

type Props = {
  children :any
}

const Content = ({ children }: Props) => {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
}

export default Content;