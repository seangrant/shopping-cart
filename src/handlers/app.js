import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Counter from 'store/counter/counter';
import store from 'store/createStore';
import Header from 'header/header';
import { Link } from 'react-router'

export default class App extends Component {
  render() {
    const { children } = this.props;
    return (
        <div>
          <Header/>
          { children }
        </div>
    )
  }
}
