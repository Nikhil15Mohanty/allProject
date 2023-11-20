import { useDispatch, useSelector } from "react-redux"
import {increment,incrementByValue} from '../featuers/showSlice'
export const Subchild = ()=>{

    const dispatch = useDispatch()


    const data = useSelector((c)=>{         //It takes value from store 
       return c.show.value              //show is coming from store show(key)   
    })
    return(
        <div>
           SubChild - {data}
            <div>
                <button onClick={()=>dispatch(increment())}> Submite me</button>
                <button onClick={()=>dispatch(incrementByValue(10))}> Submite me</button>
            </div>
            
        </div>
    )
}