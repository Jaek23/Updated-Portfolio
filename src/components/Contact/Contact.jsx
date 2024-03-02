import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                <a href="mailto:jaehkim23@gmail.com" target='null'>Jaehkim23@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedln icon" />
                <a href="https://www.linkedin.com/in/jaekim96/" target='null'>linkedin.com/jaehkim96</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                <a href="https://github.com/Jaek23" target='null'>github.com/jaek23</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
