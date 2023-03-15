import styles from './Footer.module.css';
import logo from "./logologo.png";
import Image from "next/image";
import { FiInstagram,FiFacebook,FiTwitter, } from "react-icons/fi";
import { FaPinterest } from "react-icons/fa";


const Footer = ()=>{


    return ( 
     
        <div className={styles.dash}>
  <div  className={styles.one}>
    <h2>Сontact us</h2>
    <h4>Email needhelp@Organia.com</h4>
    <h4>Phone 666 888 888</h4>
    <h4>Adress 88 road,borklyn street,USA </h4>
  </div>

  <div  className={styles.two}>
    <h2>Organick</h2>
    <h5>Simply dummy text of the printing and typesetting industry.
Lorem Ipsum simply dummy text of the printing </h5>

<div className={styles.gridIcon}>
    <div className={styles.icons}>
<i className={styles.Fap}><FiInstagram/></i>
<i className={styles.Fap}><FiFacebook/></i>
<i className={styles.Fap}><FiTwitter/></i>
<i className={styles.Fap}><FaPinterest/></i>
    </div>
</div>
  </div>

  <div className={styles.three}>
    <h2>Utility Pages</h2>
    <h5>Style Guide</h5>
    <h5>404 not found</h5>
    <h5>Paswoord Protected</h5>
    <h5>Licences</h5>
    <h5>Changelog</h5>
  </div>

        </div>
    );

}

export default Footer