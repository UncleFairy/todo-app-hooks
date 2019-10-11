export const completeTodo = id => ({
  type: "COMPLETED_TODO",
  payload: {
    id
  }
});

export const uncompleteTodo = id => ({
  type: "UNCOMPLETED_TODO",
  payload: {
    id
  }
});
