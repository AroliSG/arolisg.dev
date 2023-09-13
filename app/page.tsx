"use client";
import {
  useState,
  useEffect
} from 'react';

import { DEFAULT_NAVBAR_HEIGHT } from '@/utils/constants';

import styles from './page.module.css'
import Navbar from '@/arolisg/navbar';
import Footer from '@/arolisg/footer';
import Image from 'next/image';
import Head from 'next/head'
import SVGImage from '@/utils/svg';
import useRobot from '../hooks/useRobot';
import paragraph from '@/utils/grid.json';

const Grid = () => {
  return paragraph.grid.map (item => (
    <div className = {styles.grid_items} key = {item.title}>
        <Image
          alt       = {item.title}
          className = {styles.cover}
          src       = {require('@/assets/img/' + item.img)}
        />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <div className={styles.technologies}>
          {
            item.technologies
              .split(',')
              .map(tech => <label key = {tech}>{tech}</label>)
          }
        </div>

        <div className={styles.photoContainer}>
          <label>{item.isLocked ? "Locked" : "Unlocked"}</label>
        </div>
    </div>
  ));
}

const HomePage = () => {
  const {
    setRequest,
    isWriting
  }                                               = useRobot ();

  const [getNavHeight, setNavHeight]              = useState(DEFAULT_NAVBAR_HEIGHT);

  return (
    <main className={styles.main}>

      <Head>
      <link rel="icon" href="/static/favicon.ico" />
      </Head>

      <Navbar onLayout = {height => {
        setNavHeight (height);
      }} />

      <section>
        <div className={styles.page} style = {{
          height:'calc(100vh - ' + getNavHeight + 'px)'
        }}>

          <div className={styles.container}>
            <div style={{marginTop: '-150px'}}>

              <h1>Aroly Reyes</h1>
              <p>Fullstack developer</p>

            </div>

          </div>

          <div className={styles.social_parents}>
          <div className={styles.social_icons}>
            <SVGImage className= {styles.social} name = 'github' />
            <SVGImage className= {styles.social} name = 'linkedin' />
          </div>
            <div className={styles.social_label}>
              <p>Social</p>
            </div>

          </div>

          <Image
            alt       = "arrow-down"
            src       = {require('../assets/icons/arrow-down.png')}
            className = {styles.arrow_down}
          />

        </div>
      </section>

      <section>
        <h1 style={{
            color: 'white',
            alignSelf: 'center',
            margin: '90px'
        }}>AI</h1>
        <code className={styles.code} id = 'AboutUsId'>
          <div id = "parent_page" />

          <input
            onKeyUpCapture={(evt) => {
              if (evt.key === 'Enter') {
                setRequest(evt.currentTarget.value);
                evt.currentTarget.value = "";
              }
            }}
            type        = 'text'
            placeholder = {isWriting ? 'Thinking the phrase, please wait..' : 'Type here...'}
            disabled    = {isWriting}
          />
        </code>

        <h1 style={{
            color: 'white',
            alignSelf: 'center',
            margin: '90px'
        }}>Talents</h1>
      </section>

      <section>
        <h1 style={{
          color: 'white',
          alignSelf: 'center',
          margin: '90px'
        }}>Projects</h1>
        <div className = {styles.grid_container} id = 'ProjectsId'>
          <Grid />
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default HomePage;