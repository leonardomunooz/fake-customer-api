import React  from "react";

export const Profile = () => {
    return (
        <div className="container">
                <div className="row mt-5  p-4 ">
                   <div className="m-auto col-8 ">
                        <img className="m-auto d-block" src="https://placehold.co/200" alt="" />
                   </div>
                   <h1 className=" m-auto mt-3 col-8 text-center"> Welcome</h1>
                
                    <h4 className="text-center mt-3"> 
                        <label htmlFor="apiKey"> Api Key : </label>
                        <p className="d-inline-block border  p-1" id="apiKey" >AIzaSyDaGmWKa4JsXZ-HjGw7ISLn_3nSDAds4ewQe</p>
                    </h4>
                  
                </div>
        </div>
    )
}