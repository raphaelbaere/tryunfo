import React, { Component } from 'react';
import clogo from './clogo.png';
import naruto from './naruto.png';

export default class Header extends Component {
  render() {
    return (
      <header>
        <img className="logo" src={ clogo } alt="logo" />
        <img className="naruto" src={ naruto } alt="naruto" />
      </header>
    );
  }
}
