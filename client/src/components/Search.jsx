import React, { Component } from 'react';
import logo from '../../dist/search-icon.png';
import SearchBox from './SearchBox';
import * as Styled from './styled';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
    // this.getData = this.getData.bind(this);
  }

  // componentDidMount() {
  //   this.getData();
  // }

  // getData() {

  // }

  render() {
    // if (!this.state.isLoaded) {
    //   return <div>Loading ..</div>
    // }
    return (
      <div>
        <Styled.Box>
          <Styled.SearchIcon src={logo}></Styled.SearchIcon>
          <Styled.GoogleQueryText>Google Query</Styled.GoogleQueryText>
          <Styled.Version>(1.0.0)</Styled.Version>
        </Styled.Box>
        <SearchBox />
      </div>
    )
  }
}

export default Search;