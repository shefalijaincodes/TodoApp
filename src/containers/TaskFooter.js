import React from 'react'
import { connect } from 'react-redux'
import { clearTask } from '../actions'
import { resetTask } from '../actions'

const TaskFooter = ({ dispatch }) => {
    return (
        <div>
        <button type="submit" className="clearTaskButton btn shadow-sm" 
        onClick={() =>dispatch(clearTask())}  >
          Clear Tasks
        </button>
        <button type="submit" className="resetTaskButton btn shadow-sm"
         onClick={() =>dispatch(resetTask())} >
          Reset Tasks
        </button>
      </div>
    )
  }
  
  export default connect()(TaskFooter)