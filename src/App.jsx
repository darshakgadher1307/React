import React, { useState } from "react";
import ToDoList from "./todoList";

const App = () => {

    const [iplist , setItem] = useState("");
    const [items, setItems] = useState([]);

    const ipEvent = (e) => {
        setItem(e.target.value);
    }

    const AddItem = () => {
        setItems((old) =>{
            return [...old,iplist];
        });
        setItem("");
    }

    const deleteItem = (id) => {
        setItems((old) => {
            return old.filter((arr,index) => {
                return index != id;
            })
        })
    }

    return(
    <>
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <input
                type="text" 
                placeholder="Add a Items"
                name="item"
                onChange={ipEvent}
                value={iplist}
                />
                <button onClick={AddItem}> + </button>

                <ol>
                    {items.map( (itemval,index) => {
                        return <ToDoList 
                        text={itemval} 
                        key={index}
                        id={index}
                        onSelect = {deleteItem}
                        />
                    })}
                </ol>
            </div>
        </div>
    </>
    );

    
}

export default App;