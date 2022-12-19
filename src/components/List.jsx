import './List.css'
import ListHeader from './ListHeader.jsx'
import Character from './Character.jsx'

function List (props) {
    let characters = props.characters.map((character, idx) => {
        return (
            <Character
                key={idx}
                idx={idx}
                name={character}
                dragStart={props.dragStart}
                drop={props.drop}
            />
        )
    })

    return (
        <section 
            className={`list characters__${props.type}`}
        >
            <ListHeader type={props.type} />
            <div className="row listContainer"
            onDragEnter={(e) => props.dragEnter(e, props.type)}
            >
                {characters}
            </div>

        </section>
    )
}

export default List