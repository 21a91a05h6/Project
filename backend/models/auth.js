import mongoose from "mongoose";
const Schema=mongoose.Schema;

const authenticate=new Schema({
    uname:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    },
});
export default mongoose.model('logins',authenticate);
                        //collection name, variable