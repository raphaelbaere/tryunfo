import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {

  onInputChange = ( { target } ) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
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
    onInputChange: this.onInputChange
  }

  render() {
    const { cardName, cardImage, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardRare, cardTrunfo, onInputChange } = this.state
    return (
      <div>
        <Form cardName={ cardName } cardImage={ cardImage } cardDescription={ cardDescription } cardAttr1={ cardAttr1 } cardAttr2 ={ cardAttr2 } cardAttr3={ cardAttr3 } cardRare={ cardRare } cardTrunfo = { cardTrunfo } onInputChange={ onInputChange }/>
        <Card cardName={ cardName } cardImage={ cardImage } cardDescription={ cardDescription } cardAttr1={ cardAttr1 } cardAttr2 ={ cardAttr2 } cardAttr3={ cardAttr3 } cardRare={ cardRare } cardTrunfo = { cardTrunfo }/>
      </div>
    );
  }
}

export default App;
