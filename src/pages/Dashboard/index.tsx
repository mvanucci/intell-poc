import React, { useEffect, useState } from "react";
import request from "../../api/request";
import * as S from './style'

const Dashboard: React.FC = () => {
 const [uptime, setUptime] = useState<String>();
 const [version, setVersion] = useState<String>();
 const [model, setModel] = useState<String>();
 const [alias, setAlias] = useState<String>();
 const [ssid, setSsid] = useState<String>();
 const [mode, setMode] = useState<String>();
 const [clientsConnected, setClientsConnected] = useState<String>();
 const [rf, setRf] = useState<String>();
 

  useEffect(() => {
     (() => {
      request.get('https://private-anon-3ca042c626-izeusv3.apiary-mock.com/cgi-bin/api/v3/system/device').then(res => {
        setUptime(res.data.data.uptime);
        setVersion(res.data.data.version);
        setModel(res.data.data.model);
        setAlias(res.data.data.alias);
        
      });
     })();

     (() => {
        request.get('https://private-anon-3ca042c626-izeusv3.apiary-mock.com/cgi-bin/api/v3/interface/wireless/radio0/ssid/ssid1').then( res => {
          setSsid(res.data.data.ssid);
          setMode(res.data.data.mode);
          setRf(res.data.data.maxassoc);
        });
     })();

     (() => {
      request.get('https://private-anon-3ca042c626-izeusv3.apiary-mock.com/cgi-bin/api/v3/interface/wireless/radio0/clients/wireless').then(res => {
        setClientsConnected(res.data.data.clients.length);
      });
     })()

  }, []);

  return (
    <>
      <S.ContainerBody>
        <S.Title>Informações</S.Title>
        <S.SubTitle>Sistema</S.SubTitle>
        <S.TableContainer>
          <S.InfoTable>Modelo</S.InfoTable>
          <S.InfoTable>{model}</S.InfoTable>
        </S.TableContainer>
        <S.TableContainer>
          <S.InfoTable>Hostname</S.InfoTable>
          <S.InfoTable>{alias}</S.InfoTable>
        </S.TableContainer>
        <S.TableContainer>
          <S.InfoTable>Versão do firmware</S.InfoTable>
          <S.InfoTable>{version}</S.InfoTable>
        </S.TableContainer>
        <S.TableContainer>
          <S.InfoTable>Uptime</S.InfoTable>
          <S.InfoTable>{uptime}</S.InfoTable>
        </S.TableContainer>
      </S.ContainerBody>
      <S.ContainerBody>
        <S.SubTitle>Wi-Fi</S.SubTitle>
        <S.TableContainer>
          <S.InfoTable>Nome da Rede (SSID) </S.InfoTable>
          <S.InfoTable>{ssid}</S.InfoTable>
        </S.TableContainer>
        <S.TableContainer>
          <S.InfoTable>Quantidade de Clientes conectados</S.InfoTable>
          <S.InfoTable>{clientsConnected}</S.InfoTable>
        </S.TableContainer>
        <S.TableContainer>
          <S.InfoTable>Modo de Operação</S.InfoTable>
          <S.InfoTable>{mode}</S.InfoTable>
        </S.TableContainer>
        <S.TableContainer>
          <S.InfoTable>Potência de RF</S.InfoTable>
          <S.InfoTable>{rf}</S.InfoTable>
        </S.TableContainer>
      </S.ContainerBody>
    </>
  );
}

export default Dashboard;