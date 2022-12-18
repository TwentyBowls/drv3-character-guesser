import { useState } from 'react'
import './App.css'
import List from './components/List'

function App() {
  const [characters, setCharacters] = useState({
    undecided: ['shuichi', 'kaede'],
    killers: [],
    victims: [],
    survivors: [],
  })

  function updateCharacters() {
    let category = null
    let name = event.target.innerText
    for (let group in characters) {
      if(characters[group].includes(name)) {
        category = group
        console.log(`we found ${name} in ${group}`)
      }
    }
    console.log('dragged object:')
    console.log(event.target)
    setCharacters(prevCharacters => {
      let oldList = prevCharacters[category]
      oldList.splice(oldList.indexOf(name), 1)
      console.log(oldList)
      console.log(prevCharacters[category])
      //return {...prevCharacters, [category]: prevCharacters[category]}.filter(currentName => currentName !== name)
      return {...prevCharacters}
    })
  }

  const handleDragLeave = event => {
    event.stopPropagation()
    event.preventDefault()
  }

  const handleDragOver = event => {
    event.stopPropagation()
    event.preventDefault()
  }

  const handleDragEnter = event => {
    event.stopPropagation()
    event.preventDefault()
  }

  const handleDrop = event => {
    event.stopPropagation()
    event.preventDefault()
    console.log('The bass was dropped')
    console.log(event.target)
  }

  return (
    <div className="App">
      <h1>Sanity Check</h1>
      <section className="characters">
        <List 
          characters={characters.undecided} 
          type='undecided'
          handleDragLeave={handleDragLeave}
          handleDragOver={handleDragOver}
          handleDragEnter={handleDragEnter}
          updateCharacters={updateCharacters}
          handleDrop={handleDrop}
          />
        <div className="row roles">
          <List 
            characters={characters.killers} 
            type='killers' 
            handleDragLeave={handleDragLeave}
            handleDragOver={handleDragOver}
            handleDragEnter={handleDragEnter}
            updateCharacters={updateCharacters}
            handleDrop={handleDrop}
            />
          <List 
            characters={characters.victims} 
            type='victims' 
            handleDragLeave={handleDragLeave}
            handleDragOver={handleDragOver}
            handleDragEnter={handleDragEnter}
            updateCharacters={updateCharacters}
            handleDrop={handleDrop}
            />
          <List 
            characters={characters.survivors} 
            type='survivors' 
            handleDragLeave={handleDragLeave}
            handleDragOver={handleDragOver}
            handleDragEnter={handleDragEnter}
            updateCharacters={updateCharacters}
            handleDrop={handleDrop}
            />
        </div>

      </section>
    </div>
  )
}

export default App
