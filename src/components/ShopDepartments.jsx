import React from 'react'
import { ShopDepttContent } from './ShopDepttContent'
import './ShopDeptt.css';


const ShopDepartments = () => {
  return (
    <div className='shopDepttContainer'>
      <div className="backToSchoolHeading">
       <hr />
       <h3>Shop Departments</h3>
       <hr />
     </div>
     <div className='shopDepttContent'>
       <ShopDepttContent />
     </div>
    </div>
    
  )
}

export default ShopDepartments
