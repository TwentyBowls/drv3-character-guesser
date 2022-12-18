import { useState } from 'react'
import './App.css'
import List from './components/List'

function App() {
  const [characters, setCharacters] = useState({
    undecided: [shuichi, kaede],
    killers: []
  })

  return (
    <div className="App">
      <div className="characters">
        <List className="characters__killers" />
        <List className="characters__victims" />
        <List className="characters__survivors" />
        <List className="characters__undecided" />
      </div>
    </div>
  )
}

export default App
