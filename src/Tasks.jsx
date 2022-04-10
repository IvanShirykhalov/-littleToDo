import React, {useState} from 'react';
import './ToDoList.css';
import DeleteIcon from '@mui/icons-material/Delete';

export const Tasks = (props) => {

    const [line, setLine] = useState(false)

    const cutIt = () => {
        setLine(true)
    }

    return (<div className={'todoStyle'}>
            <span onClick={cutIt}>
                <DeleteIcon className={'deleteIcon'}/>
            </span>
            <li style={{textDecoration: line ? 'line-through' : 'none'}}>{props.text}</li>
        </div>

    );
};
