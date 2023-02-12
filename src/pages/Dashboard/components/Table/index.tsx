import React from 'react';

import * as S from './style';

export const Table :React.FC = () => (
  <>
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
  </>
);