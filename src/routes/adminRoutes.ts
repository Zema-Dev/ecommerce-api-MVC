import express from "express";
import AdministratorController from "../controllers/adminController";

const AdminRouter = express.Router();

AdminRouter.post("/", AdministratorController.createAdministrator);
AdminRouter.get("/:id", AdministratorController.getAdministratorById);
AdminRouter.put("/:id", AdministratorController.updateAdministrator);
AdminRouter.delete("/:id", AdministratorController.deleteAdministrator);
AdminRouter.get("/", AdministratorController.getAllAdministrators);

export default AdminRouter;
