import React, { Component } from 'react';
import logo from '../../dist/search-icon.png';
import SearchBox from './SearchBox';
import SwitchButton from './SwitchButton';
import * as Styled from './styled';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    console.log('handleButton!');
  }

  render() {
    // if (!this.state.isLoaded) {
    //   return <div>Loading ..</div>
    // }
    return (
      <div>
        <Styled.GlobalStyle />
        <Styled.DarkModeContainer>
          <Styled.DarkMode>Dark Mode</Styled.DarkMode>
          <SwitchButton />
        </Styled.DarkModeContainer>
        <Styled.Box>
          <Styled.SearchIcon src={logo}></Styled.SearchIcon>
          <Styled.GoogleQueryText>Google Query</Styled.GoogleQueryText>
          <Styled.Version>(1.0.0)</Styled.Version>
        </Styled.Box>
        <SearchBox onButtonClick={this.handleButtonClick} />
      </div>
    )
  }
}

export default Search;