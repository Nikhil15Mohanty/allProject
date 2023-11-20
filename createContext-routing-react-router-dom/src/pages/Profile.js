import {ChangeProfile} from '../Components/ChangeProfile.js';
import { useContext } from "react"
import {AppContext} from '../App.js'
export const Profile =() =>{
    const {username} = useContext(AppContext);  
   return(
    <>
        <div>
            This is user : {username}
            <ChangeProfile/>
        </div>
    </>
   )
}