import express from "express"
import { deleteEmployee, getEmployee, login,  Logout,  register } from "../controller/employeeController.js";
import { isadminAuthenticated, isemployeeAuthenticated } from "../middleware/auth.js";


const router = express.Router();

router.post("/register", isadminAuthenticated ,  register);
router.post("/login", login);
router.get("/me" , isemployeeAuthenticated,  getEmployee);
router.post("/Logout" , isemployeeAuthenticated ,   Logout);
router.delete("/employee/:id" , isadminAuthenticated , deleteEmployee);



export default router 