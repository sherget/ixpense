import React, { Component } from 'react';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuActive: 'hidden',
      loggedIn: false
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu = () => {
    if (this.state.menuActive === 'hidden') {
      this.setState({
        menuActive: 'visible'
      });
      /* }, () => {console.log(this.state.menuActive)});*/
    } else {
      this.setState({
        menuActive: 'hidden'
      });
      /* }, () => {console.log(this.state.menuActive)});*/
    }
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
      <header>
          <section id={styles.globalNav}>
              <div>
                  <h3>ixpense</h3>
              </div>
              <div>
                  { this.state.loggedIn
                    ?
                      <FontAwesomeIcon onClick={() => this.toggleMenu()} icon={['fas', 'ellipsis-v']} pull="right" size="lg" fixedWidth />
                    :
                      <span className={styles.loginButton} onClick={() => this.logIn()}>
                        <FontAwesomeIcon icon={['fas', 'user-circle']} pull="right" size="lg" fixedWidth />
                        <span>
                          login
                        </span>
                      </span>
                  }
              </div>
          </section>


          { this.state.loggedIn
          ?
            <div className={`${styles.mobileNavContainer} ${styles[this.state.menuActive]}`}>
                    <FontAwesomeIcon className={styles.exitMenu} onClick={() => this.toggleMenu()} icon={['fas', 'times']} pull="right" size="lg" fixedWidth />
                    <nav>
                          <a href="#abc">
                              <FontAwesomeIcon icon={['fas', 'wallet']} pull="left" size="lg" fixedWidth />
                              Expenses
                          </a>
                          <a href="#abc">
                              <FontAwesomeIcon icon={['fas', 'coins']} pull="left" size="lg" fixedWidth />
                              Fixed costs
                          </a>
                          <a href="#abc">
                              <FontAwesomeIcon icon={['fas', 'university']} pull="left" size="lg" fixedWidth />
                              Debt
                          </a>
                          <a href="#abc">
                              <FontAwesomeIcon icon={['fas', 'chart-line']} pull="left" size="lg" fixedWidth />
                              Investment
                          </a>
                          <a href="#abc">
                              <FontAwesomeIcon icon={['fas', 'user-tie']} pull="left" size="lg" fixedWidth />
                              Business Expense
                          </a>
                          <a href="#abc">
                              <FontAwesomeIcon icon={['fas', 'user-shield']} pull="left" size="lg" fixedWidth />
                              Insurances
                          </a>
                    </nav>
                    <nav>
                          <a href="#abc">
                              <FontAwesomeIcon icon={['fas', 'cogs']} pull="left" size="lg" fixedWidth />
                              Settings
                          </a>
                    </nav>
                    <button onClick={() => this.logOut()} className={styles.logOutBtn}>Logout</button>
            </div>
            :
            <div></div>
          }

          { this.state.loggedIn
            ?
            <div className={styles.authenticated} id={styles.headerBg}>
            </div>
          :
            <div id={styles.headerBg}>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
            </div>
          }
     </header>
    );
  }
}

export default Header;
