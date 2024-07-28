import {createContext, useState} from 'react'

export const UserContext =createContext()

const UserProvider =({children})=>{
    const [userData,setUserData] =useState({})

    const updateData=(newuser)=>{
        setUserData(()=>(newuser))
    }

    return(
        <UserContext.Provider value={{userData,updateData}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider