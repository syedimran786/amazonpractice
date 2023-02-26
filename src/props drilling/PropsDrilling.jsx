import React, { useState } from 'react'
import {employees} from './employee'

function PropsDrilling() {

    const [edata, setedata] = useState(employees);

    let deleteEmployee=(id)=>
    {
   
        let newdata=edata.filter(e=>e.eid!==id)
        setedata(newdata);
       
    }

  return (
    <div>
        <List edata={edata} deleteEmployee={deleteEmployee}/>
    </div>
  )
}

function List({edata,deleteEmployee})
{
    return <div>
        {edata.map((e)=>
        {
            return <SingleEmployee key={e.eid} {...e} deleteEmployee={deleteEmployee}/>
        })}
    </div>
}

function SingleEmployee({ename,eid,deleteEmployee})
{
    return <div style={{display:"flex",justifyContent:"space-around"}}>
        <li>{eid}:{ename}</li>
        <button onClick={()=>deleteEmployee(eid)}>Delete</button>
    </div>
}
export default PropsDrilling