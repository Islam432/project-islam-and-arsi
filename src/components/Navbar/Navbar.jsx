import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { FaSearch } from "react-icons/fa";
import logo from "./logologo.png";
import cn from 'clsx';
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.cont}>
    <div className={styles.navbar}>
    <div className={styles.logo}>
   
   <Image className={styles.img} src={logo} alt=""></Image>

 <h1>Organick</h1>
</div>
      <nav className={styles.nav}>
        <Link href={"/"} className={styles.NavLink}>
          <h3>home</h3>
        </Link>
        <Link href={"/About"} className={styles.NavLink}>
          <h3>About</h3>
        </Link>
        <Link href={"/Shop"} className={styles.NavLink}>
          <h3>Shop</h3>
        </Link>
        <Link href={"/comp"} className={styles.NavLink}>
          <h3>Navbar</h3>
        </Link>
      </nav>

      <form className={styles.inputblok}>
        <label htmlFor="search" className={styles.icon}>
          {<FaSearch />}
        </label>
        <input
          className={styles.input}
          type="text"
          id="search"
          placeholder="search"
        />
      </form>

      <div className={styles.basket}>
        <i className={styles.iconbasket}>
          <AiOutlineShoppingCart />
        </i>
      </div>
    </div>
  </div>
  );
};

export default Navbar;
