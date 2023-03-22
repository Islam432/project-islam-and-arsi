import React from 'react'
import Footer from '../footer/Footer'
import Div1 from '../About/Abouthome'
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