import React from 'react'
import Footer from '../footer/Footer'
import About from '../About/Abouthome'
import Navbar from '../Navbar/Navbar'
import styles from './index.module.css'


const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div className={styles.div}>{children}</div>
        <Footer></Footer>

        

    </div>
  )
}

export default Layout