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
            <h1 className="title">TODO</h1>
            <div className="inputContainer">
                <form className="form" onSubmit={e => addTodo(e)}>
                    <input className="input" onChange={e => setMessage(e.target.value)} placeholder="Enter A Todo"></input>
                </form>
            </div>
            <div className="todoContainer">
                {todos.map(currentTodo => {
                    return(
                        <div className="todo" key={currentTodo.id} >
                            <p>{currentTodo.message}</p>
                            <div className="icons">
                                <MdEdit className="icon" />
                                <MdDelete className="icon" onClick={() => deleteTodo(currentTodo.id)} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Todo