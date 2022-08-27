import styles from "./Subscription.module.scss";


const Subscription = () => {
  return (
    <div className={styles.subscription_container}>

      <div className={styles.subscription_content}>
        <h2>Join Our DeFi Community</h2>
        <form action="https://getform.io/f/2fb243df-c5e0-4e9e-92c8-c0e659948c10"
              method="POST">

          <div className={styles.form_container}>
            <input type="email" 
                   name="email"
                   placeholder="Enter your email"/>
            <button className="btn">Sign Up</button>
          </div>

          <div className={styles.form_container}>
            <input type="checkbox" id="newsletter"/>
            <label htmlFor="newsletter">
               Yes, I agree to receive email communications from DeFi
            </label>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Subscription