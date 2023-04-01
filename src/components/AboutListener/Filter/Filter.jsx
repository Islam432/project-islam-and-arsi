import React from 'react'
import styles from './Filter.module.css'
import Image from "next/image";

import photo1 from './Photo.jpg'
import photo2 from './Photo2.jpg'
import photo3 from './Photo3.jpg'
import photo4 from './Photo4.jpg'
const Filter = () => {
  return (
    <div className={styles.cont}>
        <div className={styles.banner}>
            <div className={styles.blok1}>
               <h1 className={styles.title}>About Us</h1>
               <h1 className={styles.title2}>What We Offer for You</h1>
               <div className={styles.grid}>
                <div className={styles.grid_blok}>
                <Image alt="" className={styles.img1} src={photo1} />
                <p>Spicy</p>
                </div>
                <div className={styles.grid_blok}>
                <Image alt="" className={styles.img1} src={photo2} />
                <p>Nuts & Feesd</p>
                </div>
                <div className={styles.grid_blok}>
                <Image alt="" className={styles.img1} src={photo3} />
                <p>Fruits</p>
                </div>
                <div className={styles.grid_blok}>
                <Image alt="" className={styles.img1} src={photo4} />
                <p>Vegetable</p>
                </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Filter