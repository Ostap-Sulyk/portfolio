import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const About = () => {
  return(
      <>
          <Head>
              <title>About me</title>

          </Head>

          <h1>About me</h1>
          <p>I am a Toronto-based backend developer with a passion for programming and travel. When not working on software projects, I can often be found practicing mixed martial arts and boxing, or playing a game of chess.</p>

          <p>I am experienced with a range of technologies including React, MySQL, MongoDB, Docker and Spring Boot, and always eager to learn more!</p>

             <p>I dream of working as a backend developer and make a positive impact on the industries I work in. I am committed to using my skills to create innovative solutions that benefit society and disrupt traditional ways of doing things.</p>

              <p>With a passion for exploring new places and cultures, I am always up for an adventure. Whether hiking through the mountains or sampling local cuisine, I constantly seeking new experiences and opportunities for personal growth.</p>

              <p>Overall, I am a driven and dedicated professional who is committed to making a difference in the world.</p>
          <h2><Link href="/projects">My Projects &rarr;</Link></h2>
      </>
  )
}
export default About
