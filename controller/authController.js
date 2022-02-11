import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";

import {BadRequestError} from '../error/index.js'

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("please provide all values");
  }

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError('Email already in use')
  }
  const user = await User.create({ name, password, email });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  try {
    res.end("Login");
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    res.send("Update User");
  } catch (error) {
    console.log(error);
  }
};

export { register, login, updateUser };
