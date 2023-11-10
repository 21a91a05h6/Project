import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";
import React from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import {useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const PaymentMethod = () => {
  const { id } = useParams();

  const[formdata,setFormdata]=useState({
    'fname':'',
    'lname':'',
    'email':'',
    'phone':'',
    'fadd':'',
    'tadd':'',
    'persons':'',
    'lugg':'',
    'bookdate':'',
    'time':'',
    'cname':'',
    'cprice':'',
    'comments':'',
    'payment':'',
})
let [cars,setCars]=useState({
  'imgUrl':'',
  'carName':'',
  'price':'',
  'model':'',
  'automatic':'',
  'speed':'',
  'brand':'',
  'rating':'',
  'gps':'',
  'seatType':'',
  'description':'',
})
  //let api='http://localhost:5000/getstudents';
  useEffect(()=>{
    axios.get('http://localhost:5000/getcardatabyid/'+id)
        .then((res)=>{
        //console.log(res.data.studentdata)
        setCars(res.data.cars);
    }).catch((err)=>console.log(err))
},[]);
  const submitHandler = (e) => {
        e.preventDefault();
        console.log(formdata)
        axios.post('http://localhost:5000/bookinginfo',{formdata}).then((res)=>{console.log(res.body)
        if(res.status==200){
          alert(res.data.msg)
        }
    })
      };
      // const { slug } = useParams();
      // const singleCarItem = carData.find((item) => item.carName === slug);
    
  return (
    <>
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="First Name" name="fname" onChange={(e)=>setFormdata({...formdata,fname:e.target.value})}/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name" name="lname" onChange={(e)=>setFormdata({...formdata,lname:e.target.value})}/>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Email" name="email" onChange={(e)=>setFormdata({...formdata,email:e.target.value})}/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Phone Number" name="phone" onChange={(e)=>setFormdata({...formdata,phone:e.target.value})}/>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="From Address" name="fadd" onChange={(e)=>setFormdata({...formdata,fadd:e.target.value})}/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="To Address" name="tadd" onChange={(e)=>setFormdata({...formdata,tadd:e.target.value})}/>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="persons" id="" onChange={(e)=>setFormdata({...formdata,persons:e.target.value})}>
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select name="lugg" id="" onChange={(e)=>setFormdata({...formdata,lugg:e.target.value})}>
          <option value="1 luggage">1 luggage</option>
          <option value="2 luggage">2 luggage</option>
          <option value="3 luggage">3 luggage</option>
          <option value="4 luggage">4 luggage</option>
          <option value="5+ luggage">5+ luggage</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" placeholder="Journey Date" name="bookdate"
        onChange={(e)=>setFormdata({...formdata,bookdate:e.target.value})}/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Journey Time"
          className="time__picker"
          name="time"
          onChange={(e)=>setFormdata({...formdata,time:e.target.value})}
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" value={cars.carName} name="cname" onClick={(e)=>setFormdata({...formdata,cname:e.target.value})}/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" value={cars.price} name="cprice" onClick={(e)=>setFormdata({...formdata,cprice:e.target.value})}/>
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Write"
          name="comments"
          onChange={(e)=>setFormdata({...formdata,comments:e.target.value})}
        ></textarea>
        </FormGroup>
    <h5 className="mb-4 fw-bold ">Payment Information</h5>
      <div className="payment">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment" onChange={(e)=>setFormdata({...formdata,payment:e.target.value})}/> Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment" onChange={(e)=>setFormdata({...formdata,payment:e.target.value})}/> Cheque Payment
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment" onChange={(e)=>setFormdata({...formdata,payment:e.target.value})}/> Master Card
        </label>

        <img src={masterCard} alt="" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment" onChange={(e)=>setFormdata({...formdata,payment:e.target.value})}/> Paypal
        </label>

        <img src={paypal} alt="" />
      </div>
      <div className="payment text-end mt-5">
      <input type="submit" value="Reserve Now"/>
      </div>
    </Form>
    </>
  );
};

export default PaymentMethod;
