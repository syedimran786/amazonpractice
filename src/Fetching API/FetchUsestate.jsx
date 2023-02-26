import React, { useEffect, useState } from 'react'

function FetchUsestate() {
    const [users, setusers] = useState([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState(false)


    useEffect(() => {

        fetch("https://api.github.com/uses").then((res) => {
            if (res.status >= 200 && res.status <= 299) {
                return res.json();
            }
            else {
                setloading(false)
                seterror(true)
            }
            // return res.json();
        }).then((myusers) => {
            setusers(myusers)
            setloading(false)
        }).catch(e => {
            console.log(error);
        })


    }, [])





    if (loading) {
        return <h1>Loading......</h1>
    }
    if (error) {
        return <h1>Error.....</h1>
    }

    return users?.map(({ id, login, avatar_url }) => {
        return <li key={id}>{login} <img height={100} width={100} src={avatar_url} /></li>
    })
}

export default FetchUsestate