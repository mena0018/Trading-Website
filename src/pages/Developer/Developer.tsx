import styles from "./Developer.module.scss";
import Terminal from "../../assets/terminal.webp";


const Developer = () => {
  return (
    <div className={styles.developer_container} id="developers">
      <div className={styles.developer_content}>

        <div className={styles.informations}>
          <h2>Superpowers for DEFI developers</h2>
          <p>Checkout the <span>documentation</span>, the <span>quick start</span> or a guide below to integrate your project with thousands of tokens and billions in liquidity </p>
        </div>

        <div className={styles.img_container}>
          <div className={styles.img_content}>
            <img src={Terminal} alt="Bash Terminal" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Developer