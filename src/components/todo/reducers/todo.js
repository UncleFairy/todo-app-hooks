const initialState = [{ id: 1, text: "Privet mir", isComplited: true }];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "COMPLETED_TODO":
      return [
        ...state.filter(todo => todo.id !== action.payload.id),
        { id: action.payload.id, text: action.payload.text, isCompleted: true }
      ];
    case "UNCOMPLETED_TODO":
      return [
        ...state.filter(todo => todo.id !== action.payload.id),
        { id: action.payload.id, text: action.payload.text, isCompleted: false }
      ];
    default:
      return state;
  }
};

export default todos;
