import Heder from "@/components/AboutListener/Heder/Heder";
import React from "react";

const About = () => {

  return  (

  <div className={styles.big-card} style={{ maxWidth: 540 }}>
<div className={styles.card}>
  <div className="col-md-4">
  {/* <Image className={styles.Photo} src={logo} alt=""></Image> */}
  </div>
  <div className={styles.text1}>
    <div className={styles.text2}>
      <h5 className={styles.title}>We Believe in Working
Accredited Farmers</h5>
      <p className={styles.text3}>
      Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley.
      </p>
      <p className={styles.text4}>
        <small className={styles.text5}>Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
</div>
</div>
)
};



export default About;
