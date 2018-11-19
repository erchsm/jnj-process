import React, { Component, PropTypes } from 'react';
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

    return this.props.searchData
      .map(section => {
        return {
          title: section.title,
          data: section.data.filter(item => regex.test(item.id))
        };
      })
      .filter(section => section.data.length > 0);
  }

  getSuggestionValue(suggestion) {
    return suggestion.id;
  }

  renderSuggestion(suggestion) {
    return (
      <span>{suggestion.id}</span>
    );
  }

  renderSectionTitle(section) {
    return (
      <strong>{section.title}</strong>
    );
  }

  getSectionSuggestions(section) {
    return section.data;
  }

  // componentDidMount = () => {
  //   window.addEventListener('mousedown', this.handleClickOutside);
  // }

  // componentWillUnmount = () => {
  //   window.removeEventListener('mousedown', this.handleClickOutside);
  // }


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

  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
    this.props.onClick ? this.props.onClick(suggestion) : null;
    this.setState({
      value: ''
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
    const { placeholder, searchData, iconName } = this.props;

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

    return (
    	<div ref="wrapper" className={classnames}>
	      <Autosuggest 
        multiSection={true}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={this.onSuggestionSelected}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        renderSectionTitle={this.renderSectionTitle}
        getSectionSuggestions={this.getSectionSuggestions}
        inputProps={inputProps} />

      <i className={iconName ? ("iconcss " + iconName) : ("iconcss icon-search")}></i>
      </div>
    );
  }
}