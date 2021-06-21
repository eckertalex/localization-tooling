import React from 'react'
import {useTodos} from 'features/todos/todo-context'

function AddTodoForm() {
  const {addTodo} = useTodos()
  const [todo, setTodo] = React.useState<string>('')
  const [error, setError] = React.useState<string | null>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodo(e.target.value.trim())
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (todo.length === 0) {
      setError('Todo cannot be empty')
      return
    } else {
      addTodo(todo)
      setTodo('')
      setError(null)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="todo-input"
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0,0,0,0)',
          border: 0,
        }}
      >
        Add Todo
      </label>
      <input id="todo-input" type="text" value={todo} onChange={handleChange} />
      <button type="submit">Add Todo</button>
      {error ? <p style={{color: 'red'}}>{error}</p> : null}
    </form>
  )
}

export {AddTodoForm}
