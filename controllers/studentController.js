 import Student from "../models/studentModels.js";
//Get
 export const getStudents = async (req, res) => {
        try {
            const students = await Student.find();
            res.status(200).json({ success: true,count : students.length, data: students });
        }
        catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
 }

 //post
 export const createStudent = async (req, res) => {
    try{
        const student = await Student.create(req.body);
        res.status(201).json({ success: true, data: student });
    }
    catch (error) {
        res.status(400).json({success:false,massage:error.message});
    }
 }

 //Put
 export const updateStudent = async (req, res) => {
    try{
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
             new: true ,
             runValidators: true
            });
        
        if(!student){
            return res.status(404).json({success:false , message:"Student not found"});
        }
        res.status(200).json({success:true , data:student});
    }
    catch(error){
        res.status(404).json({success:false , message:error.message});
    }
 }

 //delete
 export const deleteStudent = async (req, res) => {
    try{
        const student = await Student.findByIdAndDelete(req.params.id);
        if(!student){
            return res.status(404).json({success:false , message:"Student not found"});
        }   
        res.status(200).json({success:true , message:"Student deleted successfully"});

    }
    catch(error){
        res.status(404).json({success:false , message:error.message});
    }
 }