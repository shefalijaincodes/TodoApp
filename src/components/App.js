import React from 'react'
import AddTask from '../containers/AddTask'
import AppHeader from '../components/AppHeader'
import TaskList from '../containers/TaskList'
import TaskFooter from '../containers/TaskFooter'

const App = () => (
  <div className="todoApp">
    <AppHeader />
    <AddTask />
    <TaskList />
    <TaskFooter/>
  </div>
)

export default App