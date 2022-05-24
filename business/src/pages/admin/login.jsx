import { useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"
export default function Login() {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(null)
    const router = useRouter()

    const handleClick = async () =>{
        try{
            await axios.post('http://localhost:3000/api/login',{
                username, password
            })
            router.push("/admin")
        }catch(err){
            setError(err)
        }
    }
    return (
        <div className='container'>
            <div className="wrapper">
                <h1>Admin Dashboard</h1>
                <input  
                    placeholder='username'
                    type='text'
                    className='input'
                    onChange={(e)=>setUsername(e.target.value)}
                />
                <input  
                    placeholder='password'
                    type='password'
                    className='input'
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <input className='signInBtn' type="button" onClick={handleClick} value="Sign In" />
            </div>
        </div>
    )
}
