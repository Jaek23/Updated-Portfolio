import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Jae</h1>
            <p className={styles.description}>
              Full stack Developer with over a year of professional experience and a background in marketing and sales.
              A graduate of the Full stack Web Development Bootcamp at the Univeristy of Texas at Austin, I specialize in 
              building user-friendly, visually engaging web and mobile applications. I'm passionate about solving problems, writing 
              clean and efficient code, and continuously expanding my skill set. My technical toolkit includes HTML, CSS,
              JavaScript, TypeScript, React, Next.js, Node.js, Express, PostgresSQL, and Git. I'm also deeply interested in 
              development workflows and quality assurance, with a strong focus on building reliable and maintainable 
              software. 

            </p>
            <a href="https://docs.google.com/document/d/17wcc7avjUgzA59OJ9VIEKJ4Don3TxAvFJJZCxvOGVMw/edit" className={styles.contactBtn} target='null'>View CV</a>
        </div>
        <img src={getImageUrl("hero/jae.PNG")} alt="image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Hero
