import styles from "././About.module.scss";
import AboutCard from "../../components/AboutCard/AboutCard";
import { data } from "../../data/about";


const About = () => {

  const listCard = data.map ((item, index) =>
    <AboutCard heading={item.heading} 
               icon={item.icon} 
               text={item.text}
               key={index} /> 
 )
  

  return (
    <div className={styles.about_container}>
      <div className={styles.about_content}>
         
        <h2>A Growing Protocol Ecosystem</h2>
        <p>The Defi protocol system empowers developers, liquidity providers and traders to participate in a financial marketplace thats is open and accessible to all</p>

        <div className={styles.list_card}>
          {listCard}
        </div>

        <a href="/" className="btn">Use Defi</a>
      </div>
    </div>
  )
}

export default About