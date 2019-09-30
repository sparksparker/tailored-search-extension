import React, { Component } from 'react';
import * as Styled from './styled';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      exact: '',
      exclude: '',
      combine1: '',
      combine2: '',
      specificSite: '',
      relatedSites: '',
      beforeDate: '',
      afterDate: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    // html tag for target
    const target = event.target;
    // input id
    const id = target.id;
    // input text
    const value = target.value;

    this.setState({
      [id]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const keyword = this.state.keyword ? this.state.keyword : '';
    const exact = this.state.exact ? `"${this.state.exact}"` : '';
    const exclude = this.state.exclude ? `-${this.state.exclude}` : '';
    const combine1 = this.state.combine1;
    const combine2 = this.state.combine2;
    const combine = combine1 ? `(${combine1}) OR (${combine2})` : '';
    const specificSite = this.state.specificSite ? `site:${this.state.specificSite}` : '';
    const relatedSites = this.state.relatedSites ? `related:${this.state.relatedSites}` : '';
    const beforeDate = this.state.beforeDate ? `before:${this.state.beforeDate}` : '';
    const afterDate = this.state.afterDate ? `after:${this.state.afterDate}` : '';

    window.open(`https://www.google.com/search?q=${keyword}+${exact}+${exclude}+${combine}+${specificSite}+${relatedSites}+${beforeDate}+${afterDate}`, '_blank');
  }

  render() {
    return (
      <div>
        <div className='header'>
          <Styled.SearchBoxContainer onSubmit={this.handleSubmit}>
            <Styled.Label htmlFor='keyword' currentState={this.props.currentState}>
              Keyword Search:
              <Styled.Input type='text' id='keyword' value={this.state.keyword} onChange={this.handleInputChange} currentState={this.props.currentState} />
            </Styled.Label>
            <Styled.Label htmlFor='exact' currentState={this.props.currentState}>
              Exact Match:
              <Styled.Input type='text' id='exact' value={this.state.exact} onChange={this.handleInputChange} currentState={this.props.currentState} />
            </Styled.Label>
            <Styled.Label htmlFor='exclude' currentState={this.props.currentState}>
              Exclude Words:
              <Styled.Input type='text' id='exclude' value={this.state.exclude} onChange={this.handleInputChange} currentState={this.props.currentState} />
            </Styled.Label>
            <Styled.Label htmlFor='combine' currentState={this.props.currentState}>
              Combine Searches:
              <br/>
              <Styled.CombineInput type='text' id='combine1' value={this.state.combine1} onChange={this.handleInputChange} currentState={this.props.currentState} />
              {' '}
              OR
              {' '}
              <Styled.Input type='text' id='combine2' value={this.state.combine2} onChange={this.handleInputChange} currentState={this.props.currentState} />
            </Styled.Label>
            <Styled.Label htmlFor='specificSite' currentState={this.props.currentState}>
              Specific Site:
              <Styled.Input type='text' id='specificSite' value={this.state.specificSite} onChange={this.handleInputChange} currentState={this.props.currentState} />
            </Styled.Label>
            <Styled.Label htmlFor='relatedSites' currentState={this.props.currentState}>
              Related Sites:
              <Styled.Input type='text' id='relatedSites' value={this.state.relatedSites} onChange={this.handleInputChange} currentState={this.props.currentState} />
            </Styled.Label>
            <Styled.Label htmlFor='beforeDate' currentState={this.props.currentState}>
              Before Date (YYYY-MM-DD):
              <Styled.Input type='text' id='beforeDate' value={this.state.beforeDate} onChange={this.handleInputChange} currentState={this.props.currentState} />
            </Styled.Label>
            <Styled.Label htmlFor='afterDate' currentState={this.props.currentState}>
              After Date (YYYY-MM-DD):
              <Styled.Input type='text' id='afterDate' value={this.state.afterDate} onChange={this.handleInputChange} currentState={this.props.currentState} />
            </Styled.Label>
            <Styled.Button type='submit' value='Go!' currentState={this.props.currentState} />
          </Styled.SearchBoxContainer>
        </div>
      </div>
    );
  }
};

export default SearchBox;