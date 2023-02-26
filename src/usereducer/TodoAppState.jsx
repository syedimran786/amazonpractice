import Modal  from './Modal'
import React, { useEffect, useState } from 'react'

function TodoAppState() {
    const [item, setitem] = useState('')
    const [modalcontent, setmodalcontent] = useState("")
    const [showmodal, setshowmodal] = useState(false)
    const [items, setitems] = useState([])





    let changeItem = ({ target: { value } }) => {
        setitem(() => {
            return value
        })
    }

    let AddItem = () => {

        if(item)
        {
            setitems((pitems)=>
       {
        return [...pitems,item]
       })

       setshowmodal(true)
       setmodalcontent(item+" Added")
        }
        else
        {
            setshowmodal(true)
            setmodalcontent("Please add item")
        }
       
       setitem("")
    }

    let deleteItem=(id)=>
    {
        let newItems=items.filter((e,i)=>
        {
            return i!=id
        })

        setitems(()=>
        {
            return newItems
        })

        setshowmodal(true)
        setmodalcontent(items[id]+" deleted")
    }

   
    
    return (
        <div>
            <h2>{showmodal && <Modal modalcontent={modalcontent} setshowmodal={setshowmodal}/>}</h2>
            <input type="text" value={item} onChange={changeItem} />
            <button onClick={AddItem}>add</button>

            <hr />
            {items.map((i,id)=>
            {
                return <li key={id}>
                    {i} <button onClick={()=>(deleteItem(id))}>Delete</button>
                </li>
            })}
        </div>
    )
}

export default TodoAppState