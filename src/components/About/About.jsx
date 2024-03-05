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
                        <p>I possess a track record of developing numerous personal projects, ensuring the creation of user-friendly and interactive websites for visitors, coupled with proficiency in debugging.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="server"/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I bring hands-on experience in integrating third-party APIs into multiple projects, alongside expertise in developing RESTful APIs to enhance the quality of information and data access.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="UI"/>
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>I have a background in developing visually appealing applications that prioritize user-friendliness, providing an engaging experience for users to interact with.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About
