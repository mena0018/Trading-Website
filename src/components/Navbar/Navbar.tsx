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
          <li className={styles.nav_item} onClick={handleClick}>
            <a href="#about" className={styles.link_underline}>About</a>
          </li>

          <li className={styles.nav_item} onClick={handleClick}>
            <a href="#developers" className={styles.link_underline}>Developers</a>
          </li>

          <li className={styles.nav_item} onClick={handleClick}> 
            <a href="#community" className={styles.link_underline}>Community</a>
          </li>

          <li className={styles.nav_item} onClick={handleClick}>
            <a href="#platform" className={styles.link_underline}>Platform</a>
          </li>

          <li className={styles.nav_item} onClick={handleClick}>
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