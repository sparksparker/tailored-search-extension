import React, { Component } from 'react';
import logo from '../../dist/search-icon.png';
import SearchBox from './SearchBox';
import SwitchButton from './SwitchButton';
import * as Styled from './styled';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkModeState: false,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleChromeState = this.handleChromeState.bind(this);
  }

  componentDidMount() {
    this.handleChromeState();
  }

  handleButtonClick(event) {
    this.setState({
      darkModeState: event,
    }, () => {
      chrome.storage.sync.set({state: event});
    });
  }

  handleChromeState() {
    chrome.storage.sync.get(['state'], (result) => {
      let state = result.state;
      this.setState({
        darkModeState: state,
      });
    });
  }

  render() {
    return (
      <div>
        <Styled.GlobalStyle currentState={this.state.darkModeState} />
        <Styled.Container>
          <Styled.DarkModeText currentState={this.state.darkModeState}>Dark Mode</Styled.DarkModeText>
          <SwitchButton onSwitchBtnClick={this.handleButtonClick} switchState={this.state.checked} />
        </Styled.Container>
        <Styled.Box>
          <Styled.SearchIcon src={logo}></Styled.SearchIcon>
          <Styled.GoogleQueryText currentState={this.state.darkModeState}>Advanced Google Search</Styled.GoogleQueryText>
          <Styled.Version currentState={this.state.darkModeState}>(1.1.1)</Styled.Version>
        </Styled.Box>
        <SearchBox currentState={this.state.darkModeState} />
      </div>
    )
  }
}

export default Search;