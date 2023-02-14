import styled from 'styled-components';

export const ContainerBody = styled.div`
  margin: 51px;
`;

export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 56px;
  font-weight: 400;
  color: #3e5055;
  margin-bottom: 1em;
`;

export const SubTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 34px;
  font-weight: 100;
  color: #3e5055;
  margin: 0 4vh;
`;

export const Input = styled.input`
  margin: 0 4.3vh;
  height: 35px;
  padding: 0 10px;
  width: 40%;
  border: 1px solid #BBCAD2;
`;

export const Label = styled.label`
  margin: 0 4.5vh;
  font-weight: 700;
`;

export const FormControl = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  margin-bottom: 5%;
`;

export const SelectControl = styled.select`
  margin: 0 1vh;
  height: 35px;
  padding: 0 10px;
  width: 40%;
  border: 1px solid #BBCAD2;
`;

export const Range = styled.input`
  width: 40%;
  border-radius: 5px;
  background-size: 70% 100%;
  background-repeat: no-repeat;
  -webkit-appearance: none;
  cursor: pointer;
  background: #d6dfe1;
  margin: 0 6.2vh;
  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    background-color: #05303B;
    height: 1rem;
    width: 2rem;    
    border-radius: 5px;
  }

`

export const ButtonConfig = styled.button`
  border: 1px solid #BBCAD2;
  color: #EBEEEE;
  background-color: #8b979f;
  border-radius: 3px;
  padding: 10px;
  width: 25%;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;