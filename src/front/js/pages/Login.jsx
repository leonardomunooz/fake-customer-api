// con export defaul se importa sin llaves.
// con export const Componente (export nombrado) se importa con llaves

import React, { useState, useContext } from 'react'
import { Context } from '../store/appContext';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const initialUser = {
    "email": "",
    "password": ""
}

const Login = () => {

    const [user, setUser] = useState(initialUser)
    const { actions } = useContext(Context)
    const navigate = useNavigate()

    const handleChange = ({target}) => {
        setUser({
            ...user,
            [target.name]: target.value
        })
    }
    const handleSubmit = async (e) => {
        if (user.email.trim() == "" || user.password.trim() == "" ){
            console.log("No se pueden enviar elementos vacios") 
            return 
        }else{
            console.log('Programar funcionalidad')
        }
    }

    return (

        <div className="container m-auto " style={{ "width": "600px" }}>
            <h1 className='text-center mt-5' >login</h1>
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
                            onChange={handleChange} />
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
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Log in</button>
                    </div>
                </div>


            </form>

            <div className="col-12 d-flex justify-content-between">
                <Link className='mt-4' to={"/signup"}> Registrarme</Link>
                <Link className='mt-4' to={"/resetpassword"}> Recuperar contrasenia</Link>
            </div>
        </div>

    )
}


export default Login