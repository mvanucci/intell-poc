import React from "react";
import * as S from './style';

const Configuration: React.FC = () => {
  return (
    <>
      <S.ContainerBody>
        <S.Title>Configuration</S.Title>
        <S.SubTitle>Sistema</S.SubTitle>
        <S.FormControl>
          <S.Label>Hostname</S.Label>
          <S.Input />
        </S.FormControl>
        <S.SubTitle>Wi-Fi</S.SubTitle>
        <S.FormControl>
          <S.Label>Mode de Operação</S.Label>
          <S.SelectControl>
            <option value="volvo" selected >Access Point</option>
            <option value="saab">Router</option>
          </S.SelectControl>
        </S.FormControl>

        <S.FormControl>
          <S.Label>Nome da Rede</S.Label>
          <S.Input />
        </S.FormControl>
        <S.FormControl>
          <S.Label>Potência RF</S.Label>
          <S.Range type="range"/>
        </S.FormControl>
          <S.ButtonContainer>
            <S.ButtonConfig type="button">Aplicar</S.ButtonConfig>
            <S.ButtonConfig type="button">Descartar</S.ButtonConfig>
          </S.ButtonContainer>
      </S.ContainerBody>
    </>
  );
}

export default Configuration;