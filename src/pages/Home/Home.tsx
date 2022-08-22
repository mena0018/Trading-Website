import styles from "./Home.module.scss";
import BackgroundVideo from "../../assets/video.mp4";


const Home = () => {
  
  return (
    <div className={styles.home}>

      <video autoPlay loop muted>
        <source src={BackgroundVideo} type='video/mp4' /> 
      </video>

      <div className={styles.home_header}>
        <h1>Decentralized</h1>
        <h1><span>Trading </span>Protocol</h1>
        <p>Guaranteed liquidity trading for millions of users and top Ethereum applications.</p>

        <div className={styles.btn_group}>
          <button style={{ margin:"1rem" }} className="btn">Use Defi</button>
          <button style={{ margin:"1rem" }} className="btn btn-outline">FAQ</button>
        </div>
      </div>

      <div className={styles.home_bottom}>
        <h2>Total Volume Secured : $45,561,625.00</h2>
      </div>

    </div>
  )
}

export default Home