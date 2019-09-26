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
            <label className='label' htmlFor='keyword'>
              Keyword Search:
              <Styled.Input type='text' id='keyword' value={this.state.keyword} onChange={this.handleInputChange} />
            </label>
            <label className='label' htmlFor='exact'>
              Exact Match:
              <Styled.Input type='text' id='exact' value={this.state.exact} onChange={this.handleInputChange} />
            </label>
            <label className='label' htmlFor='exclude'>
              Exclude Words:
              <Styled.Input type='text' id='exclude' value={this.state.exclude} onChange={this.handleInputChange} />
            </label>
            <label className='label' htmlFor='combine'>
              Combine Searches:
              <br/>
              <Styled.CombineInput type='text' id='combine1' value={this.state.combine1} onChange={this.handleInputChange} />
              {' '}
              OR
              {' '}
              <Styled.Input type='text' id='combine2' value={this.state.combine2} onChange={this.handleInputChange} />
            </label>
            <label className='label' htmlFor='specificSite'>
              Specific Site:
              <Styled.Input type='text' id='specificSite' value={this.state.specificSite} onChange={this.handleInputChange} />
            </label>
            <label className='label' htmlFor='relatedSites'>
              Related Sites:
              <Styled.Input type='text' id='relatedSites' value={this.state.relatedSites} onChange={this.handleInputChange} />
            </label>
            <label className='label' htmlFor='beforeDate'>
              Before Date (YYYY-MM-DD):
              <Styled.Input type='text' id='beforeDate' value={this.state.beforeDate} onChange={this.handleInputChange} />
            </label>
            <label className='label' htmlFor='afterDate'>
              After Date (YYYY-MM-DD):
              <Styled.Input type='text' id='afterDate' value={this.state.afterDate} onChange={this.handleInputChange} />
            </label>
            <input type='submit' value='Go!' />
          </Styled.SearchBoxContainer>
        </div>
      </div>
    );
  }
};

export default SearchBox;