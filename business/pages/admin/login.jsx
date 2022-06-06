import { useState } from "react"
import { useRouter } from "next/router"
import Style from '../../styles/AdminLogin.module.scss'
import axios from "axios"
export default function Login() {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(null)
    const router = useRouter()

    const handleClick = async () =>{
        try{
            await axios.post('http://localhost:3000/admin/login',{
                username, password
            })
            router.push("/admin")
        }catch(err){
            setError(err)
        }
    }
    return (
        <div className={Style.container}>
            <div className={Style.wrapper}>
                <h1>Admin Dashboard</h1>
                <label htmlFor="username">Username</label>
                <input  
                    name="username"
                    type='text'
                    className={Style.input}
                    onChange={(e)=>setUsername(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input  
                    name="password"
                    type='password'
                    className={Style.input}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <input className={Style.signInBtn} type="button" onClick={handleClick} value="Sign In" />
            </div>
        </div>
    )
}
