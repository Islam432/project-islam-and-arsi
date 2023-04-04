
import styles from "./People.module.css";
import React, { useEffect, useState } from "react";
import { DataPeople,DataPeopleAll } from "@/components/Api/restApi";

import { getImageUrl } from "@/helper/image";
import CardPeople from "../AboutListener/CardPeople/CardPeople";
const People_listener = () => {
   const[People, setPeople]= useState([])
    useEffect(() => {
        DataPeopleAll().then((res) => {
          setPeople(res.data);
        });
      }, []);
      console.log(People);
      

  return (

 
        <div className={styles.cont}>
          <div className={styles.text_blok}>
            <p className={styles.title}>Team</p>
            <h3 className={styles.title2}>Our Organic Experts</h3>
            <p className={styles.paragrav}>
              Simply dummy text of the printing and typesetting industry. Lorem had
              ceased to been the industrys standard dummy text ever since the
              1500s, when an unknown printer took a galley.
            </p>
          </div>
    
          <div className={styles.card_blok}>
            {People.map((item) => {
              return <CardPeople key={item.id} name={item.name} work={item.work} image={getImageUrl(item.image.url)} />;
            })}
          </div>
        </div>
  )
}

export default People_listener