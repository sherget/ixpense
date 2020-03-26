import React, { Component } from 'react';
import '../../packages/fontawesome';
import styles from './App.module.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Home from '../home/Home';

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

class App extends Component {
	constructor(props) {
    super(props);

    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);

    this.state = {
      loggedIn: false
    };

  }

  logIn = () => {
    if (this.state.loggedIn === false) {
      this.setState({
        loggedIn: true
      });
      /* }, () => {console.log(this.state.menuActive)});*/
    }
  }

  logOut = () => {
    if (this.state.loggedIn === true) {
      this.setState({
        loggedIn: false
      });
      /* }, () => {console.log(this.state.menuActive)});*/
    }
  }

  render() {
      return (
          <div className={styles['App']}>
            <Header logOutAction={this.logOut} logInAction={this.logIn} loggedIn={this.state.loggedIn} />
            <main>
              <Home loggedIn={this.state.loggedIn} />
            </main>
            <Footer/>
          </div>
      );
  }
}

export default App;
