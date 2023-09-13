import {
    DEFAULT_DISCORD_URL,
    DEFAULT_GITHUB_URL,
    DEFAULT_LINKEDIN_URL
} from '@/utils/constants';

import React from 'react'
import styles from '@/arolisg/footer.module.css';


const Footer = () => {
  const year = new Date().getFullYear ();

  return (
    <main className={styles.main}>
        <div className={styles.items_parent}>
            <div className={styles.items}>

                <p>Develop</p>
                <a>Guide</a>
                <a>Testing</a>
                <a>APIs</a>

            </div>

            <div className={styles.items}>

                <p>Connections</p>
                <a href = {`${DEFAULT_DISCORD_URL}`}  target = '_blank'>Discord</a>
                <a href = {`${DEFAULT_GITHUB_URL}`}   target = '_blank'>Github</a>
                <a href = {`${DEFAULT_LINKEDIN_URL}`} target = '_blank'>Linkedin</a>

            </div>
        </div>
        <div className={styles.bottom_parent}>

            <p>All right reserved.</p>
            <a>AroliSG © {year}</a>

        </div>
    </main>
  )
}

export default Footer