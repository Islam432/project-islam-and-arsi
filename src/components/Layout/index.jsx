import React from 'react'
import Footer from '../footer/Footer'
import About from '../About/Abouthome'
import Navbar from '../Navbar/Navbar'
import styles from './index.module.css'
import Before from '../Before/Before'


const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div className={styles.div}>{children}</div>
        <Before/>
        <Footer></Footer>

        

    </div>
  )
}

export default Layout