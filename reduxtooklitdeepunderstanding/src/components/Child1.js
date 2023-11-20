
import { Child2 } from "./Child2"
export const Child1 = (props)=>{
    return(
        <div>
            Child 1 - 
            <Child2 value = {props.value}/>
        </div>
    )
}