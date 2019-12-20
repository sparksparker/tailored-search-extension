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
        <SwitchButton onSwitchBtnClick={this.handleButtonClick} switchState={this.state.checked} />
        <Styled.Box>
          <Styled.GoogleQueryText currentState={this.state.darkModeState}>Advanced Google Search</Styled.GoogleQueryText>
        </Styled.Box>
        <SearchBox currentState={this.state.darkModeState} />
      </div>
    )
  }
}

export default Search;