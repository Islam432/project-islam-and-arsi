import React, { useEffect, useState } from "react";
import Cardblok from "../Cardblok/Cardblok";
import styles from "./Shop.module.css";
import Button from "./../Button/Button";
import { FaArrowRight } from "react-icons/fa";
import { dataStrapi } from "../Api/restApi";

const Shop = () => {
  const [catalog, setcatalog] = useState([]);

  useEffect(() => {
    dataStrapi().then((res) =>{
      return setcatalog(res.data)
    });
  }, []);
console.log(catalog)
  return (
    <div className={styles.contshop}>
      <div className={styles.contShopHome}>
        <p>Categories </p>
        <h3>Our Products</h3>

        <div className={styles.catalokblok}>
          <div className={styles.catalog}>

            {catalog.map((item) => {
              return <Cardblok key={item.id} name={item.name} price={item.price} type={item.type}    />
            })}
            
            
          </div>
        </div>
        <div className={styles.ButtonCatalog}>
          <h4 className={styles.htext}>Load More</h4>
          <div className={styles.arrovicon}> {<FaArrowRight />}</div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
