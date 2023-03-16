import styles from './Footer.module.css';
import logo from "./logologo.png";
import Image from "next/image";
import { FiInstagram,FiFacebook,FiTwitter, } from "react-icons/fi";
import { FaPinterest } from "react-icons/fa";


const Footer = ()=>{


    return ( 
     <div>
       
          <div className={styles.dash}>
    <div  className={styles.one}>
      <h1>Сontact us</h1>
      <h5>Email needhelp@Organia.com</h5>
      <h5>Phone 666 888 888</h5>
      <h5>Adress 88 road,borklyn street,USA </h5>
    </div>
  
    <div  className={styles.two}>
      <h1><Image className={styles.logo} src={logo} alt=""></Image>{" "} Organick</h1>
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
      <h1>Utility Pages</h1>
      <h5>Style Guide</h5>
      <h5>404 not found</h5>
      <h5>Paswoord Protected</h5>
      <h5>Licences</h5>
      <h5>Changelog</h5>
    </div>
  
    {/* <div className={styles.basment}>
    Copyright © Organick | Designed by VictorFlow Templates - Powered by Webflow
    </div> */}
  
          </div>
          <div className={styles.empty}>
      
          </div>
          <div className={styles.basment}>
    Copyright © Organick | Designed by VictorFlow Templates - Powered by Webflow
    </div>
     </div>
    );

}

export default Footer