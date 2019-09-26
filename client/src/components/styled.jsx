import styled from 'styled-components';

export const Box = styled.div`
  display: grid;
  grid-template-columns: 35px 100px 200px;
`;

export const SearchIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const GoogleQueryText = styled.span`
  margin-top: 7px;
`;

export const Version = styled.span`
  margin-top: 7px;
  margin-left: -17px;
  font-size: 12px;
  color: purple;
`;

export const SearchBoxContainer = styled.form`
  display: grid;
  grid-row-gap: 10px;
`;

export const CombineLabel = styled.label`
  margin-bottom: 3px;
`;

export const Input = styled.input`
  margin-left: 5px;
`;

export const CombineInput = styled.input`
  /* margin-left: -2px; */
`;