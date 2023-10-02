import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classes from './Navbar.module.scss';

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <Link href="/">
        <a className={classes.logo}>
          <span className={classes.logoText}>Receitas QWERTY</span>
        </a>
      </Link>
      <ul className={classes.navLinks}>
        <li>
          <Link href="/meals">Receitas</Link>
        </li>
        <li>
          <Link href="/savedMeals">Itens salvos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
