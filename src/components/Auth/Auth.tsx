import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth-context'
import { TfiUnlock } from 'react-icons/tfi'
import './Auth.css'

const Auth: React.FC = () => {

    const authContext = useContext(AuthContext)

    const loginHandler = () => {
        authContext.login()
    }

    return (
        <div className='auth'>
            <div>Parents Lock</div>
            <button onClick={loginHandler} ><TfiUnlock /></button>
        </div>
    )
}

export default Auth