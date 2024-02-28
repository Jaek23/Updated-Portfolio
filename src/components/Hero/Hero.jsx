import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Jae</h1>
            <p className={styles.description}>Write a short about me paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, in omnis veniam at hic fugit. Quod cupiditate, veniam perferendis, exercitationem at quibusdam impedit, rerum veritatis et dolorum vel ex recusandae.</p>
            <a href="mailto:jaehkim23@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Hero
