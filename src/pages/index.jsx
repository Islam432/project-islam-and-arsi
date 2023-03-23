
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { FaArrowRight } from "react-icons/fa";

import Abouthome from '../components/About/Abouthome'




const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>

      <div className={styles.cont}>
        <div className={styles.blok1}>
          <div className={styles.textblok}>
            <h3 className={styles.tx1}>100% Natural Food</h3>
            <h1>Choose the best healthier way of life</h1>

            <div className={styles.button1}>
              <h3>Explore Now</h3>
              <div className={styles.arrovicon}> {<FaArrowRight />}</div>
            </div>
          </div>

        </div>

        <div className={styles.blok2}>
          <header className={styles.cont2}>
            <div className={styles.minblok2}>
              
            </div>
            <div className={styles.minblok3}></div>
          </header>
        </div>
<Abouthome/>

      </div>

    </>
  );
}
