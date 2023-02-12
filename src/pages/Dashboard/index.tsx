import React from "react";
import * as S from './style'

const Dashboard: React.FC = () => {
  return (
    <>
      <S.ContainerBody>
        <S.Title>Informações</S.Title>
        <S.SubTitle>Sistema</S.SubTitle>
        <S.TableContainer>
          <S.InfoTable>Modelo</S.InfoTable>
          <S.InfoTable>SimpleText</S.InfoTable>
        </S.TableContainer>
        <S.TableContainer>
          <S.InfoTable>Hostname</S.InfoTable>
          <S.InfoTable>SimpleText</S.InfoTable>
        </S.TableContainer>
        <S.TableContainer>
          <S.InfoTable>Versão do firmware</S.InfoTable>
          <S.InfoTable>SimpleText</S.InfoTable>
        </S.TableContainer>
        <S.TableContainer>
          <S.InfoTable>Uptime</S.InfoTable>
          <S.InfoTable>SimpleText</S.InfoTable>
        </S.TableContainer>
      </S.ContainerBody>
      <S.ContainerBody>
        <S.SubTitle>Wi-Fi</S.SubTitle>
        <S.TableContainer>
          <S.InfoTable>Nome da Rede (SSID) </S.InfoTable>
          <S.InfoTable>SimpleText</S.InfoTable>
        </S.TableContainer>
        <S.TableContainer>
          <S.InfoTable>Quantidade de Clientes conectados</S.InfoTable>
          <S.InfoTable>SimpleText</S.InfoTable>
        </S.TableContainer>
        <S.TableContainer>
          <S.InfoTable>Modo de Operação</S.InfoTable>
          <S.InfoTable>SimpleText</S.InfoTable>
        </S.TableContainer>
        <S.TableContainer>
          <S.InfoTable>Potência de RF</S.InfoTable>
          <S.InfoTable>SimpleText</S.InfoTable>
        </S.TableContainer>
      </S.ContainerBody>
    </>
  );
}

export default Dashboard;