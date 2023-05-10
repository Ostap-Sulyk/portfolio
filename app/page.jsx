import styles from "./page.module.css";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Spring Boot Web Developer</title>
      </Head>
      <main className={styles.main}>
        <header>
          <div id="top" class="logo">
            <Image src="icon.svg" alt="beans" width={40} height={40} />
          </div>
          <div class="hamburger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <nav class="nav-bar">
            <ul>
              <li>
                <a href="">about me</a>
              </li>
              <li>
                <a href="">my work</a>
              </li>
              <li>
                <a href="">contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <section class="hero-seciton">
          <div class="hero-container wrapper">
            <div>
              <h1>
                I build
                <span class="highlight">secure</span> and
                <span class="highlight">scalable</span>
                web applications
              </h1>
              <button class="btn--text btn--small" id="learn-more-btn">
                about me &DownArrow;
              </button>
            </div>
            <Image
              src="/avatar.png"
              alt="my photo"
              class="hero-img"
              width={600}
              height={600}
            />
          </div>
        </section>
        <section class="about">
          <div>
            <div>
              <p>
                👋 Hello, my name is Ostap, and I'm a passionate backend
                developer based in Toronto 🇨🇦. I specialize in building
                scalable, reliable, and secure web applications using
                <a
                  href="https://spring.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Spring Boot
                </a>
                , with experience working with both
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MongoDB
                </a>
                ,
                <a
                  href="https://www.mysql.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MySQL
                </a>
                and
                <a
                  href="https://www.postgresql.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PostgreSQL
                </a>
                databases. I love deploying applications using
                <a
                  href="https://www.docker.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Docker
                </a>
                🐳.
              </p>
              <br />
              <p>
                I believe that good software should be easy to use, easy to
                maintain, and easy to extend. I strive to write clean,
                well-documented code that solves real-world problems and helps
                people do their work more efficiently.
              </p>
              <br />
              <p>
                When I'm not coding, you can find me hiking in the nearby parks
                🌲 or exploring the city's many cultural events 🎭. I'm also an
                avid reader 📚, and I love learning about new technologies and
                programming languages.
              </p>
              <br />
              <p>
                If you're looking for a developer who can help you build a
                high-quality, secure, and scalable application, please don't
                hesitate to get in touch. I'd love to hear about your project
                and see how I can help 💻.
              </p>
              <button class="btn--text btn--small" id="projects-btn">
                my projects &DownArrow;
              </button>
            </div>
          </div>
        </section>
        <section class="projects-section">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="images/img-1.jpg" alt="Image 1" />
              </div>
              <div class="swiper-slide">
                <img src="images/img-2.jpg" alt="Image 2" />
              </div>
              <div class="swiper-slide">
                <img src="images/img-3.jpg" alt="Image 3" />
              </div>
              <div class="swiper-slide">
                <img src="images/img-4.jpg" alt="Image 4" />
              </div>
              <div class="swiper-slide">
                <img src="images/img-5.jpg" alt="Image 5" />
              </div>
              <div class="swiper-slide">
                <img src="images/img-6.jpg" alt="Image 6" />
              </div>
              <div class="swiper-slide">
                <img src="images/img-7.jpg" alt="Image 7" />
              </div>
              <div class="swiper-slide">
                <img src="images/img-8.jpg" alt="Image 8" />
              </div>
              <div class="swiper-slide">
                <img src="images/img-9.jpg" alt="Image 9" />
              </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </section>
        <section></section>
      </main>
    </>
  );
}
