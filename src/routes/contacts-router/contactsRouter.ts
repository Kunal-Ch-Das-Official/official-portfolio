import { Router } from "express";
import ContactApplication from "../../controllers/contacts/postApplication";
import ContactInfo from "../../controllers/contacts/getApplication";
import RequestedApplication from "../../controllers/contacts/deleteApplication";

const contactsRouter = Router();

contactsRouter.post("/application", ContactApplication.postCtrl);

contactsRouter.get("/application/:id", ContactInfo.getCtrl);

contactsRouter.get("/application", ContactInfo.getCtrl);

contactsRouter.delete("/application/:id", RequestedApplication.deleteCtrl);

export default contactsRouter;
