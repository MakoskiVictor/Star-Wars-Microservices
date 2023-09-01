import './App.css'
import MethodCard from './components/MethodCard'
import ExampleRequest from './components/ExampleRequest'
import ExamplePost from './components/ExamplePost'

function App () {
  return (
    <main>
      <h1>Star Wars Microservices</h1>
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

    </main>
  )
}

export default App
