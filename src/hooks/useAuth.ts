import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, User } from "firebase/auth"

const auth = getAuth()

export const useAuth = () => {

  const [user, setUser] = useState<User>()
  
  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(undefined)
      }
    })
    return unsubscribeFromAuthStateChanged
  }, [])

  return {
    user,
  }
}