import axios from 'axios';
import React, { useState } from "react";

const Create = () =>{
    const [name, setName] =  useState();
    const [city, setCity] =  useState();
    const [email, setEmail] =  useState();


    function handleSubmit(e)
    {
        e.preventDefault();
        axios.post('https://63bb1119cf99234bfa51b5e1.mockapi.io/crud',{
            s_name:name,
            s_city:city,
            s_mail:email
        }).then(()=>{
            alert('Record added!');    
        })
    }
 
    return (
     <>
        <div className="container-fluid p-5 shadow">
            <h4 className="text-center text-danger">Insert Record</h4>
            <form onSubmit={handleSubmit}>
                <div className="row mt-4">
                    <input type="text" placeholder="Enter your fullname" className="form-control" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="row mt-2">
                    <input type="text" placeholder="Enter your city" className="form-control" onChange={(e)=>setCity(e.target.value)}/>
                </div>
                <div className="row mt-2">
                    <input type="text" placeholder="Enter your email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="row mt-3">
                    <input type="submit" className="btn btn-danger form-control" value="INSERT"/>
                </div>
            </form>
            <div className='row my-2'>
             <input type='submit' className='btn btn-success my-2' value='VIEW RECORDS' />
            </div>
        </div>
       </>
    )
}

export default Create;