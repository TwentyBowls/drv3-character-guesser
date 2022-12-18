import { useState } from 'react'
import './App.css'
import List from './components/List'

function App() {
  const [characters, setCharacters] = useState({
    undecided: ['shuichi', 'kaede'],
    killers: []
  })

  return (
    <div className="App">
      <h1>Sanity Check</h1>
      <section className="characters">
        <List type='undecided'/>
        <div className="row roles">
          <List type='killers' />
          <List type='victims' />
          <List type='survivors' />
        </div>

      </section>
    </div>
  )
}

export default App
