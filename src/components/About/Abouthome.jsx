import React from "react";

import { GiFruitBowl } from "react-icons/gi";
import { BsMailbox2 } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import icon2 from './Icon2.png';
import icon3 from './Photo.png';
import styles from './Abouthome.module.css'
import Image from "next/image";


const Abouthome = ()=>{
    return (
        <div className={styles.card_container}>
  <div className={styles.float_layout}>
    <div className={styles.card_image}>

      <Image className={styles.img} src={icon3} alt=""/>
      <div className={styles.card}>
        <div className={styles.about}>
          <h2>about us</h2>
        </div>
        <div className={styles.card_title}>
          <h1>We Believe in Working Accredited Farmers</h1>
        </div>
        <div className={styles.card_desc}>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industrys standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </div>
        <div className={styles.small_card}>
    <div className={styles.imgblok}>
            <div className={styles.iconblok} ><i className={styles.icon1}>{<GiFruitBowl/>}</i></div >
             <div className={styles.textblok}>
                  <h3>Organic Foods Only</h3>
                  <p>
                    Simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum
                  </p>
             </div >
    </div>
         <div className={styles.small_card1}>
                <div className={styles.imgblok}>
            <div className={styles.iconblok} ><i className={styles.icon1}>{<BsMailbox2/>}</i></div >
             <div className={styles.textblok}>
                  <h3>Quality Standards</h3>
                  <p>
                  Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                  </p>
             </div >
    </div>
         </div>
        </div>

        <div className={styles.button1}>
              <h3>go to About</h3>
              <div className={styles.arrovicon}> {<FaArrowRight />}</div>
            </div>
      </div>
    </div>
  </div>
</div>


    )
}

export default Abouthome



