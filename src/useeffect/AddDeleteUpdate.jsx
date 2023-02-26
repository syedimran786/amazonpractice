import React, { useEffect, useState } from 'react'

function AddDeleteUpdate() {

    const [data,setData] = useState(['orange','apple','banana'])
    const add =()=>{
        console.log('data before',data)
      
        const datacopy = [...data]
        datacopy.push('mango')
        setData(datacopy)
      
        // setData(previousData=>
        // {
        //     return [...previousData,"mango"]
        // })
    }

    useEffect(()=>{
        console.log('data changed', data);
    },[data])
    const deleteItem =()=>{
        
        data.pop()
            setData(previousData=>
            {
                return [...previousData]
            })
    }
    const update =()=>{

        data[data.length-1]='grapes'
        setData(previousData=>
            {
                return [...previousData]
            })
    }
    return (
        <div>
            {data.map((val,index)=>{
                return <p key={index}>{val}</p>
            })}
            <button onClick={add}>
                Add
            </button>
            <button onClick={()=>{deleteItem()}}>
                Delete Last
            </button>
            <button onClick={()=>{update()}}>
                Update Last
            </button>
        </div>
    )
}

export default React.memo(AddDeleteUpdate)