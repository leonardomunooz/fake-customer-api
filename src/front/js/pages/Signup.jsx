import React, {useState} from "react"
import { Link } from "react-router-dom"


const initialUser = {
    "email" : "",
    "password" : ""
}
const Signup = () =>{

    const [user,setUser] = useState(initialUser)

 
    const handleChange = ({target}) => {
    
        setUser({
            ...user,
            [target.name]: target.value
        })
       
    }


    const handleSubmit = () =>{

        if (user.email.trim() == "" || user.password.trim() == "" ){
            console.log("No se pueden enviar elementos vacios") 
            return
        }else{
            console.log('Programar funcionalidad')
            console.log(user.email)
        }

    }

    return (
        <div className="container m-auto" style={{ "width": "600px" }}>
        <h1 className='text-center mt-5'>Sign Up</h1>
        <form className="row" onClick={(e) => e.preventDefault()}>
            <div className="col-12">
                <div className="mb-3">
                    <label htmlFor="formGroupEmail" className="form-label">Email</label>
                    <input
                        id="formGroupEmail"
                        type="text"
                        className="form-control"
                        placeholder="Example input email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="col-12">
                <div className="mb-3">
                    <label htmlFor="formGroupPassword" className="form-label">Password</label>
                    <input
                        id="formGroupPassword"
                        type="password"
                        className="form-control"
                        placeholder="Another input password"
                        onChange={handleChange}
                        value={user.password}
                        name="password"
                    />
                </div>
            </div>
            <div className="col-12">
                <div className="col-12">
                    <button type="submit" className="btn btn-primary" 
                    onClick={handleSubmit}
                    >Sign Up</button>
                </div>
            </div>
        </form>

        <div className="col-12 d-flex justify-content-center">
            <Link className='mt-4' to={"/login"}> Ir al login </Link>
        </div>
    </div>
    )
}


export default Signup



