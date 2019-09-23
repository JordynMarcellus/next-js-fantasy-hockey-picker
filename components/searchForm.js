import React, { Component } from "react";
import Checkbox from "./checkbox";
import * as formStyles from "./searchForm.styles";

const SORT = [
  { label: "Ascending", value: "ASC" },
  { label: "Descending", value: "DESC" },
];

const FILTERS = [
  {
    label: "Left wing",
    value: "LW",
  },
  {
    label: "Right wing",
    value: "RW",
  },
  {
    label: "Center",
    value: "C",
  },
  {
    label: "Right defense",
    value: "RD",
  },
  {
    label: "Left defense",
    value: "LD",
  },
];

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
      sortOrder: "ASC",
      includeSelected: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  toggleFilter = label => value => {
    this.setState({
      filters: {
        ...this.state.filters,
        [label]: value,
      },
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  handleSortChange = e => {
    this.setState({
      sortOrder: e.target.value,
    });
  };

  render() {
    return (
      <formStyles.StyledForm onSubmit={this.handleSubmit}>
        {/* let's wait until we get search in there... */}
        {/* <label htmlFor="searchQuery">
          Search for player by name
          <input
            name="searchQuery"
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
            value={this.state.searchQuery}
            type="text"
          />
        </label> */}
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
        <label>
          Sort players
          <select value={this.state.sortOrder} onChange={this.handleSortChange}>
            {SORT.map(sortObj => (
              <option
                key={`${sortObj.label.toLowerCase()}`}
                value={sortObj.value}>
                {sortObj.label}
              </option>
            ))}
          </select>
        </label>
        {/* <label>
          Include drafted players
          <Checkbox
            onChange={console.log}
            isSelected={this.state.includeSelected}
          />
        </label> */}
        <button type="submit">Search</button>
      </formStyles.StyledForm>
    );
  }
}

export default SearchForm;
