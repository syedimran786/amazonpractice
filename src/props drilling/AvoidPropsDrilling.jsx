import React, { useState } from 'react'
import { useContext } from 'react';
import {employees} from './employee'

let empContext=React.createContext()

function AvoidPropsDrilling() {
    const [edata, setedata] = useState(employees);

    let deleteEmployee=(id)=>
    {
        // let newdata=edata.filter((e)=>
        // {
        //     return e.eid!==id;
        // })

        setedata((p)=>
        {
            return p.filter((e)=>e.eid!==id)
        });
        
    }

  return (
    <empContext.Provider value={deleteEmployee}>
        <List edata={edata}/>
    </empContext.Provider>
  )
}

function List({edata})
{
    return <div>
        {edata.map((e)=>
        {
            return <SingleEmployee key={e.eid} {...e} />
        })}
    </div>
}

function SingleEmployee({ename,eid})
{
    //! using useContext() hook
    let deleteEmployee=useContext(empContext)
    return <div style={{display:"flex",justifyContent:"space-around"}}>
        <li>{eid}:{ename}</li>
        <button onClick={()=>deleteEmployee(eid)}>Delete</button>
    </div>

    //! using consumer
    // return <div style={{display:"flex",justifyContent:"space-around"}}>
    //     <li>{eid}:{ename}</li>
    //     <empContext.Consumer>
    //         {
    //             (deleteEmployee)=>
    //             {
    //                 return <button onClick={()=>deleteEmployee(eid)}>Delete</button>
    //             }
    //         }
    //     </empContext.Consumer>   
    // </div>
}
export default AvoidPropsDrilling