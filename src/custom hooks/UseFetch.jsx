import React, { useEffect, useState } from 'react'

function UseFetch(url) {

    const [apidata, setapidata] = useState([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState(false)



    let fetchUsers = async () => {
        try {
            let users = await fetch(url);

            if (users.status >= 200 && users.status <= 299) {
                users = await users.json();
                setapidata(users);
                setloading(false)
            }
            else {
                setloading(false)
                seterror(true)

            }
    
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchUsers()

    }, [])

    return { apidata, loading ,error}
}

export { UseFetch }