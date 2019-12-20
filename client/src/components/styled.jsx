import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    min-width: 100px;
    margin-left: 13px;
    margin-right: 13px;

    ${ ({ currentState }) => currentState ? `background-color: #404040` : `background-color: white`};
  }
`;

export const DarkModeText = styled.span`
  font-size: 10px;
  margin-right: 5px;

  ${ ({ currentState }) => currentState ? `color: white` : `color: black`};
`;

export const Box = styled.div`
  display: flex;
  width: 300px;
  margin-bottom: 14px;
`;

export const SearchIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 55px;
  margin-top: -31px;
`;

export const GoogleQueryText = styled.span`
  margin-top: -22px;
  font-size: 16px;

  ${ ({ currentState }) => currentState ? `color: white` : `color: black`};
`;

export const Version = styled.span`
  margin-top: 8px;
  margin-left: 4px;
  font-size: 12px;

  ${ ({ currentState }) => currentState ? `color: #FFD8FC` : `color: black`};
`;

export const SearchBoxContainer = styled.form`
  /* display: grid;
  grid-row-gap: 10px; */
`;

export const Label = styled.label`
  ${ ({ currentState }) => currentState ? `color: white !important` : `color: black !important`};
`;

export const CombineLabel = styled.label`
  margin-bottom: 3px;
`;

export const Input = styled.input`
  ${ ({ currentState }) => currentState ? `background-color: #DCDCDC !important` : `background-color: white`};
`;

export const CombineInput = styled.input`
  ${ ({ currentState }) => currentState ? `background-color: #DCDCDC` : `background-color: white`};
`;

export const Button = styled.input`
  ${ ({ currentState }) => currentState ? `background-color: #DCDCDC` : `background-color: white`};
`;
