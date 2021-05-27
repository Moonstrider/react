import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <p>{task.day}</p>
            <p>
                {task.text}

                <FaTimes style={{ color: 'purple', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
            </p>
        </div>
    )
}

export default Task
