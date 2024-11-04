import { Router } from "express";
import ContactApplication from "../../controllers/contacts/postApplication";
import ContactInfo from "../../controllers/contacts/getApplication";
import RequestedApplication from "../../controllers/contacts/deleteApplication";
import SendContactRes from "../../controllers/contacts/sendContactResponse";
import authValidator from "../../middlewares/auth-validator/authValidator";

const contactsRouter = Router();

contactsRouter.post("/application", ContactApplication.postCtrl);

contactsRouter.post(
  "/response/:id",
  authValidator.validate,
  SendContactRes.sendEmail
);

contactsRouter.get(
  "/application/:id",
  authValidator.validate,
  ContactInfo.getCtrl
);

contactsRouter.get("/application", authValidator.validate, ContactInfo.getCtrl);

contactsRouter.delete(
  "/application/:id",
  authValidator.validate,
  RequestedApplication.deleteCtrl
);

export default contactsRouter;
