import React, { Component } from 'react';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {
    render() {
        return (
          <footer>
          <nav>
            <a href="#123">footermenu1</a>
            <a href="#123">footermenu2</a>
            <a href="#123">footermenu3</a>
            <a href="#123">footermenu4</a>
          </nav>
          <div>
            <p>
                Legal notice:
                C IXPENSE GmbH
                Errorstroß 18a
                35390 Gießen
            </p>
          </div>
          </footer>
        );
    }
}

export default Footer;
