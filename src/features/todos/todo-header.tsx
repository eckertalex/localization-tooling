import {useTranslation} from 'react-i18next'
import {useTodos} from 'features/todos/todo-context'

function TodoHeader() {
  const {t} = useTranslation()
  const {todos} = useTodos()
  const openTodos = todos.filter((todo) => !todo.complete)

  return (
    <>
      <h1>{t('Todos.welcome')}</h1>
      {openTodos.length === 0 ? <p>{t('Todos.noTodos')}</p> : <p>{t('Todos.openTodos', {count: openTodos.length})}</p>}
    </>
  )
}

export {TodoHeader}
