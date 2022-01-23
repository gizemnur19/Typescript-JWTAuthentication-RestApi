import { NextFunction, Request, Response } from "express";
import Role from "../models/Role";
import User from "../models/User";


// users which has admin role can see all db records with getUsers api
export const getUsers = async (req: Request, res: Response) => {
  const users = await User.find().populate("roles");
  return res.json(users);
};



