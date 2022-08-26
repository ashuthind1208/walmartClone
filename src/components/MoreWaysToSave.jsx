import React from 'react'
import MoreWaysContent from './MoreWaysContent'
import './MoreWaysToSave.css'

const MoreWaysToSave = () => {
  return (
    <div className='moreWaysContainer'>
      <div className="backToSchoolHeading">
       <hr />
       <h3>More Ways To Save</h3>
       <hr />
     </div>
     <div className="backToSchoolContent">
       <MoreWaysContent />
     </div>
    </div>
    
  )
}

export default MoreWaysToSave
