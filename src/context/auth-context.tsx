import React, { createContext, useState } from 'react'

type ProviderProps = {
    children: React.ReactNode
}

const ContexValue: {
    isAuth: Boolean
    login: Function
} = {
    isAuth: false,
    login: () => {},
}

export const AuthContext = createContext(ContexValue)

const AuthContextProvider = ({ children }: ProviderProps) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const loginHandler = () => {
        setIsLoggedIn(true)
    }

    return (
        <AuthContext.Provider
            value={{
                isAuth: isLoggedIn,
                login: loginHandler
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider