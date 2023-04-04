import Heder from "@/components/AboutListener/Heder/Heder";
import People from "@/components/AboutListener/People/People";
import WhoChoceUs from "@/components/AboutListener/WhoChoceUs/WhoChoceUs";

import Card from "@/components/UI/Card/Card";
import React from "react";
import styles from '../../styles/About.module.css'
import Filter from "@/components/AboutListener/Filter/Filter";
import Abouthome from "@/components/About_two/Abouthome_two";
import About_two from "@/components/About_two/Abouthome_two";

const About = () => {

  return  (

  <div className={styles.cont} >
 <div>  
   <Heder/>
 </div>
 <div>
<About_two/>
 </div>
 <div>
 <WhoChoceUs/>
</div>
<div>
  <People/>
</div>
<div>
 <Filter/>
</div>


</div>
)
};



export default About;
