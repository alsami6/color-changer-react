// export default function Todo({task}){
//     return(
//         <div>
//             <li>Task: {task}</li>
//         </div>
//     )
// }
// export default function Todo({task ,isDone}){
//     return(
//         <li>{isDone ? 'Finished' : "Work on"}: {task}</li>
//     )
// }

export default function Todo({task, isDone}){
    return(
        <li>{task} {isDone && ': Done'}</li>
    )
}