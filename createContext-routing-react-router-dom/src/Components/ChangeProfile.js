import {useState} from 'react';
import { useContext } from "react"
import {AppContext} from '../App.js'
export const ChangeProfile = (props)=>{
    const {setUsername} = useContext(AppContext); 
    const [newUserame,setNewUsername] = useState("");
    return(
        <div>
            <input onChange={(event)=>{setNewUsername(event.target.value)}}/>
            <button onClick={()=>{setUsername(newUserame)}}>Change UserName</button>
        </div>
    )
}