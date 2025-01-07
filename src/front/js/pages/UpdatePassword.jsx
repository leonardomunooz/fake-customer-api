import React, { useState, useContext } from 'react'
import { Context } from '../store/appContext'
import { useSearchParams } from 'react-router-dom'

export const UpdatePassword = () => {
    const { actions } = useContext(Context)
    const [newPass, setNewPass] = useState("")

    const [searchParams, _] = useSearchParams()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await actions.updatePassword(searchParams.get("token"), newPass)
        console.log(response)
    }

    return (
        <div className="container m-auto " style={{ "width": "600px" }}>
            <div className="row">
                <h1 className='col-12 text-center mt-5'> Update Password </h1>
            </div>
            <form className="row"
                // onClick={(e) => e.preventDefault()}
                onSubmit={handleSubmit}
            >
                <div className="col-12">
                    <div className="mb-3">
                        <label htmlFor="formGroupEmail" className="form-label fw-bold">New password</label>
                        <input
                            id="formGroupEmail"
                            type="text"
                            className="form-control"
                            placeholder="New Password"
                            name="password"
                            value={newPass}
                            onChange={(e) => setNewPass(e.target.value)}
                        />
                    </div>
                </div>

                <div className="col-12">
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary w-100 "
                        // onClick={handleSubmit}
                        >Recuperar</button>
                    </div>
                </div>


            </form>
        </div>
    )
}

