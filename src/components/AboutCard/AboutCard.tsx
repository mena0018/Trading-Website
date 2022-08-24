import styles from "./AboutCard.module.scss";
import { AboutCardType } from '../../types/AboutCardType';


const AboutCard = ({icon, heading, text}: AboutCardType) => {
  
  return (
    <div className={styles.card_container}>
      
      <div className={styles.icon_container}>
        <img src={icon} alt="icon" />
      </div>

      <h3>{heading}</h3>
      <p>{text}</p>
    </div>
  )
}

export default AboutCard