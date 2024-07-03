import "./todo.css"
import { FormEvent, useState } from "react"
import { MdDelete, MdEdit } from "react-icons/md";

interface todo {
    message: string,
    id: number
}

const Todo = () => {
    const [todos, setTodos] = useState<todo[]>([])
    const [message, setMessage] = useState('')

    const addTodo = (e: FormEvent) => {
        e.preventDefault()
        const todosLength = todos.length || 0
        const currentTodo = {
            message: message,
            id: todosLength
        }
        setTodos([...todos, currentTodo])
        console.log(todos)
    }
    
    const deleteTodo = (id: number) => {
        const newTodos = todos.filter(item => item.id !== id)
        setTodos(newTodos)
    }

    return (
        <div className="container">
            <div className="inputContainer">
                <form onSubmit={e => addTodo(e)}>
                    <input onChange={e => setMessage(e.target.value)} placeholder="Enter A Todo"></input>
                </form>
            </div>
            <div className="todoContainer">
                {todos.map(currentTodo => {
                    return(
                        <div key={currentTodo.id}>
                            <h2>{currentTodo.message}</h2>
                            <MdEdit className="icon" />
                            <MdDelete className="icon" onClick={() => deleteTodo(currentTodo.id)} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Todo