import mongoose from "mongoose";
const Schema=mongoose.Schema;

const cardata=new Schema({
    imgUrl:{
        type:String,
        required:true
    },
    carName:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    automatic:{
        type:String,
        required:true
    },
    speed:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    },
    gps:{
        type:String,
        required:true
    },
    seatType:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
});
export default mongoose.model('cardatainfo',cardata);
                        //collection name, variable