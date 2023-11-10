import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const CarItem = () => {
  //const { imgUrl, model, carName, automatic, speed, price } = props.item;
  let [cars,setCars]=useState([])
    //let api='http://localhost:5000/getstudents';
    useEffect(()=>{
        axios.get('http://localhost:5000/getcardata').then((response)=>{
            console.log(response.data.cars)
            setCars(response.data.cars);
        });
    },[]);

  return (
    <>
      {
        cars.map((ele,index,arr)=>{
          return(
            <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={ele.imgUrl} alt="" className="w-100" />
        </div>
        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{ele.carName}</h4>
          <h6 className="rent__price text-center mt-">
          ₹{ele.price}.00 <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {ele.model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {ele.automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {ele.speed}
            </span>
          </div>

          <button className=" w-50 car__item-btn car__btn-rent">
            <Link to={`/cars/${ele._id}`}>Rent</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars/${ele._id}`}>Details</Link>
          </button>
        </div> 
        </div>
    </Col>
          )
      })
      }
    </>
  );
};

export default CarItem;
