import styles from './Footer.module.scss';


const Footer = () => {

  return (
    <footer id="platform"> 
      <div className={styles.footer_container}>

        <div className={styles.col}>
          <h2>Products</h2>
          <p>App</p>
          <p>Analytics</p>
          <p>Token Lists</p>
          <p>Defi</p>
        </div>

        <div className={styles.col}>
          <h2>Developers</h2>
          <p>App</p>
          <p>Analytics</p>
          <p>Token Lists</p>
          <p>Defi</p>
        </div>

        <div className={styles.col}>
          <h2>Governance</h2>
          <p>App</p>
          <p>Analytics</p>
          <p>Token Lists</p>
          <p>Defi</p>
        </div>

        <div className={styles.col}>
          <h2>About</h2>
          <p>App</p>
          <p>Analytics</p>
          <p>Token Lists</p>
          <p>Defi</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer