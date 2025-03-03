
import Navlink from './navlink';
import Link from 'next/link';
import Image from 'next/image';

import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';

export default function MainHeader() {

  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="A plate with food on it" />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Navlink href="/meals">Browse Meals</Navlink>
          </li>
          <li>
            <Navlink href="/community">Foodies Community</Navlink>
          </li>
        </ul>
      </nav>
    </header>
  );
}