import React from 'react';
import './Modal.css';
import { useState } from 'react';
import axios from 'axios';

const Modal = ({ isOpen, onClose, children }) => {
  const[formdata,setFormdata]=useState({
    'name':'',
    'age':'',
    'email':'',
    'phno':'',
    'exp':'',
    'add':'',
})
  const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formdata)
        axios.post('http://localhost:5000/driverinfo',{formdata}).then((res)=>{console.log(res.body)
        if(res.status==200){
          alert(res.data.msg)
        }
    })
      };
      if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <center><h2>Fill Your Details</h2></center><br/>
        <div className="form-group" style={{textAlign:"center"}}>
          <form onSubmit={handleSubmit}>
          <center><table>
          <tr>
            <td><label>Name:</label></td>
            <td><input type='text' placeholder='Enter your name' name='name' onChange={(e)=>setFormdata({...formdata,name:e.target.value})}/></td>
          </tr><br/>
          <tr>
            <td><label>Age:</label></td>
            <td><input type='number' placeholder='Enter your age' name='age' onChange={(e)=>setFormdata({...formdata,age:e.target.value})}/></td>
           </tr><br/>
           <tr>
            <td><label>Email:</label></td>
            <td><input type='email' placeholder='Enter your email' name='email' onChange={(e)=>setFormdata({...formdata,email:e.target.value})}/></td>
            </tr><br/>
            <tr>
            <td><label>Phone Number:</label></td>
            <td><input type='tel' placeholder='Enter your phone number' name='phno' onChange={(e)=>setFormdata({...formdata,phno:e.target.value})}/></td>
            </tr><br/>
            <tr>
            <td><label>Driving Experience:</label></td>
            <td><input type='number' placeholder='in years' name='exp' onChange={(e)=>setFormdata({...formdata,exp:e.target.value})}/></td>
            </tr><br/>
            <tr>
            <td><label>Address:</label></td>
            <td><textarea rows={3} cols={23} placeholder='Enter your address' name='add' onChange={(e)=>setFormdata({...formdata,add:e.target.value})}></textarea></td>
            </tr><br/>
            <tr>
            <td></td>
            <td><input type='submit' value='submit'/></td>
            </tr><br/>
            </table></center>
          </form>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;