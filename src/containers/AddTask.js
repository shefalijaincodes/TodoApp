import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions'

const AddTask = ({ dispatch }) => {
  let input

  return (
    <div className = "addTask">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTask(input.value))
        input.value = ''
      }}>
      <input ref={node => input = node} className="form-control addTaskInput" placeholder=" Enter new task"/>
      <button type="submit" className="addTaskButton btn shadow-sm">
          Create New Task
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTask)
