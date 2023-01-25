import React, { useState } from 'react'
import DoList from './DoList';

const Compo1 = () => {

    const [inputList, setInputList] = useState("");

    //hooks
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };
    const listOfitem = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("");
    };
    const deleteItem = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }
    return (
        <>
            <div className='Main_div'>
                <div className='Center_div'>
                    <br />
                    <h1>ToDo list</h1>
                    <br />
                    <input type="text" placeholder='Add a Items' value={inputList} onChange={itemEvent} />
                    <button onClick={listOfitem}>+</button>
                    <ol>
                        {/* <li>{inputList}</li>*/}
                        {Items.map((itemVal, index) => {
                            return <DoList key={index}
                                id={index} text={itemVal}
                                onSelect={deleteItem}
                            />;
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Compo1;
