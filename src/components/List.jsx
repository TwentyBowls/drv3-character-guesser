import './List.css'
import ListHeader from './ListHeader.jsx'
import { FaFistRaised, FaSkull } from 'react-icons/fa';
import { GiCurvyKnife } from 'react-icons/gi';
import { BsQuestionDiamond } from 'react-icons/bs';

function List (props) {


    // function headerIcon () {
    //     let component = null
    //     switch(props.type) {
    //         case 'killers':
    //             component = <FaBeer />
    //     }
    //     return
    // }
    return (
        <section className={`list characters__${props.type}`}>
            {/* {header.icon} */}
            <ListHeader type={props.type} />
            <h2>Sanity</h2>
        </section>
    )
}

export default List