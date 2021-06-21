import {useTodos} from 'features/todos/todo-context'

function TodoHeader() {
  const {todos} = useTodos()
  const openTodos = todos.filter((todo) => !todo.complete)

  return (
    <>
      <h1>Welcome!</h1>
      {openTodos.length === 0 ? (
        <p>Nice job! There are no open todos.</p>
      ) : (
        <p>
          You have {openTodos.length} open todo{openTodos.length === 1 ? null : 's'}
        </p>
      )}
    </>
  )
}

export {TodoHeader}
