import {useNavigate} from 'react-router-dom'
export const Home = ()=>{
    let navigate = useNavigate();
    return <h1>This is the home page <button onClick={()=>{navigate('/contact')}}>Go to Contact</button></h1>
}