import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'

const ActiveTaskList = ({ tasks, completeTask }) => (
  <div className="activeTaskList">
    <table border="0">
    <thead>
      <tr>
        <th scope="col">Task List</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
    {tasks.map(task =>
      <Task
        key={task.id}
        {...task}
        onClick={() => completeTask(task.id)}
      />
    )}
  </tbody>
  </table>
</div>
)

ActiveTaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  completeTask: PropTypes.func.isRequired
}

export default ActiveTaskList