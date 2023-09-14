'use client';
import React, { useEffect } from 'react'
import styles from './page.module.css';
import Image from 'next/image';
import Head from 'next/head';

const Page = () => {

  useEffect(() => {
    document.title = 'DBA';
  }, [])

  return (
    <div className = {styles.main}>
      <section>
        <div className={styles.navbar}>

          <div>
            <p>D </p>
              <Image
                alt       = {"icon"}
                className = {styles.icon}
                src       = {require('@/assets/img/dba_icon.png')}
                height    = {100}
                width     = {100}
              />
            <p>A</p>
          </div>

          <div>
            <input
              type      = "button"
              className = {styles.buttons}
              value     = {'Log In'}
              onClick   = {() => alert("Not available yet, deactivated.")}
            />
          </div>

        </div>
      </section>

      <section>
        <div className={styles.page}>
          <Image
            alt       = {"showcase"}
            src       = {require('@/assets/img/bots_framed.png')}
            height    = {905}
          />
        </div>

      </section>

      <section>
        <div className = {styles.footer}>
          <div>
            <p>D </p>
              <Image
                alt       = {"icon"}
                className = {styles.icon}
                src       = {require('@/assets/img/dba_icon.png')}
                height    = {100}
                width     = {100}
              />
            <p>A</p>
          </div>

          <div>
            <p>About .</p>
            <p>FAQ .</p>
            <p>Privacy Policy .</p>
            <p>Terms of Use</p>
          </div>

          <div>
            <p>D </p>
              <Image
                alt       = {"icon"}
                className = {styles.icon}
                src       = {require('@/assets/img/dba_icon.png')}
                height    = {100}
                width     = {100}
              />
            <p>A</p>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Page;