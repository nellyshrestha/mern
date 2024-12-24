import { match } from "assert";
import mongoose, { Schema } from "mongoose";
import { type } from "os";

 const adminSchema = new mongoose.Schema({
    name: {type: String, required: true, default:"Admin" ,trim:true},
    email: {type: String, required: true, unique: true, trim:true, match: /.+\@.+\..+/},
    password: {type: String, required: true, unique: true, trim:true, minlength:8},
    role: {type: String, required: true, default: "Admin", trim:true,enum:["Admin","SuperAdmin"]},
    phone:[{type: String, required: true, unique: true, trim:true, default:null}],
    address:{type: String, required: true, trim:true, default:null}

})
const AdminModel = mongoose.model("admin",adminSchema);

export default AdminModel;