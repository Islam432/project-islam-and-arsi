import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './index.module.css'


const Layout = ({children}) => {
  return (
    <div>
        <Navbar></Navbar>
        <div>{children}</div>
    </div>
  )
}

export default Layout