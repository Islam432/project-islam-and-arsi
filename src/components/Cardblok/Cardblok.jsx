import React, { useState } from "react";
import styles from "./Cardblok.module.css";
import { AiFillStar } from "react-icons/ai";
import photo from './Photo.png'
import Image from "next/image";
// eslint-disable-next-line react-hooks/rules-of-hooks

const Cardblok = ({name, price,type,img}) => {
  const [number, setNumber] = useState([{id:1}, {id:2}, {id:3}, {id:4}, {id:5}]);
  return (
    <div className={styles.card}>
      <header className={styles.minHeder}>{type}</header>
 <Image alt="" className={styles.imgblok} src={img} width={300} height={200}/>
      <h5 className={styles.name}>{name}</h5>
      <footer className={styles.footer}>
        <h4 className={styles.price}>{price}</h4>
        <div className={styles.starblok}>
          {number.map((item) => {
            return <AiFillStar className={styles.star} key={item.id}/>;
          })}
          {/* <AiFillStar className={styles.star}/>
            <AiFillStar className={styles.star}/>
            <AiFillStar className={styles.star}/>
            <AiFillStar className={styles.star}/>
            <AiFillStar className={styles.star}/>
            */}
        </div>
      </footer>
    </div>
  );
};

export default Cardblok;
