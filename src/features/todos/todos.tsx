import {TodoList} from 'features/todos/todo-list'
import {TodoProvider} from 'features/todos/todo-context'
import {AddTodoForm} from 'features/todos/add-todo-form'
import {TodoHeader} from 'features/todos/todo-header'

function Todos() {
  return (
    <TodoProvider>
      <TodoHeader />
      <TodoList />
      <AddTodoForm />
    </TodoProvider>
  )
}

export {Todos}
