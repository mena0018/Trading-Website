import styles from './Footer.module.scss';


const Footer = () => {

  return (
    <footer id="platform"> 
      <div className={styles.footer_container}>

        <div className={styles.col}>
          <h4>Products</h4>
          <p>App</p>
          <p>Analytics</p>
          <p>Token Lists</p>
          <p>Defi</p>
        </div>

        <div className={styles.col}>
          <h4>Developers</h4>
          <p>App</p>
          <p>Analytics</p>
          <p>Token Lists</p>
          <p>Defi</p>
        </div>

        <div className={styles.col}>
          <h4>Governance</h4>
          <p>App</p>
          <p>Analytics</p>
          <p>Token Lists</p>
          <p>Defi</p>
        </div>

        <div className={styles.col}>
          <h4>About</h4>
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