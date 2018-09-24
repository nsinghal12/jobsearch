import React, { Component } from 'react';
import Group from './components/Group';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export default class App extends Component {

  render() {
    return <Group>
      <Header />
      <Main />
      <Footer />
    </Group>;
  }
}
