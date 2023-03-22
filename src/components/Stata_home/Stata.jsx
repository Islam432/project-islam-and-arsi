import React from "react";


import Image from "next/image";
import styles from "./Stata.module.css";
import { useState } from 'react';
import { AiFillStar } from "react-icons/ai";
import photo from "./Photo1.jpg";
const Stata = () => {
const [number, setNumber] = useState([
  {id:1}, {id:2}, {id:3}, {id:4}, {id:5}
])
  return (
    <div className={styles.statacont}>
      <div className={styles.banner}>
        <div className={styles.blok1}>
          <div className={styles.minblok}>
            <h1 className={styles.statatitle}>Testimonial</h1>
            <p className={styles.statatitle}>What Our Customer Saying?</p>


        
              <Image alt="" className={styles.img1} src={photo} />
             <div>
                
                {number.map((item) => {
                  return <AiFillStar className={styles.star} key={item.id} />;
                })}
             </div>

             <h3>Sara Taylor</h3>
             <h2>Consumer</h2>
          
        
            <h4 className={styles.statatitle}>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </h4>
            <div className={styles.polosa}></div>
          </div>

<div className={styles.minblok2}>
  <div className={styles.cercle}>
    <h1>100%</h1>
    <p>Organic</p>
  </div>
  <div className={styles.cercle}>
  <h1>285</h1>
    <p>Active Product</p>
  </div>
  <div className={styles.cercle}>
    <h1>350+</h1>
    <p>Organic Orchads</p>
  </div>
  <div className={styles.cercle}>
  <h1>25+</h1>
    <p>Years of Farming</p>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Stata;
