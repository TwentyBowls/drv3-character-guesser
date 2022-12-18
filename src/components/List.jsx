import './List.css'
import ListHeader from './ListHeader.jsx'

function List (props) {
    let characters = props.characters.map((character, idx) => {
        return (
            <h2 
                key={idx}
                draggable='true'
                //onDragEnd={props.updateCharacters}
            >
                {character}
            </h2>
        )
    })

    return (
        <section 
            className={`list characters__${props.type}`}
            onDragEnter={props.handleDragEnter}
            onDragOver={props.handleDragOver}
            onDragExit={props.handleDragLeave}
            onDrop={props.handleDrop}
        >
            <ListHeader type={props.type} />
            {characters}
        </section>
    )
}

export default List