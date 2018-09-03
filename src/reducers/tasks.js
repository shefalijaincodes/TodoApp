const tasks = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'COMPLETE_TASK':
      return state.map(task =>
        (task.id === action.id)
          ? {...task, completed: true}
          : task
      )
    case 'CLEAR_TASK':
      return [];
    case 'RESET_TASK':
      return initialState;  
    default:
    console.log("This is called " + action.type);
      return state
  }
}

const initialState = [
  {
    id:1, text:'Your Sample Task1', completed: false
  },
  {
    id:2, text:'Your Sample Task2', completed: false
  },
  {
    id:3, text:'Your Sample Task3', completed: false
  } 
];

export default tasks
