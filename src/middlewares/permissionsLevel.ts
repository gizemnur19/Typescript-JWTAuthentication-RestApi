import { NextFunction, Request, Response } from "express";
import Role from "../models/Role";
import User from "../models/User";

export const isAdmin = async (req: Request,res: Response,next: NextFunction)=>{
    try {
        const user = await User.findById(req.userId)
        console.log(user);
        const arrRoles = await Role.find({_id: {$in: user?.roles}})
        console.log(arrRoles);
        for (let i = 0; i < arrRoles.length; i++) {
            if (arrRoles[i].name==='ADMIN') {
                next()
                return
            }      
        }
        return res.status(403).json({
            msg: 'Require ADMIN Role!'
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
}