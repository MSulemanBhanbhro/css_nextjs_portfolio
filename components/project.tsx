// Project.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiGlobalFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { lusitana } from "@/components/fonts";
import styles from './Navbar.module.css';

const Project = () => {
  return (
    <section id="project" className={styles.projectSection}>
      <h1 className={`${lusitana.className} ${styles.heading}`}>
        My <span className={styles.headingAccent}>Projects</span>
      </h1>

      <div className={styles.projectContainer}>
        {/* Project Card 1 */}
        <div className={styles.projectCard}>
          <Image
            src={"/resume.png"}
            width={430}
            height={454}
            alt="static resume"
            className={styles.projectImage}
          />
          <h1 className={`${lusitana.className} ${styles.projectTitle}`}>
            Static Resume Builder
          </h1>
          <div className={styles.buttonContainer}>
            {/* Button for visiting the site */}
            <Link href="https://resumeproject01bymsuleman.vercel.app/" target="_blank">
              <button type="button" className={`${styles.button} ${styles.visitButton}`}>
                <span>Visit Site</span> <RiGlobalFill />
              </button>
            </Link>

            {/* Button for GitHub link */}
            <Link href="https://github.com/MSulemanBhanbhro/resumeproject" target="_blank">
              <button type="button" className={`${styles.button} ${styles.githubButton}`}>
                <span>GitHub</span> <FaGithub />
              </button>
            </Link>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className={styles.projectCard}>
          <Image
            src={"/clone.png"}
            width={430}
            height={454}
            alt="dynamic resume"
            className={styles.projectImage}
          />
          <h1 className={`${lusitana.className} ${styles.projectTitle}`}>
            Giaic Clone
          </h1>
          <div className={styles.buttonContainer}>
            {/* Button for visiting the site */}
            <Link href="https://giaic-clone-suleman.vercel.app/" target="_blank">
              <button type="button" className={`${styles.button} ${styles.visitButton}`}>
                <span>Visit Site</span> <RiGlobalFill />
              </button>
            </Link>

            {/* Button for GitHub link */}
            <Link href="https://github.com/MSulemanBhanbhro/Giaic" target="_blank">
              <button type="button" className={`${styles.button} ${styles.githubButton}`}>
                <span>GitHub</span> <FaGithub />
              </button>
            </Link>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className={styles.projectCard}>
          <Image
            src={"/acme.png"}
            width={430}
            height={454}
            alt="GIAIC Clone"
            className={styles.projectImage}
          />
          <h1 className={`${lusitana.className} ${styles.projectTitle}`}>
            NextJs Dashboard
          </h1>
          <div className={styles.buttonContainer}>
            {/* Button for visiting the site */}
            <Link href="https://nextjs-dashboard-by-msuleman.vercel.app/" target="_blank">
              <button type="button" className={`${styles.button} ${styles.visitButton}`}>
                <span>Visit Site</span> <RiGlobalFill />
              </button>
            </Link>

            {/* Button for GitHub link */}
            <Link href="https://github.com/MSulemanBhanbhro/nextjs-dashboard" target="_blank">
              <button type="button" className={`${styles.button} ${styles.githubButton}`}>
                <span>GitHub</span> <FaGithub />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
