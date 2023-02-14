import styled from "styled-components";

export const Container = styled.div`
  grid-area: MH;
  background-color: #00a335;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 30px;
`;

export const Button = styled.button`
  border: 1px solid #8b979f;
  border-radius: 3px;
  padding: 8px 45px;
  font-size: 16px;
  background-color: #fff;
  color: #3e5055;
  height: 35px;
  cursor: pointer;

  &:hover {
    color: #00a335;
    background-color: #Ebeeee;
    border: 1px solid #8b979f;
  }
`