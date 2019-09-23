import React, { Component } from "react";

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
      filters: [],
      sortOrder: "ASC",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleFilter = event => {
    console.log(event.target.name, event.target.value);
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchQuery">
          Search for player by name
          <input
            name="searchQuery"
            value={this.state.searchQuery}
            type="text"
          />
        </label>
        <fieldset>
          <legend>Filter players by position</legend>
          {filters.map(filterObject => (
            <label>
              {filterObject.label}
              <input
                type="checkbox"
                name={filterObject.value}
                onChange={toggleFilter}
                value={this.state.filters.includes(filterObj.value)}
              />
            </label>
          ))}
        </fieldset>
        <label>
          Sort players
          <select value={this.state.sortOrder}>
            {sort.map(sortObj => (
              <option value={sortObj.value}>{sortObj.label}</option>
            ))}
          </select>
        </label>
        <button type="submit">Search</button>
      </form>
    );
  }
}
