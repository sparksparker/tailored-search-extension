import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    ${'' /* background-color: #404040; */}
  }
`;

export const DarkModeContainer = styled.div`
  display: flex;
  float: right;
`;

export const DarkMode = styled.span`
  /* float: right; */
  font-size: 10px;
  margin-right: 5px;
`;

export const Box = styled.div`
  display: flex;
  /* grid-template-columns: 35px 100px 200px; */
  width: 300px;
  /* margin-left: 80px; */
  margin-bottom: 8px;
`;

export const SearchIcon = styled.img`
  width: 30px;
  height: 30px;
  /* margin-top: 15px; */
  margin-left: 70px;
`;

export const GoogleQueryText = styled.span`
  /* color: white; */
  margin-top: 6px;
  margin-left: 4px;
  font-size: 14px;
`;

export const Version = styled.span`
  margin-top: 7px;
  margin-left: 4px;
  font-size: 12px;
  /* color: #FFD8FC; */
`;

export const SearchBoxContainer = styled.form`
  display: grid;
  grid-row-gap: 10px;
`;

export const Label = styled.label`
  /* color: white; */
`;

export const CombineLabel = styled.label`
  margin-bottom: 3px;
`;

export const Input = styled.input`
  margin-left: 5px;
  /* background-color: #DCDCDC; */
`;

export const CombineInput = styled.input`
  /* background-color: #DCDCDC; */
`;

export const Button = styled.input`

`;
