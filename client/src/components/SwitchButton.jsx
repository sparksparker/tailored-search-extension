import React, { Component } from 'react';
import Switch from 'react-switch';
import * as Styled from './styled';

class SwitchButton extends Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChromeState = this.handleChromeState.bind(this);
  }

  componentDidMount() {
    this.handleChromeState();
  }

  handleChange(checked) {
    this.setState({
      checked,
    }, () => this.props.onSwitchBtnClick(checked));
  }

  handleChromeState() {
    chrome.storage.sync.get(['state'], (result) => {
      let state = result.state;
      this.setState({
        checked: state,
      });
    });
  }

  render() {
    return (
      <label htmlFor="material-switch">
        <Switch
          checked={this.state.checked}
          onChange={this.handleChange}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={13}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={10}
          width={20}
          className="react-switch"
          id="material-switch"
        />
      </label>
    );
  }
}

export default SwitchButton;