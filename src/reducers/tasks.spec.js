import tasks from './tasks'

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

describe('tasks reducer', () => {
  it('should handle initial state', () => {
    expect(
      tasks(undefined, {})
    ).toEqual(initialState)
  })

  it('should handle ADD_TASK', () => {
    expect(
      tasks([], {
        type: 'ADD_TASK',
        text: 'Run the tests',
        id: 0
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }
    ])

    expect(
      tasks([
        {
          text: 'Run the tests',
          completed: false,
          id: 0
        }
      ], {
        type: 'ADD_TASK',
        text: 'Use Redux',
        id: 1
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }, {
        text: 'Use Redux',
        completed: false,
        id: 1
      }
    ])

    expect(
      tasks([
        {
          text: 'Run the tests',
          completed: false,
          id: 0
        }, {
          text: 'Use Redux',
          completed: false,
          id: 1
        }
      ], {
        type: 'ADD_TASK',
        text: 'Fix the tests',
        id: 2
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }, {
        text: 'Use Redux',
        completed: false,
        id: 1
      }, {
        text: 'Fix the tests',
        completed: false,
        id: 2
      }
    ])
  })

  it('should handle COMPLETE_TASK', () => {
    expect(
      tasks([
        {
          text: 'Run the tests',
          completed: false,
          id: 1
        }, {
          text: 'Use Redux',
          completed: false,
          id: 0
        }
      ], {
        type: 'COMPLETE_TASK',
        id: 1
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: true,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
  })

  it('should handle CLEAR_TASK', () => {
    expect(
      tasks([
        {
          text: 'Run the tests',
          completed: false,
          id: 4
        }, {
          text: 'Use Redux',
          completed: false,
          id: 5
        }
      ], {
        type: 'CLEAR_TASK'
      })
    ).toEqual([])
  })

  it('should handle RESET_TASK', () => {
    expect(
      tasks([
        {
          text: 'Run the tests',
          completed: false,
          id: 4
        }, {
          text: 'Use Redux',
          completed: false,
          id: 5
        }
      ], {
        type: 'RESET_TASK'
      })
    ).toEqual(initialState)
  })
})
