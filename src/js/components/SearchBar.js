import React, { Component, PropTypes } from 'react';
import { titles } from '../data/specialties-search.js';
import Autosuggest from 'react-autosuggest';

import classNames from "classnames";

export default class SearchBar extends Component {
 constructor() {
    super();

    this.state = {
    	dropdownOpen: false,
    	searchOpen: false,
      value: '',
      showPrompt: false,
      suggestions: []
    };  

  }

  escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  getSuggestions(value) {
    const escapedValue = this.escapeRegexCharacters(value.trim());
    
    if (escapedValue === '') {
      return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');

    return titles
      .map(section => {
        return {
          title: section.title,
          titles: section.titles.filter(item => regex.test(item.name))
        };
      })
      .filter(section => section.titles.length > 0);
  }

  getSuggestionValue(suggestion) {
    return suggestion.name;
  }

  renderSuggestion(suggestion) {
    return (
      <span>{suggestion.name}</span>
    );
  }

  renderSectionTitle(section) {
    return (
      <strong>{section.title}</strong>
    );
  }

  getSectionSuggestions(section) {
    return section.titles;
  }

  componentDidMount = () => {
    // fetch(this.props.searchData)
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  }

  componentWillUnmount() {
      
  }


  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };
  
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  openDropdown = () => {
    this.setState({
      dropdownOpen: true
    });
  };

  openSearch = () => {
    this.setState({
      searchOpen: true
    });
  };

  togglePrompt = (i) => {
      this.setState({
        showPrompt: !this.state.showPrompt
    });
  }

  render() {
    const { value, suggestions } = this.state;
    const { placeholder, searchData } = this.props;

    // console.log(searchData);
    // const importedData = searchData ? require('searchData') : titles;

    const inputProps = {
      placeholder: placeholder ? placeholder : "Search Everything",
      value,
      onChange: this.onChange
    };

    const classnames = classNames({
      "search-bar": true,
      "search-bar--show-dropdown": this.state.dropdownOpen,
      "search-bar--show-search": this.state.searchOpen
    })

    const { newTitle } = this.props;

    return (
    	<div ref="wrapper" className={classnames}>
	      <Autosuggest 
        multiSection={true}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        renderSectionTitle={this.renderSectionTitle}
        getSectionSuggestions={this.getSectionSuggestions}
        inputProps={inputProps} />

        <i className="iconcss icon-search"></i>
      </div>
    );
  }
}