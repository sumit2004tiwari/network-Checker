import React, { useEffect, useState } from 'react'

const NetworkStatus = () => {
    const [isonline , setisOnline] = useState(true)

    useEffect(()=>{
        function handleOnline(){
                 setisOnline(true)
        }
        function handleOffline(){
            setisOnline(false)

        }
        window.addEventListener("online" , handleOnline)
        window.addEventListener("offline" , handleOffline)

        return ()=>{
            window.removeEventListener('online' , handleOnline)
            window.removeEventListener('offline', handleOffline)
        }
    },[])
  return (
    <>
      <h1 className='text-2xl text-pretty'>Network status check that user will be online or not</h1>
        <h1 className='text-5xl text-bold text-green-500 mt-40'>
            {isonline ? "Dear user you are online " : " check your connection"}
        </h1>
    </>
  )
}

export default NetworkStatus
