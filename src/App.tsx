import Icon from './components/icon/Icon'


const technologies = [
    { id: 1, name: "js", description: "Java Script", website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { id: 2, name: "ts", description: "Type Script", website: "https://www.typescriptlang.org/" },
    { id: 3, name: "nodejs", description: "NodeJS", website: "https://nodejs.org/" },
    { id: 4, name: "spring", description: "SpringBoot", website: "https://spring.io/" },
    { id: 5, name: "reactjs", description: "ReactJS", website: "https://react.dev/" },
    { id: 6, name: "angular", description: "Angular", website: "https://angular.io/" },
    { id: 7, name: "bootstrap5", description: "Boot Strap 5", website: "https://getbootstrap.com/" },
    { id: 8, name: "docker", description: "Docker", website: "https://www.docker.com/" },
    { id: 9, name: "firebase", description: "Fire Base", website: "https://firebase.google.com/" },
    { id: 10, name: "java", description: "Java", website: "https://www.java.com/" },
    { id: 11, name: "mongodb", description: "MongoDb", website: "https://www.mongodb.com/" },
    { id: 12, name: "mysql", description: "MySQL", website: "https://www.mysql.com/" },
    { id: 13, name: "postgresql", description: "PostgreSQL", website: "https://www.postgresql.org/" },
    { id: 14, name: "postman", description: "PostMan", website: "https://www.postman.com/" },
    { id: 15, name: "python", description: "Python", website: "https://www.python.org/" },
    { id: 16, name: "rust", description: "Rust", website: "https://www.rust-lang.org/" },
    { id: 17, name: "sass", description: "Sass", website: "https://sass-lang.com/" },
    { id: 18, name: "scala", description: "Scala", website: "https://www.scala-lang.org/" },
    { id: 19, name: "tailwind", description: "Tailwind CSS", website: "https://tailwindcss.com/" },
    { id: 20, name: "vuejs", description: "VueJS", website: "https://vuejs.org/" },
    { id: 21, name: "graphql", description: "GraphQL", website: "https://graphql.org/" },
    { id: 22, name: "git", description: "Git", website: "https://git-scm.com/" },
    { id: 23, name: "github", description: "GitHub", website: "https://github.com/" },
    { id: 24, name: "go", description: "Go", website: "https://go.dev/" },
]


function App() {
    return (
        <div>
            <div className={"hero"}>
                <div>
                    <h1>HELLO! 👋🏻</h1>
                    <h2>My name is Ostap Sulyk.</h2>
                </div>
                <div className='hero-img'></div>
            </div>

            <div className='center'>
                <div>
                    <h2>About Me</h2>
                    <p>I am a Toronto-based backend developer with a passion for programming and travel. When not working on software projects, I can often be found practicing mixed martial arts and boxing, or playing a game of chess.</p>
                    <p>I am experienced with a range of technologies including React, MySQL, MongoDB, Docker and Spring Boot, and always eager to learn more!</p>
                    <p>I dream of working as a backend developer and make a positive impact on the industries I work in. I am committed to using my skills to create innovative solutions that benefit society and disrupt traditional ways of doing things.</p>
                    <p>With a passion for exploring new places and cultures, I am always up for an adventure. Whether hiking through the mountains or sampling local cuisine, I constantly seeking new experiences and opportunities for personal growth.</p>
                    <p>Overall, I am a driven and dedicated professional who is committed to making a difference in the world.</p>
                </div>
                <div>
                    <h2>Technologies I Know</h2>
                    <div>
                        {/* TODO: add animations on hover from react framer motion */}
                        {technologies.map(e => <Icon key={e.id} props={e} />)}
                    </div>
                </div>


            </div>


        </div>)

}

export default App
