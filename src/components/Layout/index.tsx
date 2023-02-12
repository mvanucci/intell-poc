import React from "react";
import { Link } from "react-router-dom";
import Content from "../Content";
import Header from "../Header";
import Sidebar from "../Sidebar";
import * as S from './style';

type Props = {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <S.Grid>
        <Header />
        <Sidebar>
            <nav>
              <Link to="/">Pagina Inical</Link><br />
              <Link to="/config">Configurações</Link>
            </nav>
        </Sidebar>
        <Content>
          {children}
        </Content>
      </S.Grid>
    </>
  );
}

export default Layout;