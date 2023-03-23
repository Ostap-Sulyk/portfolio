import Link from "next/link";
import Head from "next/head";

const Projects = () => {
    return (
        <>
            <Head>
                <title>My Projects</title>
                <link rel="icon" href="/icon.svg" />
            </Head>

            <h1>Projects</h1>
            <h2><Link href="/">&larr; Home</Link></h2>
            <h2><Link href="/about">&larr; About me</Link></h2>
        </>
    )
}

export default Projects