export const Task = (props)=>{
    return (
        <div>
        <h1 sytle={{color: props.completed?"green":"black"}}>{props.taskName}</h1>
        <button onClick={()=>props.completeTask(props.id)}>Completed</button>
        <button onClick={()=>props.deleteTask(props.id)}>X</button>
        </div>
    )
}
