import {TodoListItem} from 'features/todos/todo-list-item'
import {useTodos} from 'features/todos/todo-context'

function TodoList() {
  const {todos, toggleComplete} = useTodos()

  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.text} todo={todo} toggleComplete={toggleComplete} />
      ))}
    </ul>
  )
}

export {TodoList}
