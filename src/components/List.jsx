import './List.css'
import ListHeader from './ListHeader.jsx'
import {useRef} from 'react'

function List (props) {
    let characters = props.characters.map((character, idx) => {
        return (
            <div className='character' 
                key={idx}
                draggable='true'
                onDragStart={(e) => props.dragStart(e, idx)}
                onDragEnd={props.drop}
                // onDragEnd={console.log('drag end')}
            >
                {character}
            </div>
        )
    })

    return (
        <section 
            className={`list characters__${props.type}`}
        >
            <ListHeader type={props.type} />
            <div className="row listContainer"
            onDragEnter={(e) => props.dragEnter(e, props.idx)}
            >
                {characters}
            </div>

        </section>
    )
}

export default List