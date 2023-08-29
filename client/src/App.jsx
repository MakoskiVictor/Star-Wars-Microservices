import './App.css'
import MethodCard from './components/MethodCard'
import ExampleRequest from './components/ExampleRequest'

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
            <li>Get All Characters</li>
            <li>Get All Planets</li>
            <li>Get All Films</li>
            <li>Get Character by ID</li>
            <li>Get Planet by ID</li>
            <li>Get Film by ID</li>
            <li>Post Planet</li>
            <li>Post Film</li>
            <li>Update Character</li>
            <li>Update Planet</li>
            <li>Update Film</li>
          </ol>
          </section>

          <ExampleRequest />

          <MethodCard id='Get All Characters' />
          <MethodCard id='Get All Planets' />
          <MethodCard id='Get All Films' />
          <MethodCard id='Get Character by ID' />
          <MethodCard id='Get Planet by ID' />
          <MethodCard id='Get Film by ID' />
          <h3>How works the Post and Put routes?</h3>
          <MethodCard id='Post Planet' />
          <MethodCard id='Post Film' />
          <MethodCard id='Update Character' />
          <MethodCard id='Update Planet' />
          <MethodCard id='Update Film' />

    </main>
  )
}

export default App
