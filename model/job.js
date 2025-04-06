import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    jobTitle:{
        type:String,
        required:true,
    },
    experience:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    company:{
        type:String,
        required:true,
    },
    salary:{
        type:Number,
        required:true,
    },
    skillsRequired:{
        type:Array,
        required:true,
    },
    applicants:{
        type:Array,
        default:[],
    },
    postedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    postedTime:{
        type:Date,
        default:Date.now,
    },
    jobStatus:{
        type:Boolean,
        default:true,
    },
}, {timestamps:true});

const Job = mongoose.model("Job", jobSchema);

export default Job;