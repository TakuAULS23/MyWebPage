import React from 'react'
import { Link } from 'gatsby'
import styles from './header.module.css'

const Header = () => {
  return (
    <header>
      <h1>
        <Link className={styles.link} to='/'>もふぷりん</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link className={styles.link} to='/uchinoko'>うちのこ紹介</Link>
          </li>
          <li>
            <Link className={styles.link} to='/games'>作ったゲーム</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;