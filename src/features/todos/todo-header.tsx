import {t, ngettext, msgid} from 'ttag'
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
          {ngettext(
            msgid`You have ${openTodos.length} open todo`,
            `You have ${openTodos.length} open todos`,
            openTodos.length
          )}
        </p>
      )}
    </>
  )
}

export {TodoHeader}
