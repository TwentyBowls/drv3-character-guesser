import { useState, useRef } from 'react'
import './App.css'
import List from './components/List'
import Character from './components/Character'

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
    console.log(`drag has entered the ${position} category at:`)
    console.log(e.target)
  }

  function drop (e) {
    // e.stopPropagation()
    // e.preventDefault()
    console.log(`item dropped from index ${dragItem.current} to category ${dragOverItem.current}`)
    setCharacters(prevCharacters => {
      let categoryRemovingFrom = null
      for (let currCategory in prevCharacters) {
        if (prevCharacters[currCategory].includes(e.target.innerHTML)) {
          //console.log('This element came from' + currCategory + "!")
          categoryRemovingFrom = currCategory
        }
      }
      console.log(`removing idx ${dragItem.current} from the following array:`)
      console.log(prevCharacters[categoryRemovingFrom])
      prevCharacters[categoryRemovingFrom].splice(dragItem.current, 1)
      console.log(`resulting array:`)
      console.log(prevCharacters[categoryRemovingFrom])
      let categoryAddingTo = prevCharacters[dragOverItem.current]
      categoryAddingTo.push(e.target.innerHTML)
      return {...prevCharacters, [dragOverItem.current]: categoryAddingTo}
    })
    //////////////////////////
    // const copyListItems = [...list]
    // const dragItemContent = copyListItems[dragItem.current]
    // copyListItems.splice(dragItem.current, 1)
    // copyListItems.splice(dragOverItem.current, 0, dragItemContent)
    // dragItem.current = null
    // dragOverItem.current = null
    // setList(copyListItems)
  }

  const categories = ['undecided', 'killers', 'victims', 'survivors'].map((category, idx) => {
    return (<List
      key={`${category}_key`}
      idx={(idx + 1) * 100}
      characters={characters[category]} 
      type={category} 
      dragStart={dragStart}
      dragEnter={dragEnter}
      drop={drop}
    />)
  })



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
      <Character />
      <section className="characters">
        {categories[0]}
        <div className="row roles">
          {categories[1]}
          {categories[2]}
          {categories[3]}
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