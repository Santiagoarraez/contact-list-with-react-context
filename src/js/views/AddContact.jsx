import React, { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import Contact, { ContactContext } from "../context/Contact.jsx";
import { useNavigate } from "react-router-dom";

const initialValue ={
    name:"",
    address:"",
    phone:"",
    email:"",
}
const AddContact = () => {
    const [user,setUser]=useState(initialValue)
    const {handleAddContact}=useContext(ContactContext)
    const navigate = useNavigate();
    const SaveClickFunction =()=>{
        handleAddContact(user);
        navigate("/")
    }
    
    const handleChange =(event)=>{
        setUser({...user ,[event.target.name]:event.target.value})
    }
    return (
        <div className="vw-100 bg-dark vh-100">
            <div className="p-5 w-50 m-auto">
                <h1 className="text-center text-light">Add a new contact</h1>
                <div className="mb-3">
                    <label className="form-label text-light">Full Name</label>
                    <input type="text" name="name" value={user.name} className="form-control" placeholder="Full Name" onChange={(event)=>{handleChange(event)}}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label text-light">Email address</label>
                    <input type="email" name="email" value={user.email} className="form-control" placeholder="Enter Email" onChange={(event)=>{handleChange(event)}}></input>
                </div>
                <div className="mb-3">
                    <label  className="form-label text-light">Phone Number</label>
                    <input type="text" name="phone" value={user.phone} className="form-control" placeholder="Enter Phone Number" onChange={(event)=>{handleChange(event)}}></input>
                </div>
                <div className="mb-3">
                    <label  className="form-label text-light">Address</label>
                    <input type="text" name="address" value={user.adress} className="form-control" placeholder="Enter Address" onChange={(event)=>{handleChange(event)}}></input>
                </div>
                <button className="btn btn-success w-100 mt-3" onClick={()=>SaveClickFunction()}> Save me</button>
                <Link to={"/"}>or get back to contacts</Link>
            </div>
        </div>
    )
}

export default AddContact;