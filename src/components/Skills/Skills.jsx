import React from 'react';
import {getImageUrl} from "../../utils";
import skills from "../../data/skills.json";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section id='skills' className={styles.container}>
       <h2>Skills</h2>
        <div>
            {skills.map((skill, id) => {
              return(
                <>
                    <div key={id}> 
                        <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                        <p>{skill.title}</p>
                    </div>
                </>
              )
            })}
       </div>
    </section>
  )
}

export default Skills
