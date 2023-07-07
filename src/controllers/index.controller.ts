import { Request, Response } from "express";

export const indexControler = (req: Request, res: Response): Response => {
  return res.json("Hello and welcome to my API");
};
