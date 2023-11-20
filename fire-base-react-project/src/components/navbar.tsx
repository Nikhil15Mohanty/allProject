import {Link} from 'react-router-dom'
import {auth} from '../config/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import {signOut} from 'firebase/auth'
export const Navbar = ()=>{
    /*there will be one problem when we try to login again this will not be update in order to make it update we need a hook that is react-firebase-hooks*/
    const [user] = useAuthState(auth)
    const signUserOut = async ()=>{
       await signOut(auth);
    }
    return (
    <div className='navbar'>
        <div className='links'>
        <Link to ='/'>Home</Link>
        {!user ? (<Link to ='/login'>Login</Link>) : (
        <Link to ='/createpost'>Create Post</Link>)}
        </div>
        <div>
        <div className='user'>
        { user && (
            <>
            {user?.displayName}  
            <img src={user?.photoURL || "" }width="50" height="50" referrerPolicy="no-referrer"/>
            <button onClick={signUserOut}>Sign Out</button>
            </>
        )}
         </div>
        </div>
    </div>
    )
}