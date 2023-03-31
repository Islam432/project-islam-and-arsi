
import styles from "./Card.module.css";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import React, { useState } from "react";

const Card = ({ type, name, img, price }) => {
    const [number, setNumber] = useState([{id:1}, {id:2}, {id:3}, {id:4}, {id:5}]);
  return (
    <div className={styles.card}>
      <header className={styles.minHeder}><p>{type}</p></header>
     <Image alt="" className={styles.imgblok} src={img} width={200} height={230}/>  
     <h5 className={styles.name}>{name}</h5>
<div className={styles.polosa}></div>
     <div className={styles.cont_price}>
         <h4 className={styles.price}>{price}</h4>
        <div className={styles.star_blok}>
             {number.map((item) => {
                return <AiFillStar className={styles.star} key={item.id}/>;
              })}
        </div>
     </div>
    </div>
  );
};

export default Card;
