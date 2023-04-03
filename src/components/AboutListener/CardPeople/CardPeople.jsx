
import Image from "next/image";
import styles from './CardPeople.module.css'
import img from './Photo.jpg'
import { FiInstagram,FiFacebook,FiTwitter, } from "react-icons/fi";
const CardPeople = ({name, image, work}) => {
  return (
 
    <div className={styles.card}>
      <Image alt="" className={styles.img1} src={image} width={279} height={300}/> 
    <div className={styles.container}>
      
          <h4 className={styles.name}><b>{name}</b></h4> 
          <p className={styles.work}>{work}</p> 
   
   <div className={styles.icon_blok}>
<i className={styles.Fap}><FiInstagram/></i>
<i className={styles.Fap}><FiFacebook/></i>
<i className={styles.Fap}><FiTwitter/></i>
   </div>
      <div></div>
    </div>
  </div>
  )
}

export default CardPeople