import {Todo} from 'features/todos/todo-context'

type TodoListItemProps = {
  todo: Todo
  toggleComplete: (id: string) => void
}

function TodoListItem(props: TodoListItemProps) {
  const {todo, toggleComplete} = props
  return (
    <li>
      <label
        style={{
          textDecoration: todo.complete ? 'line-through' : undefined,
        }}
      >
        <input type="checkbox" onChange={() => toggleComplete(todo.id)} checked={todo.complete} />
        {todo.text}
      </label>
    </li>
  )
}

export {TodoListItem}
