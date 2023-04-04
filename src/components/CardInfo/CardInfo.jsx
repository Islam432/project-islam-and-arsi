import React, { useState } from "react";
import styles from "./Cardinfo.module.css";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { getImageUrl } from "@/helper/image";
const CardInfo = ({ post }) => {
  const [number, setNumber] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ]);
  console.log(post);
  const [count, setCount] = useState({
    count: 0,
  });
  const changHendler = (event) => {
    setCount((count) => {
      return {
        ...count,
        [event.target.name]: event.target.value,
      };
    });
  };
  return (
    <div className={styles.cont}>
      <div className={styles.product}>
        <div className={styles.blok}>
         <Image alt="" className={styles.img1} src={getImageUrl(post.data.Picture.url)} width={279} height={300}/> 
        </div>
        <div className={styles.blok}>
          <h1 className={styles.title}>{post.data.Name}</h1>
          <div className={styles.cont_star}>
          
            {number.map((item) => {
              return <AiFillStar className={styles.star} key={item.id} />;
            })}
          </div>

          <h3 className={styles.pr}>{post.data.Price}</h3>
          <p className={styles.dis}>
           {post.data.description}
          </p>
          <form className={styles.add_Cont}>
            <p className={styles.Quantity}>Quantity :</p>

            <input
              className={styles.input}
              name="count"
              value={count.count}
              onChange={changHendler}
              type="text"
              placeholder="count"
            />

            <div className={styles.ButtonCatalog}>
              <h4 className={styles.htext}>Add</h4>
              <div className={styles.arrovicon}> {<FaArrowRight />}</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;

{
  /* <h1 className={styles.h1}>{post?.data?.Price}</h1> */
}
