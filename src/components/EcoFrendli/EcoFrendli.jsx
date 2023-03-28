import React from "react";
import styles from "./EcoFrendli.module.css";
import Image from "next/image";
import img from "./Photo.jpg";
const EcoFrendli = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.blok1}>
        <div className={styles.min_blok}>
          <Image alt="" className={styles.img1} src={img} />
        </div>
        <div className={styles.min_blok2}>
          <div className={styles.card}>
            <h1 className={styles.title}>Eco Friendly</h1>
            <h2 className={styles.title2}>
              Econis is a Friendly Organic Store
            </h2>
            <div className={styles.base}>
              <h3 className={ styles.title_Blok}>
                Start with Our Company First
              </h3>
              <p className={styles.paragrav}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
            <div className={styles.base}>
              <h3 className={ styles.title_Blok}>
              Learn How to Grow Yourself
              </h3>
              <p className={styles.paragrav}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
            <div className={styles.base}>
              <h3 className={ styles.title_Blok}>
              Farming Strategies of Today
              </h3>
              <p className={styles.paragrav}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoFrendli;
