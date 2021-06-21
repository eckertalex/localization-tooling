import {t, Plural} from '@lingui/macro'
import {useTodos} from 'features/todos/todo-context'

function TodoHeader() {
  const {todos} = useTodos()
  const openTodos = todos.filter((todo) => !todo.complete)

  return (
    <>
      <h1>{t`Welcome!`}</h1>
      {openTodos.length === 0 ? (
        <p>{t`Nice job! There are no open todos.`}</p>
      ) : (
        <p>
          <Plural value={openTodos.length} one="You have # open todo" other="You have # open todos" />
        </p>
      )}
    </>
  )
}

export {TodoHeader}
