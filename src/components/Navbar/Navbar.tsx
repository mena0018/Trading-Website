import { useState } from "react";
import styles from "./Navbar.module.scss";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import cx from 'classnames'


const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click)


  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1>Defi</h1>

        <ul className={ cx(styles.nav, {[styles.active]: click}) }>
          <li className={styles.nav_item}>
            <a href="/">Platform</a>
          </li>

          <li className={styles.nav_item}>
            <a href="/">Developers</a>
          </li>

          <li className={styles.nav_item}>
            <a href="/">Community</a>
          </li>

          <li className={styles.nav_item}>
            <a href="/">About</a>
          </li>


          <li className={styles.nav_item}>
            <a href="/" className="btn">Use Defi</a>
          </li>
        </ul>

        <div className={styles.hamburger} onClick={handleClick}>
            { click ? <AiOutlineClose />  : <AiOutlineMenu />  }
          </div>
      </div>
    </nav>
  )
}

export default Navbar