import React from "react";
import Cardblok from "../Cardblok/Cardblok";
import styles from './Shop.module.css';
import Button from './../Button/Button';
import { FaArrowRight } from "react-icons/fa";
import Stata from "../Stata/Stata";
const Shop = () => {
  return <div className={styles.contShopHome}>
    <p>Categories </p>
    <h3>Our Products</h3>
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
    <div className={styles.ButtonCatalog}>
              <h3>Load More</h3>
              <div className={styles.arrovicon}> {<FaArrowRight />}</div>
            </div>
  
<Stata/>


  </div>;
};

export default Shop;
