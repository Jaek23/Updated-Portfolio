import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Jae</h1>
            <p className={styles.description}>Aspiring software engineer with a background in marketing and sales. I completed the Full Stack Web Development Bootcamp at the University of Texas at Austin in 2023. I enjoy problem solving and creating user-friendly and visually appealing applications. I am continuously learning new skills to advance my full-stack developing skills. My skills include HTML, CSS, JavaScript, React, Express, Node, and Git.</p>
            <a href="https://docs.google.com/document/d/17wcc7avjUgzA59OJ9VIEKJ4Don3TxAvFJJZCxvOGVMw/edit" className={styles.contactBtn} target='null'>View CV</a>
        </div>
        <img src={getImageUrl("hero/jae.PNG")} alt="image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Hero
