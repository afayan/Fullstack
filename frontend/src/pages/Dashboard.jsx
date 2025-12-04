import React, { useEffect, useState } from 'react'
import useLogin from '../hooks/useLogin'
import url from '../components/url'
import Stores from '../components/Stores'
import Users from '../components/Users'
import '../styles/dashboard.css'
import Sidebar from '../components/Sidebar'
import {useNavigate} from 'react-router-dom'

function Dashboard() {

const [loading, userdata] = useLogin()
const [userslist, setUserList] = useState([])
const [filter , setFilter] = useState('')
const [stores, setStoresList] = useState([])
const [sidebarinfo, setsidebarinfo] = useState([])
const navigate = useNavigate()

useEffect(()=>{
  getUsers(filter)
  getstores(filter)
}, [filter, loading])



  async function getUsers(filter) {
    const response = await fetch(`${url}/getusers${filter?"?filter="+filter : ""}`, {
      method : 'get',
      headers : {
       'Authorization' : `Bearer ${sessionStorage.getItem('jwtToken')}`
          }
    })
    const data = await response.json()
    console.log(data);
    setUserList(data.result)
  }

  async function getstores(filter) {
    const response = await fetch(`${url}/getstores${filter?"?filter="+filter : ""}`, {
      method : 'get',
      headers : {
       'Authorization' : `Bearer ${sessionStorage.getItem('jwtToken')}`
          }
    })
    const data = await response.json()
    console.log("stores",data);
     setStoresList(data.result)
  }

  function logout() {
    sessionStorage.removeItem('jwtToken')
    navigate('/login')
  }

    if (!loading && userdata && userdata.role == 'admin') {
        return (
          <>
            <h1>Welcome Admin</h1>
            <input type="text" name="" id="" onChange={(e)=>setFilter(e.target.value)}/>

            <button onClick={logout}>Logout</button>
            <button onClick={()=>navigate('/register')}>Add user</button>
            <button onClick={()=>navigate('/addstore')}>Add store</button>

          <div className="listcontainer">
            <Users userslist = {userslist}/>
            <Stores stores={stores} setsidebarinfo={setsidebarinfo} admin={true}/>

            {sidebarinfo && <Sidebar sidebarinfo = {sidebarinfo}/>}
          </div>
         
          </>
        )
    }
      else if (!loading) {
        return (
          <div>
         <h1>Welcome {userdata.email}</h1>
            <input type="text" name="" id="" onChange={(e)=>setFilter(e.target.value)}/>

            <button onClick={logout}>Logout</button>
            <div className="listcontainer">
            <Stores stores={stores} setsidebarinfo={setsidebarinfo} admin={false} userdata={userdata}/>

            {sidebarinfo && <Sidebar sidebarinfo = {sidebarinfo}/>}
          </div>
          </div>
        )
    }

}

export default Dashboard