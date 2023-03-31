import React, { useEffect, useState } from "react";
import styles from "./ForYouHome.module.css";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

import { dataStrapi, SevenData, ToData, WigData } from "../Api/restApi";
import Card from "../UI/Card/Card";
import { getImageUrl } from "@/helper/image";
const ForYouHome = () => {
  const [forYou, setForYou] = useState([]);

  useEffect(() => {
    WigData().then((res) => {
      setForYou(res.data);
    });
  }, []);

  return (
   
      <header className={styles.banner}>
        <div className={styles.blok1}>
          <div className={styles.minblok}>
            <div className={styles.minbloktitle}>
              <h2>Offer</h2>
              <p>We Offer Organic For You</p>
            </div>

            <div className={styles.ButtonCatalog}>
            <Link href={"/Shop"} className={styles.NavLink}>
            <h4 className={styles.htext}>go to catalog</h4>
        </Link>
              
              <div className={styles.arrovicon}> {<FaArrowRight />}</div>
            </div>
          </div>

          <div className={styles.minblok2}>
            {forYou.map((item) => {
              return (
                <Card
                  key={item.id}
                  name={item.Name}
                  price={item.Price}
                  type={item.Type}
                  img={getImageUrl(item.Picture.url)}
                />
              );
            })}
          </div>
        </div>
      </header>
  
  );
};

export default ForYouHome;
