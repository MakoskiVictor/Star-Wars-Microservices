import './App.css'
import MethodCard from './components/MethodCard'
import ExampleRequest from './components/ExampleRequest'
import ExamplePost from './components/ExamplePost'
import BackToTopButton from './components/BackToTopButton'
import Footer from './components/Footer'
import { Helmet } from 'react-helmet'

function App () {
  return (
    <main>
      <Helmet>
        <title>Star Wars Microservices</title>
        <meta name="description" content="All Star Wars data you´ll never need in one place, easily accsessible through a modern REST Api with Microservices Architecture!" />
        <meta property="og:title" content="Star Wars Microservices" />
        <meta property="og:description" content="All Star Wars data you´ll never need in one place, easily accsessible through a modern REST Api with Microservices Architecture!" />
        <meta property="og:image" content="https://res.cloudinary.com/dl9pbe0eu/image/upload/q_49/v1693819421/microservic_n4don8.webp" />
        <meta property="og:url" content="https://star-wars-microservices.vercel.app/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <h1 id='title' >Star Wars Microservices</h1>
      <BackToTopButton />
      <section>
        <p>All Star Wars data you´ll never need in one place, easily accsessible through a modern REST Api with Microservices Architecture!</p>
      </section>
      <section>

          <h2>What are the Api Methods?</h2>
          <ol>
            <a href="#Get All Characters" ><li>Get All Characters</li></a>
            <a href="#Get All Planets"><li>Get All Planets</li></a>
            <a href="#Get All Films"><li>Get All Films</li></a>
            <a href="#Get Character by ID"><li>Get Character by ID</li></a>
            <a href="#Get Planet by ID"><li>Get Planet by ID</li></a>
            <a href="#Get Film by ID"><li>Get Film by ID</li></a>
            <a href="#Post Planet"><li>Post Planet</li></a>
            <a href="#Post Film"><li>Post Film</li></a>
            <a href="#Update Character"><li>Update Character</li></a>
            <a href="#Update Planet"><li>Update Planet</li></a>
            <a href="#Update Film"><li>Update Film</li></a>
          </ol>
          </section>

          <ExampleRequest />

          <MethodCard id='Get All Characters' />
          <MethodCard id='Get All Planets' />
          <MethodCard id='Get All Films' />
          <MethodCard id='Get Character by ID' />
          <MethodCard id='Get Planet by ID' />
          <MethodCard id='Get Film by ID' />
          <br />
          <h2>How works the Post and Put routes?</h2>
          <p>For Post and Put method you should know that it is necessary to use the following formats in you form:</p>
          <br />
          <ExamplePost />
          <MethodCard id='Post Planet' />
          <MethodCard id='Post Film' />
          <MethodCard id='Update Character' />
          <MethodCard id='Update Planet' />
          <MethodCard id='Update Film' />

          <Footer />

    </main>
  )
}

export default App
