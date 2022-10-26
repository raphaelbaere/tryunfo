import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Nome
          <input
            id="name-input"
            type="text"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <textarea
            id="description-input"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1-input">
          Primeiro Atributo
          <textarea
            id="attr1-input"
            type="number"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2-input">
          Segundo Atributo
          <textarea
            id="attr2-input"
            type="number"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3-input">
          Terceiro Atributo
          <textarea
            id="attr3-input"
            type="number"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image-input">
          Imagem
          <input
            id="image-input"
            type="text"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rare-input">
          Raridade
          <select id="rare-input" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          É Super Trunfo?
          <input
            id="trunfo-input"
            type="checkbox"
            data-testid="trunfo-input"
          />
        </label>
        <button id="save-button" type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}
