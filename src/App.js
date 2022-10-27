import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import SearchNameInput from './components/SearchNameInput';
import SearchRarityInput from './components/SearchRarityInput';

class App extends React.Component {
  state = {
    cardName: '',
    cardImage: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    deck: [],
    hasTrunfo: false,
    hasDeleteButton: false,
    searchCardName: '',
    searchCardRarity: 'todas',
  };

  validateInfo = () => {
    const { cardName, cardImage,
      cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardRare } = this.state;
    const attr1 = parseInt(cardAttr1, 10);
    const attr2 = parseInt(cardAttr2, 10);
    const attr3 = parseInt(cardAttr3, 10);
    const maxSumAttr = 210;
    const maxUniqueAttr = 90;
    const isLengthZero = cardName.length === 0 || cardDescription.length === 0
    || cardImage.length === 0 || cardRare.length === 0;
    const isValidSum = attr1 + attr2 + attr3 <= maxSumAttr;
    const isNegative = attr1 < 0 || attr2 < 0 || attr3 < 0;
    const isBiggerThan90 = attr1 > maxUniqueAttr || attr2 > maxUniqueAttr
    || attr3 > maxUniqueAttr;
    if (!isLengthZero && isValidSum && !isNegative && !isBiggerThan90) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'cardTrunfo' && value === 'on') {
      this.setState({
        [name]: true,
      });
    } else {
      this.setState({
        [name]: value,
      }, () => {
        this.validateInfo();
      });
    }
  };

  onSaveButtonClick = () => {
    this.setState({
      hasDeleteButton: true,
    });
    const { cardName, cardDescription,
      cardImage, cardAttr1, cardAttr2,
      cardAttr3, cardRare, cardTrunfo, deck } = this.state;
    deck.push({
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    });
    const checkForTrunfo = deck.some((card) => card.cardTrunfo === true);
    if (checkForTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }

    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
    }, () => {
      this.validateInfo();
    });
  };

  onButtonDeleteClick = (event) => {
    const { deck } = this.state;
    const cardNameToBeRemoved = event.target.parentNode.firstChild.innerHTML;
    const indexOfCardToBeRemoved = deck.findIndex((card) => (
      card.cardName === cardNameToBeRemoved));
    if (deck[indexOfCardToBeRemoved].cardTrunfo) {
      this.setState({
        hasTrunfo: false,
      });
    }
    deck.splice(indexOfCardToBeRemoved, 1);
    this.setState({
      deck,
    });
  };

  showCards = () => {
    const { deck, hasDeleteButton } = this.state;
    const allDeck = deck.map((card) => (
      <Card
        key={ card.cardName }
        cardName={ card.cardName }
        cardImage={ card.cardImage }
        cardDescription={ card.cardDescription }
        cardAttr1={ card.cardAttr1 }
        cardAttr2={ card.cardAttr2 }
        cardAttr3={ card.cardAttr3 }
        cardRare={ card.cardRare }
        cardTrunfo={ card.cardTrunfo }
        hasDeleteButton={ hasDeleteButton }
        onButtonDeleteClick={ this.onButtonDeleteClick }
      />));
    return allDeck;
  };

  validaSearchName = () => {
    const { searchCardName, deck } = this.state;
    const filteredDeck = deck.filter((card) => card.cardName.includes(searchCardName));
    this.setState({
      deck: filteredDeck,
    });
  };

  validaSearchRarity = () => {
    const { searchCardRarity, deck } = this.state;
    if (searchCardRarity === 'todas') {
      return;
    }
    const filteredDeck = deck.filter((card) => card.cardRare === searchCardRarity);
    this.setState({
      deck: filteredDeck,
    });
  };

  onInputSearchChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      this.validaSearchName();
    });
  };

  onInputSearchRarityChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      this.validaSearchRarity();
    });
  };

  render() {
    const { cardName, cardImage, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardRare, cardTrunfo,
      isSaveButtonDisabled, hasTrunfo, searchCardName, searchCardRarity } = this.state;
    return (
      <div>
        <Form
          cardName={ cardName }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ cardName }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <div>
          <h1>Seu baralho</h1>
          <SearchNameInput
            searchCardName={ searchCardName }
            onInputSearchChange={ this.onInputSearchChange }
          />
          <SearchRarityInput
            searchCardRarity={ searchCardRarity }
            onInputSearchRarityChange={ this.onInputSearchRarityChange }
          />
          {this.showCards()}
        </div>
      </div>
    );
  }
}

export default App;
