import React, { useEffect, useState } from 'react'
import {UseFetch} from "./UseFetch"

function FetchUsers() {

let {loading,apidata,error}=UseFetch("https://api.github.com/usrs")
    



    if (loading) {
        return <h1>Loading......</h1>
    }
    if (error) {
        return <h1>Error.....</h1>
    }
    return apidata?.map(({ id, login, avatar_url }) => {
        return <li key={id}>{login} <img height={100} width={100} src={avatar_url} /></li>
    })
}

export default FetchUsers