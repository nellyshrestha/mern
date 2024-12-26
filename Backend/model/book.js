import mongoose from "mongoose";
import { type } from "os";

const bookSchema =new mongoose.Schema({
    bookname:{type:String,required:true, unique:true,trim:true},
    author:{type:String,required:true, trim:true},
    genre:{type:String,required:true, enum:["Si-Fi","Adventure","Romantic","biography"],trim:true},
    desription:{type:String,required:true,trim:true},
    publishdate:{type:String,required:true}

},
{timestamps:true});
const BookModel= mongoose.model("book",bookSchema);
export default BookModel;