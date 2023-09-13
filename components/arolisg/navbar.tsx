"use client";

import { useEffect, useRef, LegacyRef} from 'react'

import Image from 'next/image'
import styles from './navbar.module.css';
import { _Navbar } from '../../index.type';
import { Executor } from '@/utils/utils';


    // in case of mobile navbar
    // we should close the navbar when user is scrolling to view
const onScrollToView = (title: string) => {
  const items   = document.getElementsByClassName(styles.mobile_items) as HTMLCollectionOf <HTMLElement>;

  document.body.style.overflow = 'scroll';
  items[0].style.display = 'none';
  items[0].classList.remove(styles.add_growth);
  items[0].classList.add(styles.remove_growth);

  document.getElementById(title)?.scrollIntoView ();
}


const Navbar = (props: _Navbar): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  const {
    onLayout
  } = props;


  useEffect(() => {
    onLayout(ref!.current!.clientHeight);
  }, [onLayout]);

  const onImageClick = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const items   = document.getElementsByClassName(styles.mobile_items) as HTMLCollectionOf <HTMLElement>;
    const display = items[0].style.display;

    if (display === 'flex') {
      items[0].classList.remove(styles.add_growth);
      items[0].classList.add(styles.remove_growth);

        /**
         * @param {Executor} timeout
         * Note: Simple timeout to hide the navbar after 1s
        */
      Executor(() => {
        items[0].style.display = 'none';

        document.body.style.overflow = 'scroll';
      }, 500)

    } else {
      items[0].style.display = 'flex';

      items[0].classList.remove(styles.remove_growth);
      items[0].classList.add(styles.add_growth);

      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <main className = {styles.navbar} ref = {ref}>
      <p>AroliSG</p>

      <div className={styles.mobile_items}>
          <Image
            alt       = "menu"
            src       = {require('../../assets/img/circle_profile.png')}
            width     = {0}
            height    = {0}
          />

          <div>
            <a onClick={() => onScrollToView('AboutUsId')}>ABOUT ME</a>
            <a onClick={() => onScrollToView('ProjectsId')}>PROJECTS</a>
            <a href='https://wa.me/13067005760' target='_blank'>CONTACT</a>
          </div>
      </div>

      <div className = {styles.items}>
        <a onClick={() => document.getElementById('AboutUsId')?.scrollIntoView ()}>ABOUT ME</a>
        <a onClick={() => document.getElementById('ProjectsId')?.scrollIntoView ()}>PROJECTS</a>
        <a href='https://wa.me/13067005760' target='_blank'>CONTACT</a>
      </div>

      <div className = {styles.language}>
        <Image
            alt       = "language-1"
            src       = {require('../../assets/icons/us.png')}
            width     = {0}
            height    = {0}
          />

        <Image
          alt       = "language-2"
          src       = {require('../../assets/icons/es.png')}
          width     = {0}
          height    = {0}
        />
      </div>


      <div className = {styles.image_container} onMouseDown = {onImageClick}>

        <Image
          alt       = "menu"
          className = {styles.img}
          src       = {require('../../assets/icons/white-menu.png')}
          width     = {0}
          height    = {0}
        />

      </div>
    </main>
  )
}

export default Navbar