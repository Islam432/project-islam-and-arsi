import styles from './Footer.module.css';
const Footer = ()=>{


    return ( 
        <div className={styles.dash}>
  <div  className={styles.one}>
    <h5>Сontact us</h5>
    <h5>Email</h5>
    <h5>Phone</h5>
    <h5>Adress</h5>
  </div>

  <div  className={styles.one}>
    <h5>Organick</h5>
    <h5>Simply dummy text of the printing and typesetting industry.
Lorem Ipsum simply dummy text of the printing </h5>
  </div>

  <div className={styles.one}>
    <h5>Utility Pages</h5>
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