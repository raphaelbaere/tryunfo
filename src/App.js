import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {

  validateInfo = () => {
    const { cardName, cardImage, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardRare } = this.state;
    const attr1 = parseInt(cardAttr1, 10);
    const attr2 = parseInt(cardAttr2, 10);
    const attr3 = parseInt(cardAttr3, 10)
    const isLengthZero = cardName.length === 0 || cardDescription.length === 0 || cardImage.length === 0 || cardRare.length === 0;
    const isValidSum = attr1 + attr2 + attr3 <= 210;
    const isNegative = attr1 < 0 || attr2 < 0 || attr3 < 0;
    const isBiggerThan90 = attr1 > 90 || attr2 > 90 || attr3 > 90;
    if (!isLengthZero && isValidSum && !isNegative && !isBiggerThan90) {
      this.setState({
        isSaveButtonDisabled: false,
      })
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      })
    }
  }

  onInputChange = ( { target } ) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      this.validateInfo();
    })
  }

  onSaveButtonClick = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
    }, () => {
      this.validateInfo();
    })
  }

  state = {
    cardName: '',
    cardImage: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardRare: '',
    cardTrunfo: false,
    onInputChange: this.onInputChange,
    isSaveButtonDisabled: true,
    onSaveButtonClick: this.onSaveButtonClick,
  }

  render() {
    const { cardName, cardImage, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardRare, cardTrunfo, onInputChange, isSaveButtonDisabled, onSaveButtonClick } = this.state
    return (
      <div>
        <Form cardName={ cardName } cardImage={ cardImage } cardDescription={ cardDescription } cardAttr1={ cardAttr1 } cardAttr2 ={ cardAttr2 } cardAttr3={ cardAttr3 } cardRare={ cardRare } cardTrunfo = { cardTrunfo } onInputChange={ onInputChange } isSaveButtonDisabled={ isSaveButtonDisabled } onSaveButtonClick={ onSaveButtonClick }/>
        <Card cardName={ cardName } cardImage={ cardImage } cardDescription={ cardDescription } cardAttr1={ cardAttr1 } cardAttr2 ={ cardAttr2 } cardAttr3={ cardAttr3 } cardRare={ cardRare } cardTrunfo = { cardTrunfo }/>
      </div>
    );
  }
}

export default App;
