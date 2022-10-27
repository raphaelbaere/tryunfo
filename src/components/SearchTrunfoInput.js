import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchTrunfoInput extends Component {
  render() {
    const { searchCardTrunfo, onInputSearchTrunfoChange } = this.props;
    return (
      <label htmlFor="searchName-input">
        Super Trunfo
        <input
          value={ searchCardTrunfo }
          name="searchCardName"
          onChange={ onInputSearchTrunfoChange }
          type="checkbox"
          data-testid="trunfo-filter"
        />
      </label>
    );
  }
}

SearchTrunfoInput.propTypes = {
  searchCardTrunfo: PropTypes.string.isRequired,
  onInputSearchTrunfoChange: PropTypes.func.isRequired,
};
