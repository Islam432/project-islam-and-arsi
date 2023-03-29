import React from "react";
import styles from "./ForYouHome.module.css";
import { FaArrowRight } from "react-icons/fa";
import Heder from "./../AboutListener/Heder/Heder";
import Cardblok from "../Cardblok/Cardblok";
const ForYouHome = () => {
  return (
    <div className={styles.cont}>
      <header className={styles.banner}>
        <div className={styles.blok1}>
          <div className={styles.minblok}>
            <div className={styles.minbloktitle}>
              <h2>Offer</h2>
              <p>We Offer Organic For You</p>
            </div>

            <div className={styles.ButtonCatalog}>
              <h4 className={styles.htext}>View All Product</h4>
              <div className={styles.arrovicon}> {<FaArrowRight />}</div>
            </div>
          </div>

          <div className={styles.minblok2}>
            {/* <Cardblok/>
<Cardblok/>
<Cardblok/>
<Cardblok/> */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default ForYouHome;
