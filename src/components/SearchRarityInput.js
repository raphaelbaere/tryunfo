import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchRarityInput extends Component {
  render() {
    const { searchCardRarity, onInputSearchRarityChange } = this.props;
    return (
      <label htmlFor="searchRarity-input">
        Filtro de busca por raridade
        <select
          data-testid="rare-filter"
          id="searchRarity-input"
          name="searchCardRarity"
          value={ searchCardRarity }
          onChange={ onInputSearchRarityChange }
        >
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
      </label>
    );
  }
}

SearchRarityInput.propTypes = {
  searchCardRarity: PropTypes.string.isRequired,
  onInputSearchRarityChange: PropTypes.func.isRequired,
};
