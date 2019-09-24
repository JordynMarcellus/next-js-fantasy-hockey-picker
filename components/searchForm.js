import React, { Component } from "react";
import Checkbox from "./checkbox";
import * as formStyles from "./searchForm.styles";
import { FILTERS } from "./utils/consts";

// TODO -- let's actually split out the filter and the search later. For now...
class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      filters: {
        RD: false,
        LD: false,
        C: false,
        RW: false,
        LW: false,
      },
      includeSelected: false,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
  }

  toggleFilter = label => value => {
    this.setState({
      filters: {
        ...this.state.filters,
        [label]: value,
      },
    });
  };

  handleSearch = event => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.searchQuery);
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      filters: filtersObj,
      searchQuery,
      sortOrder,
      includeSelected,
    } = this.state;
    const filters = Object.keys(filtersObj)
      .reduce((filterString, objectFilterKey) => {
        if (this.state.filters[objectFilterKey] === false) {
          return filterString;
        }

        return (filterString += `${objectFilterKey},`);
      }, "")
      .replace(/,\s*$/, "");

    this.props.onFormSubmit({
      filters: filters,
      searchQuery,
      sortOrder,
      includeSelected,
    });
  };

  render() {
    return (
      <>
        <formStyles.StyledForm onSubmit={this.handleSearch}>
          {/* let's wait until we get search in there... */}
          <label htmlFor="searchQuery">
            Search for player by name
            <input
              name="searchQuery"
              onChange={e => this.setState({ [e.target.name]: e.target.value })}
              value={this.state.searchQuery}
              type="text"
            />
            <button onClick={this.handleSearch}>Search by name</button>
          </label>
        </formStyles.StyledForm>
        <formStyles.StyledForm onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Filter players by position</legend>
            {FILTERS.map(filterObject => (
              <label
                key={`${filterObject.label.toLowerCase()}--${
                  filterObject.value
                }`}>
                {filterObject.label}
                <Checkbox
                  name={filterObject.value}
                  onChange={this.toggleFilter(filterObject.value)}
                  isSelected={this.state.filters[filterObject.value]}
                />
              </label>
            ))}
          </fieldset>
          {/* <label>
          Include drafted players
          <Checkbox
            onChange={console.log}
            isSelected={this.state.includeSelected}
          />
        </label> */}
          <button type="submit">Search</button>
        </formStyles.StyledForm>
      </>
    );
  }
}

export default SearchForm;
