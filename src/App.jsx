import { useState, useRef } from 'react'
import './App.css'
import List from './components/List'

function App() {
  let startingList = {
      undecided: ['shuichi', 'kaede', 'keebo', 'rantaro'],
      killers: [],
      victims: [],
      survivors: [],
  }

  const [characters, setCharacters] = useState(startingList)
  const dragItem = useRef()
  const dragOverItem = useRef()

  const dragStart = (e, position) => {
    //dragItem.current = position
    dragItem.current = position
    console.log(`drag start at index ${position} on:`)
    console.log(e.target.innerHTML)
  }

  const dragEnter = (e, position) => {
    //dragOverItem.current = position
    dragOverItem.current = position
    console.log(`drag has entered at index ${position} on:`)
    console.log(e.target)
  }

  const drop = (e) => {
    console.log(`item dropped from index ${dragItem.current} to index ${dragOverItem.current}`)
    console.log(e.target)
    // const copyListItems = [...list]
    // const dragItemContent = copyListItems[dragItem.current]
    // copyListItems.splice(dragItem.current, 1)
    // copyListItems.splice(dragOverItem.current, 0, dragItemContent)
    // dragItem.current = null
    // dragOverItem.current = null
    // setList(copyListItems)
  }

  // function updateCharacters() {
  //   let category = null
  //   let name = event.target.innerText
  //   for (let group in characters) {
  //     if(characters[group].includes(name)) {
  //       category = group
  //       console.log(`we found ${name} in ${group}`)
  //     }
  //   }

  //   setCharacters(prevCharacters => {
  //     let oldList = prevCharacters[category]
  //     oldList.splice(oldList.indexOf(name), 1)
  //     console.log(oldList)
  //     console.log(prevCharacters[category])
  //     //return {...prevCharacters, [category]: prevCharacters[category]}.filter(currentName => currentName !== name)
  //     return {...prevCharacters}
  //   })
  // }

  // const handleDragLeave = event => {
  //   event.stopPropagation()
  //   event.preventDefault()
  // }

  return (
    <div className="App">
      <section className="characters">
        <List 
          characters={characters.undecided} 
          type='undecided'
          dragStart={dragStart}
          dragEnter={dragEnter}
          drop={drop}
          idx={100}
          />
        <div className="row roles">
          <List 
            characters={characters.killers} 
            type='killers' 
            dragStart={dragStart}
            dragEnter={dragEnter}
            drop={drop}
            idx={200}
            />
          <List 
            characters={characters.victims} 
            type='victims' 
            dragStart={dragStart}
            dragEnter={dragEnter}
            drop={drop}
            idx={300}
            />
          <List 
            characters={characters.survivors} 
            type='survivors' 
            dragStart={dragStart}
            dragEnter={dragEnter}
            drop={drop}
            idx={400}
            />
        </div>

      </section>
    </div>
  )
}

export default App

/*
import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [list, setList] = useState(['Item 1','Item 2','Item 3','Item 4','Item 5','Item 6','Item 7','Item 8','Item 9', 'Item 10'])
  const dragItem = useRef()
  const dragOverItem = useRef()

  const dragStart = (e, position) => {
    dragItem.current = position
    console.log(e.target.innerHTML)
  }

  const dragEnter = (e, position) => {
    dragOverItem.current = position
    console.log(e.target.innerHTMl)
  }

  const drop = (e) => {
    const copyListItems = [...list]
    const dragItemContent = copyListItems[dragItem.current]
    copyListItems.splice(dragItem.current, 1)
    copyListItems.splice(dragOverItem.current, 0, dragItemContent)
    dragItem.current = null
    dragOverItem.current = null
    setList(copyListItems)
  }

  let divs = list.map((item, idx) => {
    return (<div 
              className='item'
              draggable
              key={idx}
              onDragStart={(e) => dragStart(e, idx)}
              onDragEnter={(e) => dragEnter(e, idx)}
              onDragEnd={drop}
            >
                {item}
            </div>
    )
  })


  return (
    <div className="App">
      <div className="left">
        {divs}
      </div>
      <div className="right"></div>
    </div>
  )
}

export default App


*/