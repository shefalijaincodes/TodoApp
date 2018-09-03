import * as actions from './index'

describe('task actions', () => {
  it('addTask should create ADD_TASK action', () => {
    expect(actions.addTask('Use Redux')).toEqual({
      type: 'ADD_TASK',
      id: 4,
      text: 'Use Redux'
    })
  })

  it('completeTask should create COMPLETE_TASK action', () => {
    expect(actions.completeTask(1)).toEqual({
      type: 'COMPLETE_TASK',
      id: 1
    })
  })

  it('clearTask should create CLEAR_TASK action', () => {
    expect(actions.clearTask()).toEqual({
      type: 'CLEAR_TASK'
    })
  })

  it('resetTask should create RESET_TASK action', () => {
    expect(actions.resetTask()).toEqual({
      type: 'RESET_TASK'
    })
  })
})