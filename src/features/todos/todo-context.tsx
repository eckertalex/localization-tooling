import React from 'react'
import {nanoid} from 'nanoid'

export type Todo = {
  id: string
  text: string
  complete: boolean
}

type TodoProviderValue = {
  todos: Todo[]
  toggleComplete: (id: string) => void
  addTodo: (id: string) => void
}

const initialTodos: Todo[] = [
  {
    id: nanoid(),
    text: 'Walk the dog',
    complete: true,
  },
  {
    id: nanoid(),
    text: 'Make app',
    complete: false,
  },
]

const TodoContext = React.createContext<TodoProviderValue | undefined>(undefined)
TodoContext.displayName = 'TodoContext'

function TodoProvider({children}: {children: React.ReactNode}) {
  const [todos, setTodos] = React.useState<Todo[]>(initialTodos)

  function toggleComplete(id: string) {
    setTodos((ts) =>
      ts.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            complete: !t.complete,
          }
        }
        return t
      })
    )
  }

  function addTodo(text: string) {
    setTodos((todos) => [...todos, {id: nanoid(), text, complete: false}])
  }

  return <TodoContext.Provider value={{todos, toggleComplete, addTodo}}>{children}</TodoContext.Provider>
}

function useTodos() {
  const context = React.useContext(TodoContext)

  if (context === undefined) {
    throw new Error(`useTodos must be used within a TodoProvider`)
  }

  return context
}
export {TodoProvider, useTodos}
