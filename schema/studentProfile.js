 
const mongoose = require("mongoose");

const StudentProfile = new mongoose.Schema({
    Enrolment_No: String,
    Course: String,
    Candidate_Name: String,
    DOB: String,
    Mother_Name: String,
    Father_Name: String,
    Examination_Year: String,
    Examination_Month_Block: String,
    image: String,
    Result: String,
    SubjectMark: Array
}, { collection: "Student_Details" });
module.exports = StudentProfiles= mongoose.model("Student_Details", StudentProfile);