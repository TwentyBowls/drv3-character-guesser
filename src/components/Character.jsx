import './Character.css'

import backgroundSprites from './backgroundSprites'

function Character (props) {
    const charSprites = backgroundSprites[props.name]
    const backgroundStyle = {
        backgroundImage: `url(${charSprites[Math.floor(Math.random()* charSprites.length)]})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center'
    }

    return (
        <div 
            style={ backgroundStyle } 
            className={`${props.name} character`}
            draggable='true'
            onDragStart={(e) => props.dragStart(e, idx)}
            onDragEnd={props.drop}
        >

        </div>
    )
}

export default Character