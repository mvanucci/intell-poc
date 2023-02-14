import React from "react";
import * as S from './style';

const Header: React.FC = () => {
  return (
    <S.Container>
        <img src="https://backend.intelbras.com/sites/default/files/download/guias/guia-estilo/images/intelbras2.png" alt="intelbras"/>
        <S.Button>Sair</S.Button>
    </S.Container>
  );
}

export default Header;