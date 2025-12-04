import React, { useEffect, useState } from 'react'

function useLogin() {

    const [userdata, setData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        async function verify() {
            setLoading(true)
            
            const response = await fetch('http://localhost:2200/verify', {
                method : 'get',
                headers : {
                    'Authorization' : `Bearer ${sessionStorage.getItem('jwtToken')}`
                }
            })

            const data = await response.json()

            setData(data)
            setLoading(false)
            
        }

        verify()

    }, [])

  return [loading, userdata]
}

export default useLogin