import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchNameInput extends Component {
  render() {
    const { searchCardName, onInputSearchChange, disableSearch } = this.props;
    return (
      <label htmlFor="searchName-input">
        Filtro de busca por nome
        <input
          value={ searchCardName }
          name="searchCardName"
          onChange={ onInputSearchChange }
          type="text"
          data-testid="name-filter"
          disabled={ disableSearch }
        />
      </label>
    );
  }
}

SearchNameInput.propTypes = {
  searchCardName: PropTypes.string.isRequired,
  onInputSearchChange: PropTypes.func.isRequired,
  disableSearch: PropTypes.bool.isRequired,
};
