let nextTaskId = 4
export const addTask = text => ({
  type: 'ADD_TASK',
  id: nextTaskId++,
  text
})

export const completeTask = id => ({
  type: 'COMPLETE_TASK',
  id
})

export const clearTask = () => ({
  type: 'CLEAR_TASK'
})

export const resetTask = () => ({
  type: 'RESET_TASK'
})
