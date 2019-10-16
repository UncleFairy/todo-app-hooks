const getTodos = state => state.todos

const isNotCompleted = todo => !todo.isCompleted

export const getCounter = state => {
    const todos = getTodos(state)
    const uncompletedTodos = todos.filter(isNotCompleted)
    return uncompletedTodos.length
}
