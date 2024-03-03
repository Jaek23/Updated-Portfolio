import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"


const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("projects/project.png")} alt="About image" className={styles.aboutImage} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor"/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a front-end developer with experience in building responsive and optimized sites</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="server"/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I have experience developing fast and optimised back-end systems and APIs</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="UI"/>
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>I have designed multiple landing pages and have created design systems as well</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About
