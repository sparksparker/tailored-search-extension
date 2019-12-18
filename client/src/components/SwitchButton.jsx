import React, { Component } from 'react';

class SwitchButton extends Component {
  constructor() {
    super();
    this.state = {
      checked: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChromeState = this.handleChromeState.bind(this);
  }

  componentDidMount() {
    this.handleChromeState();
  }

  handleChange() {
    let checkedState = this.state.checked;

    this.setState({
      checked: !checkedState
    }, () => this.props.onSwitchBtnClick(!checkedState));
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
      <button
        onClick={this.handleChange}
        class='ui circular icon button'
        style={
          {
            'margin-top': '3px',
            'margin-right': '3px',
          }
        }>
        <i class='sun icon'></i>
      </button>
    );
  }
}

export default SwitchButton;