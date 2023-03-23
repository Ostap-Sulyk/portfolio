import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Spring Boot Developer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <main>
        <h1>Hello</h1>
          <Image className="hero-img" src="/images/avatar.png" alt="my picture" width={400} height={400}/>

        <h2>
            <Link href="/about">About Me &rarr;</Link>
        </h2>
      </main>
    </>
  )
}
