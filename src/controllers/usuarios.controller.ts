import { Request, Response } from "express";
import { connection } from "../dataBase";
import { interfaceUser } from "../interface/usuario.interface";

// show all database users
export const getUsuarios = async (req: Request, res: Response): Promise<Response> => {
  const connect = await connection();
  const mysqlUser = await connect.query("call verUsuarios"); //call `verUsuarios` => is a database stored procedure
  return res.json(mysqlUser[0]);
};

//------------------------------------
// show a specific user
export const getUsuario = async (req: Request, res: Response) => {
  const id_usuario = req.params.id_usuario;
  const connect = await connection();
  const mysqlUser = await connect.query(" call verUsuarioId (?)", [id_usuario]);
  res.json(mysqlUser[0]);
};

//------------------------------------
// add user to database
export const createUsuario = async (req: Request, res: Response) => {
  const newUser: interfaceUser = req.body;
  console.log(newUser); // we show the inserted data in the console

  const connect = await connection();
  await connect.query("call insertUsuarios(?,?,?,?,?,?,?)", [
    newUser.name,
    newUser.middle_name,
    newUser.last_name,
    newUser.phone,
    newUser.email,
    newUser.password,
    newUser.user_name
  ]);
  return res.json({
    mesagge: 'user added' + newUser   
  });
}

//------------------------------------
// delete user to database
export const deleteUser = async (req: Request, res: Response) => {
  const id_usuario = req.params.id_usuario;
  const connect = await connection();
  await connect.query("call deleteUsuario(?)", [id_usuario]);
  return res.json({
    mesagge: 'user delete'   
  });
}

//------------------------------------
// update user to database
export const updateUser = async (req: Request, res: Response) => {
  const id_usuario = req.params.id_usuario;
  const { name, middle_name, last_name, phone, email, password, user_name } = req.body;
  const connect = await connection();
  await connect.query("call updateUsuarios(?, ?, ?, ?, ?, ?, ?, ?)", [
    id_usuario,
    name,
    middle_name,
    last_name,
    phone,
    email,
    password,
    user_name
  ]);
  return res.json({
    message: 'User updated'
  });
};
