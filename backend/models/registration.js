import mongoose from "mongoose";
const Schema=mongoose.Schema;

const register=new Schema({
    firname:{
        type:String,
        required:true
    },
    lasname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    DOB:{
        type:String,
        required:true
    },
    uname:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    },
});
export default mongoose.model('registrations',register);
                        //collection name, variable