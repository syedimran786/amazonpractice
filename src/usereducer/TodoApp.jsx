import React, { useReducer, useState } from 'react'
import Modal from './Modal'

let istate = {
    items: [],
    modelContent: "",
    showmodal: false
}


let reducer = (cstate, action) => {
    if (action.type == "add-item") {
        return {
            ...cstate,
            items: [...cstate.items, action.payload],
            modalcontent: "Item Added",
            showmodal: true
        }
    }
    else if (action.type == "delete") {
        return {
            ...cstate,
            items: action.payload,
            modalcontent: "Item Deleted",
            showmodal: true
        }
    }
    else if (action.type == "empty") {
        return {
            ...cstate,
            modalcontent: "Add Item",
            showmodal: true
        }
        
    }
    else if (action.type == "close-modal") {
        return {
            ...cstate,
            showmodal: false
        }
    }
return cstate
}


function TodoApp() {
    const [item, setitem] = useState('')
    const [mystate, dispatch] = useReducer(reducer, istate)

    let changeItem = ({ target: { value } }) => {
        setitem(value)
    }

    let AddItem = () => {

        if (item) {
            dispatch({ type: "add-item", payload: {id:mystate.items.length+1,item} })
        }
        else {
            dispatch({ type: "empty" })
        }

    }  

    let deleteItem=(id)=>
    {
        let newItems=mystate.items.filter((i)=>
        {
            return i.id!=id
        })

        dispatch({type:"delete",payload:newItems})
    }

    let closemodal=()=>
    {
        dispatch({type:"close-modal"})
    }
    return (
        <div>
            <h2 style={{color:"red"}}>{mystate.showmodal && <Modal closemodal={closemodal} modalcontent={mystate.modalcontent}/>}</h2>
            <input type="text" value={item} onChange={changeItem} />
            <button onClick={AddItem}>add</button>
            <hr />
            {mystate.items.map((i)=>
            {
                console.log(i);
                return <li key={i.id}>
                    {i.item} <button onClick={()=>(deleteItem(i.id))}>Delete</button>
                </li>
            })}
        </div>
    )
}

export default TodoApp