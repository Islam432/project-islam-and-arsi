import React from 'react'
import Image from './Photo.jpg'
import Styles from "./Before.module.css"

const Before = () => {

const onSubmit =(event) => {
  event.preventDefault();
}
  return (
  <div className={Styles.main_before}>
        <div className={Styles.card}>
      <div className={Styles.card_text}>
        <h1>Subscribe to our Newsletter</h1>
      </div>
      <form onSubmit={onSubmit} className={Styles.input_blok}>
        <input
          type="text"
          placeholder="Your Email Address"
          className={Styles.card_input}
        />
        <button type="submit" className={Styles.card_button}>
          Subscribe
        </button>
      </form>
    </div>
  </div>

  )
}

export default Before