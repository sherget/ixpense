import React, { Component } from 'react';
import '../../packages/fontawesome';
import styles from './App.module.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Home from '../home/Home';

class App extends Component {
  render() {
      return (
          <div className={styles['App']}>
            <Header/>
            <main>
              <Home/>
            </main>
            <Footer/>
          </div>
      );
  }
}

export default App;
