import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { FaArrowRight } from "react-icons/fa";
import photo from '../styles/ImgHome/photoblok1.jpg'
import photo2 from '../styles/ImgHome/photoblok2.jpg'
import Abouthome from "../components/About/Abouthome";

import cn from "clsx"
import Shop from "@/components/Shop_home/Shop";
import Stata from "@/components/Stata_home/Stata";
import ForYouHome from "@/components/ForYouHome/ForYouHome";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={styles.cont}>
      <div className={styles.banner}>
       <div className={styles.titleobert}>
          
          <div className={styles.textblok}>
            <h3 className={styles.tx1}>100% Natural Food</h3>
             <h1 className={styles.title1}>Choose the best healthier way of life</h1>
  
            <div className={styles.button1}>
              <h3>Explore Now</h3>
              <div className={styles.arrovicon}> {<FaArrowRight />}</div>
            </div>
          </div>
       </div>
      </div>

         <div className={styles.blok2}>
         
            <div className={styles.minblok2}>
              <h3 className={styles.texblok1}>Natural!!</h3>
              <p className={styles.titleblok1}>Get Garden Fresh Fruits</p>
              <Image alt="" className={styles.img1} src={photo}/>
              
            </div>
            <div className={styles.minblok2}>
            <h3 className={styles.texblok2}>Offer!!</h3>
              <p className={styles.titleblok2}>Get 10% off on Vegetables</p>
              <Image alt="" className={styles.img1} src={photo2}/></div>
          
        </div>
<Shop/>
<Stata/>
<ForYouHome/> 

      </div>
    </>
  );
}
