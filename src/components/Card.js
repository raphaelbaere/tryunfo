import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasDeleteButton, onButtonDeleteClick } = this.props;
    return (
      <div className="card-container">
        <h2 className="card-name" data-testid="name-card">{ cardName }</h2>
        <p className="card-desc" data-testid="description-card">{ cardDescription }</p>
        <div className="card-attrs">
          <p className="card-attr" data-testid="attr1-card">{ cardAttr1 }</p>
          <p className="card-attr" data-testid="attr2-card">{ cardAttr2 }</p>
          <p className="card-attr" data-testid="attr3-card">{ cardAttr3 }</p>
        </div>
        <img
          className="card-img"
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <p className="card-rare" data-testid="rare-card">{ cardRare }</p>
        { cardTrunfo
          ? (
            <p
              className="card-trunfo"
              data-testid="trunfo-card"
            >
              Super Trunfo
            </p>) : ''}
        { hasDeleteButton
          ? (
            <button
              type="button"
              className="card-delete-button"
              data-testid="delete-button"
              onClick={ onButtonDeleteClick }
            >
              Excluir
            </button>) : ''}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasDeleteButton: PropTypes.bool,
  onButtonDeleteClick: PropTypes.func,
};

Card.defaultProps = {
  hasDeleteButton: false,
  onButtonDeleteClick: () => {},
};
