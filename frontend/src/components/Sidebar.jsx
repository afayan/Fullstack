import React from 'react'

function Sidebar({sidebarinfo}) {
  return (
    <div className='sidebar'>
        {sidebarinfo.map((info)=>{
            return <div className="card">
               {info.username} rates {info.storename} at
               <h1>{info.rating}/5</h1>
            </div>
        })}
    </div>
  )
}

export default Sidebar