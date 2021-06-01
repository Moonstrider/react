import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <p>{task.day}</p>
            <p onClick={(e) => {
                console.log(e.target.innerText)
                return (
                    <input>{e.target.innerText}</input>
                )
             }}>
                {task.text}

                <FaTimes style={{ color: 'purple', cursor: 'pointer', float: 'right' }} onClick={() => onDelete(task.id)} />
            </p>
        </div>
    )
}

export default Task
