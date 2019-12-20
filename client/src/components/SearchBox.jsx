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
    const target = event.target;
    const id = target.id;
    const value = target.value;

    this.setState({
      [id]: value,
    });
  }

  handleSubmit(event) {
    console.log('clicked')
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
        <form class='ui form' onSubmit={this.handleSubmit}>
          <div class='equal width fields'>
            {/* keyword search */}
            <div class='field' style={ {'margin-bottom': 1} }>
              <Styled.Label htmlFor='keyword' currentState={this.props.currentState}>
                Keyword Search:
                <div class='ui mini input'>
                  <Styled.Input type='text' placeholder='Keyword..' id='keyword' value={this.state.keyword} onChange={this.handleInputChange} currentState={this.props.currentState} />
                </div>
              </Styled.Label>
            </div>
            {/* exact match */}
            <div class='field' style={ {'margin-bottom': 1} }>
              <Styled.Label htmlFor='exact' currentState={this.props.currentState}>
                Exact Match:
                <div class='ui mini input'>
                  <Styled.Input type='text' placeholder='Exact match..' id='exact' value={this.state.exact} onChange={this.handleInputChange} currentState={this.props.currentState} />
                </div>
              </Styled.Label>
            </div>
            {/* exclude */}
            <div class='field' style={ {'margin-bottom': 1} }>
              <Styled.Label htmlFor='exclude' currentState={this.props.currentState}>
                Exclude Words:
                <div class='ui mini input'>
                  <Styled.Input type='text' placeholder='Exclude words..' id='exclude' value={this.state.exclude} onChange={this.handleInputChange} currentState={this.props.currentState} />
                </div>
              </Styled.Label>
            </div>
            {/* combine */}
            <div class='field' style={ {'margin-bottom': 1} }>
              <Styled.Label htmlFor='combine' currentState={this.props.currentState}>
                Combine Searches:
                {/* comebine1 */}
                <div class='ui mini input' style={ {'margin-bottom': 5} } >
                  <Styled.Input type='text' placeholder='Combine 1st search..' id='combine1' value={this.state.combine1} onChange={this.handleInputChange} currentState={this.props.currentState} />
                </div>
                {/* comebine2 */}
                <div class='ui mini input'>
                  <Styled.Input type='text' placeholder='With 2nd search..' id='combine2' value={this.state.combine2} onChange={this.handleInputChange} currentState={this.props.currentState} />
                </div>
              </Styled.Label>
            </div>
            {/* specific site */}
            <div class='field' style={ {'margin-bottom': 1} }>
              <Styled.Label htmlFor='specificSite' currentState={this.props.currentState}>
                Specific Site:
                <div class='ui mini input'>
                  <Styled.Input type='text' placeholder='Specific site..' id='specificSite' value={this.state.specificSite} onChange={this.handleInputChange} currentState={this.props.currentState} />
                </div>
              </Styled.Label>
            </div>
            {/* related sites */}
            <div class='field' style={ {'margin-bottom': 1} }>
              <Styled.Label htmlFor='relatedSites' currentState={this.props.currentState}>
                Related Sites:
                <div class='ui mini input'>
                  <Styled.Input type='text' placeholder='Related sites..' id='relatedSites' value={this.state.relatedSites} onChange={this.handleInputChange} currentState={this.props.currentState} />
                </div>
              </Styled.Label>
            </div>
            {/* Before Date YYYY-MM-DD */}
            <div class='field' style={ {'margin-bottom': 1} }>
              <Styled.Label htmlFor='beforeDate' currentState={this.props.currentState}>
                Before Date:
                <div class='ui mini input'>
                  <Styled.Input type='text' placeholder='YYYY-MM-DD' id='beforeDate' value={this.state.beforeDate} onChange={this.handleInputChange} currentState={this.props.currentState} />
                </div>
              </Styled.Label>
            </div>
            {/* After Date YYYY-MM-DD */}
            <div class='field' style={ {'margin-bottom': 5} }>
              <Styled.Label htmlFor='afterDate' currentState={this.props.currentState}>
                After Date:
                <div class='ui mini input'>
                  <Styled.Input type='text' placeholder='YYYY-MM-DD' id='afterDate' value={this.state.afterDate} onChange={this.handleInputChange} currentState={this.props.currentState} />
                </div>
              </Styled.Label>
            </div>
          </div>
          {/* button */}
          <div style={ {'display': 'flex', 'justify-content': 'center', 'margin-bottom': 10} }>
            <button class='ui vertical animated button' style={ {'align-items': 'center'} }>
              <div class='visible content'>
                <i class='search icon'></i>
              </div>
              <div class='hidden content'>Go!</div>
            </button>
          </div>
        </form>
      </div>
    );
  }
};

export default SearchBox;