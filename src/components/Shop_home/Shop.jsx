import React from "react";
import Cardblok from "../Cardblok/Cardblok";
import styles from './Shop.module.css';
import Button from './../Button/Button';
import { FaArrowRight } from "react-icons/fa";

const Shop = () => {
  return <div className={styles.contshop}>
  <div className={styles.contShopHome}>
      <p>Categories </p>
      <h3>Our Products</h3>
  
  <div className={styles.catalokblok}>
        <div className={styles.catalog}>
        <Cardblok/>
             <Cardblok/> 
             <Cardblok/> 
             <Cardblok/> 
             <Cardblok/> 
             <Cardblok/> 
             <Cardblok/> 
             <Cardblok/> 
              
           
        
           
        </div>
  </div >
      <div className={styles.ButtonCatalog}>
                <h4 className={styles.htext}>Load More</h4>
                <div className={styles.arrovicon}> {<FaArrowRight />}</div>
              </div>
    
  
  
  
    </div>
  </div>
};

export default Shop;
