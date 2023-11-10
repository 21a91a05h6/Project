import mongoose from "mongoose";
const Schema=mongoose.Schema;

const customer=new Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    fadd:{
        type:String,
        required:true
    },
    tadd:{
        type:String,
        required:true
    },
    persons:{
        type:String,
        required:true
    },
    lugg:{
        type:String,
        required:true
    },
    bookdate:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    cname:{
        type:String,
        required:true
    },
    cprice:{
        type:String,
        required:true
    },
    comments:{
        type:String,
        required:true
    },
    payment:{
        type:String,
        required:true
    },
});
export default mongoose.model('carbookinginfos',customer);
                        //collection name, variable