import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    
  },
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  gender: {
    type: String,
    default:"",
  },
  dob: {
    type: Date,
    default:"",
  },
  email: {
      type: String,
      
  },
  feesPaid: {
    type: Number,
    default:"",
  },
  class: {
    
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Class'
  },
  role: {
    type: String,
    default: "Student"
},
},{ timestamps: true });

const Student = mongoose.model('Student', studentSchema);

export default Student;

