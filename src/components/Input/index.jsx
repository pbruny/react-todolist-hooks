import React, { useState, useEffect } from "react"
import { FaCircle } from 'react-icons/fa'
import { FiPlusCircle } from 'react-icons/fi'
import { MdCheck, MdCancel, MdUndo } from 'react-icons/md'
import * as S from "./styled"

const Input = () => {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState(() => {
    const localStorageData = localStorage.getItem('@MyTodoApp:todos')

    if(localStorageData) return (JSON.parse(localStorageData))

    return []
  })

  const handleAddTodo = (event) => {
    event.preventDefault()

    if(!newTodo) {
      return
    }

    setTodos([...todos, {todo: newTodo, id: Date.now(), done: false}])
    setNewTodo('')
  }

  const handleDelete = (todo) => {
    const filteredTodos = todos.filter(item => item.id !== todo.id)

    setTodos(filteredTodos)
  }

  const handleComplete = (todo) => {
    todo.done = !todo.done
    setTodos([...todos])
  }

  useEffect(() => {
    localStorage.setItem('@MyTodoApp:todos', JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <S.Form onSubmit={handleAddTodo} >
        <input type="text" placeholder="Enter your to do" value={newTodo} onChange={event => setNewTodo(event.target.value)} />
        <button type="submit" ><FiPlusCircle size={20} /></button>
      </S.Form>

      {todos.map(todo => (
        <S.Todo key={todo.id}>
          <div>
            {todo.done ? ((<p className="done"><FaCircle size={12} /> {todo.todo}</p>)) : (<p><FaCircle size={12} /> {todo.todo}</p>)}
          </div>
          <div>
            <button onClick={() => handleComplete(todo)}>{todo.done ? (<MdUndo />) : (<MdCheck />)}</button>
            <button onClick={() => handleDelete(todo)}><MdCancel /></button>
          </div>
        </S.Todo>
      ))}
    </>
  )
}

export default Input
