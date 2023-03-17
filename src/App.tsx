import Icon from './components/Icon'
import './App.css'


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
    <div className="App theme">
      {
        technologies.map(e => <Icon key={e.id} props={e} />)
      }
    </div>
  )
}

export default App
