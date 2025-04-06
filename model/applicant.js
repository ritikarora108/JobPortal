import mongoose from 'mongoose';
import {interviewStatus} from '../utils/constants.js';
const applicantSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    resume:{
        type:String,
        required:true,
    },
    coverLetter:{
        type:String,
        required:true,
    },
    interviewStatus:{
        type:String,
        default:interviewStatus.NOT_SCHEDULED,
    },
    interviewTime:{
        type:Date,
        default:null,
    },
}, {timestamps:true});


const Applicant = mongoose.model("Applicant", applicantSchema);

export default Applicant;
