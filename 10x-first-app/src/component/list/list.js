import { useState } from "react";
const List = ()=> {
    const [todoItems, setTodoItems] = useState(["item"]);
    //forEach wont return anything(manipulate the orginal array) 
    //mutable Immutable
    const handleTodoAdd = ()=> {
        setTodoItems([...todoItems, "item"])
    }
    const renderList = ()=> {
        return todoItems.map((item,index)=> {
            return <li>{item + index}</li>
        });
    }
    return (<div>
        <ul>
           {todoItems.map((item, index)=> {
               return <li>{item + index}</li>
           })}
        </ul>
        <button onClick={handleTodoAdd}>Add item</button>
    </div>)
}
export default List;