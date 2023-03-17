import React from "react";
import styles from "./Cardblok.module.css";
import { AiFillStar } from "react-icons/ai";

const Cardblok = () => {
  return <div className={styles.card}>
    <header className={styles.minHeder}>text</header>
    <div className={styles.imgblok}>imgblog</div>
    <h5 className={styles.name}>name</h5>
    <footer className={styles.footer}>
        <h4 className={styles.price}>price</h4>
        <div className={styles.starblok}>
            <AiFillStar className={styles.star}/>
            <AiFillStar className={styles.star}/>
            <AiFillStar className={styles.star}/>
            <AiFillStar className={styles.star}/>
            <AiFillStar className={styles.star}/>
           
        </div>
    </footer>
  </div>;
};

export default Cardblok;
