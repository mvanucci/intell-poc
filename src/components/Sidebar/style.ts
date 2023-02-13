
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Arrow } from '../../assets/SVG/seta_frente.svg';

export const Container = styled.div`
  grid-area: AS;
  background-color: #d6dfe1;
`;

export const IconArrow = styled(Arrow)`
  width: 17px;
  height: 17px;
`;

export const MenuContainer = styled.ul`
  margin-top: 6rem;
`;

export const Li = styled.li`
  width: 100%;
  list-style: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  &:hover {
    color: #003610;
    /* background-color: #007938; */
  }
`

export const To = styled(Link)`
  text-decoration: none;
  margin: 20px;
  color: #8b979f;
  font-size: 17.5px;
  &:hover {
    color: #003610;
  }
`;