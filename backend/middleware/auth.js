import jwt from "jsonwebtoken"
import { Employee } from "../models/employeeSchema.js";
import { Admin } from "../models/adminSchema.js";

export const isemployeeAuthenticated = async(req,res,next)=>{
    const {employeeToken} = req.cookies;
    if(!employeeToken){
        return next(res.status(401).json({
            success:false,
            message: "employee not authenticated "
        }))
    }

    const decoded = await  jwt.verify(employeeToken , process.env.JWT_SECRET );
    req.employee = await  Employee.findById(decoded.id);

    next();

}


export const isadminAuthenticated = async(req,res,next)=>{
    const {adminToken} = req.cookies;
    if(!adminToken){
        return next(res.status(401).json({
            success:false,
            message: "admin not authenticated"
        }))
    }

    const decoded = await jwt.verify(adminToken , process.env.JWT_SECRET2);
    req.admin = await Admin.findById(decoded.id);

    next();
}