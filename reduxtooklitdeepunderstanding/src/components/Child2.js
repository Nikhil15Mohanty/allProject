import {Subchild} from './Subchild'
export const Child2 = (props)=>{
    return(
        <div>
            Child2- 
            <Subchild subvalue = {props.value}/>
        </div>
    )
}