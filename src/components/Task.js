import React from 'react'
import PropTypes from 'prop-types'

const Task = ({ onClick, text }) => (
  <tr>
      <td>{text}</td>
      <td><span className="taskRemoveIcon glyphicon glyphicon-remove" onClick={onClick}></span></td>
    </tr>
)

Task.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Task