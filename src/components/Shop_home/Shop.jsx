import React, { useEffect, useState } from "react";
import Cardblok from "../Cardblok/Cardblok";
import styles from "./Shop.module.css";
import Button from "./../Button/Button";
import { FaArrowRight } from "react-icons/fa";
import { dataStrapi, SevenData, ToData } from "../Api/restApi";
import { getImageUrl } from "@/helper/image";
import Card from "../UI/Card/Card";

const Shop = ({post}) => {
  const { visible, setViseble } = useState(false);
  const [catalog, setcatalog] = useState([]);
  const [paginate, setPaginate] = useState({ limit: 8, start: 0 });

  useEffect(() => {
    SevenData(paginate).then((res) => {
      return setcatalog(res.data);
    });
  }, []);
  console.log(catalog);

  const onClick = () => {
    SevenData({ start: paginate.limit, limit: 4 }).then((res) => {
      return setcatalog((prev) => [...prev, ...res.data]);
    });

  
    setPaginate((prev) => ({
      limit: paginate.limit + 4,
      start: paginate.limit,
    }));
  };

  return (
    <div className={styles.contshop}>
      <div className={styles.contShopHome}>
        <p className={styles.comp}>Categories </p>
        <h3>Our Products</h3>

        <div className={styles.catalokblok}>
          <div className={styles.catalog}>
            {catalog.map((item) => {
              return (
                <Card
                  key={item.id}
                  name={item.Name}
                  price={item.Price}
                  type={item.Type}
                  img={getImageUrl(item.Picture.url)}
                  id={item.id}
                />
              );
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

// export async function getServerSideProps({ params: {id}} ){
//   const post = await SevenData(id)

//   return{
// props: {
// post: post || null, 
// },
//   };

 
// }