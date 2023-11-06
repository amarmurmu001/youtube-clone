import React from 'react'
import "./SideBar.css"

function SideBar(props) {
  return (
    <div className='sidebar-cont'>
        {props.text}
    </div>
  )
}

export default SideBar