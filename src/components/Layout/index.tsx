import React from "react";
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
        <Sidebar />
        <Content>
          {children}
        </Content>
      </S.Grid>
    </>
  );
}

export default Layout;