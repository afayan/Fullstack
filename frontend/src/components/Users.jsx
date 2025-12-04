import React from 'react'

function Users({userslist}) {
  return (
    <div className='storecontainer'> 
    <h1>Users</h1>
          {userslist.map((user)=>{
              return <div className="card">
                <h3>{user.name} <span className='light'>{user.email}</span></h3>
                <p>from {user.address}</p>
                <p>{user.role} user</p>
              </div>
            })}
    </div>
  )
}

export default Users