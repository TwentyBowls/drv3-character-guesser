import { useState, useRef } from 'react'
import './App.css'
import List from './components/List'

function App() {
  // initialize starting list of characters if none exists
  let startingList = {
      undecided: ['kaede', 'kirumi', 'himiko', 'maki', 'tenko', 'tsumugi', 'angie', 'miu', 'shuichi', 'kaito','ryoma',  'rantaro', 'gonta', 'kokichi', 'korekiyo', 'keebo'],
      killers: [],
      victims: [],
      survivors: [],
  }

  // put our list of characters in state
  const [characters, setCharacters] = useState(startingList)
  const draggedItem = useRef()
  const draggedTo = useRef()

  const dragStart = (e, pos, thisCategory) => {
    let charName = e.target.className.split(' ')[0]

    // remember information on which item is held
    draggedItem.current = {
      category: thisCategory,
      position: pos,
      name: charName
    }

    // reset the destination value to the current value
    draggedTo.current = {
      category: thisCategory,
      position: pos
    }

    // log
    console.log(`Started dragging ${charName} from ${thisCategory} at position ${pos}`)
  }

  const dragEnter = (e, thisCategory) => {
    //console.log(e.target.className, type, pos)

    const charOrPosName = e.target.className.split(' ')[0]
    let pos = null
    for (let category in characters) {
      if (charOrPosName === category) {
        pos = Math.max(0, characters[category].length - 1)
      } else if (characters[category].includes(charOrPosName)) {
        pos = characters[category].indexOf(charOrPosName)
      }
    }

    draggedTo.current = {
      category: thisCategory,
      position: pos,
    }

    console.log(`${draggedItem.current.name} has been moved to ${thisCategory} in pos ${pos}`)
  }

  function drop (e) {
    // use setcharacters
    setCharacters(prevCharacters => {
      // find the prop - value pair that will get spliced out
      let removeFrom = [...prevCharacters[draggedItem.current.category]]
      removeFrom.splice(draggedItem.current.position, 1)
      console.log(`item removed at:`)
      console.log(removeFrom)
      // run splice on it
      // find the prop - value pair that will get spliced in
      let addTo = [...prevCharacters[draggedTo.current.category]]
      addTo.splice(draggedTo.current.position, 0, draggedItem.current.name)
      console.log('item added at:')
      console.log(addTo)

      // run splice on it
    return {
      ...prevCharacters,
      [draggedItem.current.category]: removeFrom,
      [draggedTo.current.category]: addTo 
    }
  })
  }

  const categories = ['undecided', 'killers', 'victims', 'survivors'].map((category, idx) => {
    return (<List
      key={`${category}_key`}
      characters={characters[category]} 
      type={category} 
      dragStart={dragStart}
      dragEnter={dragEnter}
      drop={drop}
    />)
  })

  return (
    <div className="App">
      <section className="row roles characters">
        {categories}
      </section>
    </div>
  )
}

export default App
