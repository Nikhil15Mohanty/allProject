import {useParams} from 'react-router-dom'
import React from 'react'
export const Contact = ()=>{
    let {username} = useParams();
    return <h1>This is contact list of {username}</h1>
}