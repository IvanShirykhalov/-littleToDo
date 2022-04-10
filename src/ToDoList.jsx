import React, {useState} from "react";
import './ToDoList.css';
import {Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {Tasks} from "./Tasks";

export const ToDoList = () => {

    const [item, setItem] = useState('')
    const [newItem, setNewItem] = useState([])


    const itemEvent = (e) => {
        setItem(e.currentTarget.value)
    }
    const listOfItems = () => {
        setNewItem((prevValue) => {
            return [...prevValue, item]
        })
        setItem('')
    }
    const keyPress = (e) => {
        if (e.key === 'Enter') {
            listOfItems()
        }
    }

    return (
        <>
            <div className={'main_div'}>
                <div className={'center_div'}>
                    <br/>
                    <h1>ToDo List</h1>
                    <br/>
                    <input type={"text"}
                           value={item}
                           placeholder={'Add items'}
                           onChange={itemEvent}
                           onKeyPress={keyPress}
                    />
                    <Button className={'newBtn'} onClick={listOfItems}>
                        <AddIcon/>
                    </Button>
                    <br/>
                    <ol>
                        {newItem.map((t, i) => {
                            return (
                                <Tasks text={t} key={i}/>
                            )
                        })}
                    </ol>
                    <br/>

                </div>
            </div>
        </>
    );
};
