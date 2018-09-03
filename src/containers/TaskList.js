import { connect } from 'react-redux'
import { completeTask } from '../actions'
import ActiveTaskList from '../components/ActiveTaskList'

const getActiveTasks = (tasks) => {
  return tasks.filter(task => !task.completed)
}

const mapStateToProps = state => ({
  tasks: getActiveTasks(state.tasks)
})

const mapDispatchToProps = dispatch => ({
  completeTask: id => dispatch(completeTask(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveTaskList)
