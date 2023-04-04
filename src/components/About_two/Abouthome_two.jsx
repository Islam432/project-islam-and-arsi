import React from "react";

import { GiFruitBowl } from "react-icons/gi";
import { BsMailbox2 } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { FaTractor } from "react-icons/fa";
import { MdOutlineFactory } from "react-icons/md";

import image from "./Image.png"
import styles from './Abouthome_two.module.css'
import Image from "next/image";
import Link from "next/link";

import About from "@/pages/About"


const About_two = ()=>{
    return (
      <div className={styles.cont}>
      <header className={styles.banner}>
          <div className={styles.blok1}>
            <div className={styles.min_blok2}>
              <div className={styles.img_blok}>
              <Image alt="" className={styles.img1} src={image} />
              </div>
            </div>
            <div className={styles.min_blok}>
              <div className={styles.card}>
                <h3 className={styles.title}>About Us</h3>
                <h2 className={styles.title2}>We do Creative 
Things for Success</h2>
                <p className={styles.paragrav}>Eating a healthy diet is not about strict limitations, staying unrealistically thin, or depriving yourself of the foods you love. Rather, it’s about feeling great, having more energy, improving your health, and boosting your mood.</p>

<p className={styles.paragrav}>Healthy eating doesn’t have to be overly complicated. If you feel overwhelmed by all the conflicting nutrition and diet advice out there, you’re not alone. It seems that for every expert who tells you a certain food is good for you, you’ll find another saying exactly the opposite.</p>

<div className={styles.cont_options}>
<div className={styles.small_card}>
    <div className={styles.imgblok}>
            <div className={styles.iconblok} ><i className={styles.icon1}>{<FaTractor/>}</i></div >
             <div className={styles.textblok}>
                  <h3>Modern Agriculture Equipment
</h3>
             </div >
    </div>

         <div className={styles.small_card1}>
                <div className={styles.imgblok}>
            <div className={styles.iconblok} ><i className={styles.icon1}>{<MdOutlineFactory/>}</i></div >
             <div className={styles.textblok}>
                  <h3>No growth hormones are used</h3>
             </div >
    </div>
         </div>
        </div>

</div>
<div className={styles.button1}>
              <h3>Explore More</h3>
              <div className={styles.arrovicon}> {<FaArrowRight />}</div>
            </div>
              </div>
            </div>
          </div>
          

        
      </header>
  </div>


    )
}

export default About_two 



