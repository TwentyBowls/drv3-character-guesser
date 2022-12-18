import './ListHeader.css'
import { FaFistRaised, FaSkull } from 'react-icons/fa';
import { GiCurvyKnife } from 'react-icons/gi';
import { BsQuestionDiamond } from 'react-icons/bs';

function ListHeader (props) {
    let header = {
        killers: {
            title: 'Killers',
            icon: <GiCurvyKnife />,
        },
        undecided: {
            title: 'Undecided',
            icon: <BsQuestionDiamond />,
        },
        survivors: {
            title: 'Survivors',
            icon: <FaFistRaised />,
        },
        victims: {
            title: 'Victims',
            icon: <FaSkull />,
        },
    }[props.type]

    return (
        <div className="row header">
            {header.icon}
            <h1 className='header_title'>
                {header.title}
            </h1>
        </div>
    )
}

export default ListHeader