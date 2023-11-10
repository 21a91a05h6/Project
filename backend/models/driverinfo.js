import mongoose from "mongoose";
const Schema=mongoose.Schema;

const driver=new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phno:{
        type:String,
        required:true
    },
    exp:{
        type:String,
        required:true
    },
    add:{
        type:String,
        required:true
    },
});
export default mongoose.model('driverinfos',driver);
                        //collection name, variable