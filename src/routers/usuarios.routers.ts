// imports
import { Router } from "express";
import { createUsuario, getUsuarios, getUsuario, deleteUser, updateUser } from "../controllers/usuarios.controller";

// const
const router = Router();

// ---------------
router.route("/")
  .get(getUsuarios)
  .post(createUsuario);

  // import to show the specific user 
router.route("/:id_usuario")
  .get(getUsuario)
  .delete(deleteUser)
  .put(updateUser);

export default router;
