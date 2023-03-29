import React, { useEffect, useState } from "react";
import Cardblok from "../Cardblok/Cardblok";
import styles from "./Shop.module.css";
import Button from "./../Button/Button";
import { FaArrowRight } from "react-icons/fa";
import { dataStrapi, SevenData , ToData } from "../Api/restApi";
import { getImageUrl } from "@/helper/image";

const Shop = () => {
  const [catalog, setcatalog] = useState([]);

  useEffect(() => {
    SevenData().then((res) => {
      return setcatalog(res.data);
    });
  }, []);
  console.log(catalog);

const onClick = () => {
  ToData().then((res) => {
    return setcatalog(res.data);
  });
  
}

  return (
    <div className={styles.contshop}>
      <div className={styles.contShopHome}>
        <p>Categories </p>
        <h3>Our Products</h3>

        <div className={styles.catalokblok}>
          <div className={styles.catalog}>
            {catalog.map((item) => {
        
              return <Cardblok
                key={item.id}
                name={item.Name}
                price={item.Price}
                type={item.Type}
                 img={getImageUrl(item.Picture.url)}
              />;
            })}
          </div>
        </div>
        <div className={styles.ButtonCatalog} onClick={onClick}>
          <h4 className={styles.htext}>Load More</h4>
          <div className={styles.arrovicon}> {<FaArrowRight />}</div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
