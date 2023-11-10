//console.log("App running");
import express from 'express';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import multer from 'multer';
import bodyParser from 'body-parser'; //npm i body-parser
import cors from 'cors';  //npm i cors
import customer from './models/customer.js';
import driver from './models/driverinfo.js';
import contact from './models/contact.js';
import cardata from './models/cardata.js';
import registration from './models/registration.js';
import authenticate from './models/auth.js';

//const express=require('express');
// const app=express();
// mongoose.connect('mongodb+srv://21a91a05h6:tCzM401u6J8ISh4K@cluster0.dokd585.mongodb.net/Work?retryWrites=true&w=majority')
// .then(() => app.listen(5000))
// .then(() =>console.log("Connected to Database & Listining to localhost 5000"))
// .catch((err) => console.log(err));
//console.log("testing!!"); 
//const express=require('express)
const app=express();

app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://21a91a05h6:QqEtic9RcXTGtgOL@cluster0.dokd585.mongodb.net/Work?retryWrites=true&w=majority') 
.then(() => app.listen(5000))
.then(() =>
console.log("Connected to Database & Listining to localhost 5000")
)
.catch((err) => console.log(err));
//http://localhost:2222/adddata

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'public/images')
    },
    filename: function (req, file, callback) {
      // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      callback(null, Date.now()+"_"+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

app.post('/bookinginfo',(req,res,next)=>{
    //performs the action
    console.log(req.body.formdata) //form data from the frontend
    const {fname,lname,email,phone,fadd,tadd,persons,lugg,bookdate,time,cname,cprice,comments,payment}=req.body.formdata;
    const cust=new customer({
        fname,
        lname,
        email,
        phone,
        fadd,
        tadd,
        persons,
        lugg,
        bookdate,
        time,
        cname,
        cprice,
        comments,
        payment
    })
    cust.save()
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'polisettisridivyaprabha@gmail.com',
        pass: 'pqbb diuo tcrk rvxl'
      }
    });
    
    var mailOptions = {
      from: 'polisettisridivyaprabha@gmail.com',
      to: email,
      subject: fname+' '+lname+' your '+cname+' reservation is confirmed!',
      text: 'Dear '+fname+','+'\n\nWe are pleased to inform you that your car reservation for a '+cname+' on '+bookdate+' at '+fadd+' has been confirmed.\n\nWe will contact you back with the details of your driver.\n\nWe are pleased to have you aboard.\nThank you for choosing Rent Car Service!!!.\n\nSincerely,\nRent Car Service.',
      // attachments: [
      //     {
      //     filename: req.profile+".jpg",
      //     contentType:'image/jpg',
      //     path:'public/images/'+profile
      //     }
      //     ]
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    return res.send({"carbookinginfos":cust,msg:"Reserved Successfully"})
    // res.send({"msg":"success"})
})

app.get('/getcustomerinfo',async(req,res,next)=>{
    let customers;
    try{
        customers=await customer.find();//db.collectionname.find()
    }catch(err){
        console.log(err);
    }
    if(!customers){
        return res.status(404).json({message:"No information Found."})
    }
    return res.status(200).json({customers})
})

app.post('/driverinfo',(req,res,next)=>{
    //performs the action
    console.log(req.body.formdata) //form data from the frontend
    const {name,age,email,phno,exp,add}=req.body.formdata;
    const drive=new driver({
        name,
        age,
        email,
        phno,
        exp,
        add,
    })
    drive.save()
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'polisettisridivyaprabha@gmail.com',
          pass: 'pqbb diuo tcrk rvxl'
        }
      });
      
      var mailOptions = {
        from: 'polisettisridivyaprabha@gmail.com',
        to: email,
        subject: 'Thank you for your application for the driver position at Rent Car Service',
        text: 'Dear '+name+','+'\n\nI am writing to confirm that we have received your application for the Driver position at Rent Car Service.\n\nOur hiring team is currently reviewing all applications, and we will be in touch with qualified candidates to schedule interviews in the coming weeks. In the meantime, please do not hesitate to contact us if you have any questions or need to update your information.\n\nThank you again for your interest in Rent Car Service. We look forward to learning more about you.\n\nSincerely,\nRent Car Service',
        // attachments: [
        //     {
        //     filename: req.profile+".jpg",
        //     contentType:'image/jpg',
        //     path:'public/images/'+profile
        //     }
        //     ]
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    return res.send({"driverinfos":drive,msg:"Submitted Successfully. A confirmation mail will be sent to your respective email, please do check it!"})
    // res.send({"msg":"success"})
})

app.post('/contactinfo',(req,res,next)=>{
    //performs the action
    console.log(req.body.formdata) //form data from the frontend
    const {name,email,message}=req.body.formdata;
    const cont=new contact({
        name,
        email,
        message,
    })
    cont.save()
    return res.send({"contactinfos":cont,msg:"Message sent Successfully"})
    // res.send({"msg":"success"})
})

app.post('/addcardata',(req,res,next)=>{
  //performs the action
  console.log(req.body.formdata) //form data from the frontend
  const {imgUrl,carName,price,model,automatic,speed,brand,rating,gps,seatType,description}=req.body.formdata;
  const car=new cardata({
      imgUrl,
      carName,
      price,
      model,
      automatic,
      speed,
      brand,
      rating,
      gps,
      seatType,
      description
  })
  car.save()
  return res.send({"cardatainfo":car,msg:"Sent Successfully"})
  // res.send({"msg":"success"})
})

app.get('/getcardatabyid/:id', async(req,res,next)=>{
  const _id=req.params.id
  //console.log(_id);
  let cars;
  try{
      cars=await cardata.findById(_id);//db.collectionname.find()
  }catch(err){
      console.log(err);
  }
  if(!cars){
      return res.status(404).json({message:"No cars Found."})
  }
  return res.status(200).json({cars})

})

app.get('/getcardata',async(req,res,next)=>{
  let cars;
  try{
      cars=await cardata.find();//db.collectionname.find()
  }catch(err){
      console.log(err);
  }
  if(!cars){
      return res.status(404).json({message:"No cars Found."})
  }
  return res.status(200).json({cars})
})

app.post('/registrations',(req,res,next)=>{
  //performs the action
  //console.log(req.body.formdata) //form data from the frontend
  const {firname,lasname,email,DOB,uname,pass}=req.body.formdata;
  const regi=new registration({
      firname,
      lasname,
      email,
      DOB,
      uname,
      pass,
  })
  regi.save()
  return res.send({"registrations":regi,msg:"Registered Successfully"})
  // res.send({"msg":"success"})
})

app.post('/auth',async(req,res,next)=>{
  //performs the action
    // console.log(req.body.formdata) //form data from the frontend
    // const {uname,pass}=req.body.formdata;
    // const authenticate=new auth({
    //     uname,
    //     pass
    // })
    // authenticate.save()
  const { uname, pass } = req.body.formdata;

const auth = await authenticate.findOne({ uname, pass });
  if (auth) {
      res.json({ msg: 'Login successful' });
  } else {
      res.status(201).json({ msg: 'Login failed' });
  }
  // return res.send({"logins":authenticate,msg:"success"})
    //res.send({"msg":"success"})
})

// app.use('/testing',(req,res,next)=>{
//     res.send("FSD Drive ready testing!!");
// })
//app.listen(2222)
 
//backend:/api
//http://localhost:2222/api
// app.use('/api',(req,res,next)=>{
//     res.send("Hello World!");
// })

// app.use('/testing',(req,res,next)=>{
//     res.send("testing");
// })

//app.listen(5000);

//backend:/api
//http://localhost:2222/api- it is a local api works only on this PC.