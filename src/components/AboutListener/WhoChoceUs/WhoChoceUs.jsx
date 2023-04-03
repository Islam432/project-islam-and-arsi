import React from 'react'
import { createStyleRegistry } from 'styled-jsx'
import styles from './WhoChoceUs.module.css'
import photo from './Photo.jpg'
import { GiThreeLeaves } from "react-icons/gi";
import { BsCartDashFill, BsFillStopwatchFill } from "react-icons/bs";
import { RiShieldKeyholeFill } from "react-icons/ri";
import Image from "next/image";
const WhoChoceUs = () => {
  return (
    <div className={styles.cont}>
        <header className={styles.banner}>
            <div className={styles.blok1}>
              <div className={styles.min_blok}>
                <div className={styles.card}>
                  <h3 className={styles.title}>Why Choose us?</h3>
                  <h2 className={styles.title2}>We do not buy from theopen market & traders.</h2>
                  <p className={styles.paragrav}>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industrys standard  the 1500s, when an unknown</p>

<div className={styles.cont_options}>
  <div className={styles.options_blok}>
    <div className={styles.button}>
      <h4>100% Natural Product</h4>
    </div>
    <p className={styles.paragrav2}>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
  </div>
  
  
  <div className={styles.options_blok}>
    <div className={styles.button}>
      <h4> Increases resistance</h4>
    </div>
    <p className={styles.paragrav2}>Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</p>
  </div>

</div>
                </div>
              </div>
              <div className={styles.min_blok2}>
                <div className={styles.img_blok}>
                <Image alt="" className={styles.img1} src={photo} />
                </div>
              </div>
            </div>

            <div className={styles.grid_cont}>
              <div className={styles.grid_blok}>
                <div className={styles.icon_blok}><i className={styles.icon}><BsCartDashFill/></i></div>
                <h3>Return Policy</h3>
                <h5>Simply dummy text of the printintypesetting industry.</h5>
              </div>
              <div className={styles.grid_blok}>
              <div className={styles.icon_blok}><i className={styles.icon}><GiThreeLeaves/></i></div>
                <h3>100% Fresh</h3>
                <h5>Simply dummy text of the printintypesetting industry.</h5>
              </div>
              <div className={styles.grid_blok}>
              <div className={styles.icon_blok}><i className={styles.icon}><BsFillStopwatchFill/></i></div>
                <h3>Support 24/7</h3>
                <h5>Simply dummy text of the printintypesetting industry.</h5>
              </div>
              <div className={styles.grid_blok}>
              <div className={styles.icon_blok}><i className={styles.icon}><RiShieldKeyholeFill/></i></div>
                <h3>Secured Payment</h3>
                <h5>Simply dummy text of the printintypesetting industry.</h5>
              </div>
             
            </div>
        </header>
    </div>
  )
}

export default WhoChoceUs