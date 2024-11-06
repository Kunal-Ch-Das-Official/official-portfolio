"use strict";
/**
 * Project Name: Kunal Chandra Das Portfolio backend
 * File Name:    Contact router
 * Author      : Kunal Chandra Das
 * Date        : 03.11.2024
 * Version     : 2.0.0
 * Details     : This file contains the routes for handling contact inquiries
 *               submitted by users. The router defines the HTTP endpoints for
 *               submitting, viewing, and responding to contact inquiries.
 *
 *               1. **POST /contact/application**: Allows users to submit a new
 *                  contact inquiry with their details and message.
 *
 *               2. **GET /contact/application**: Retrieves all submitted contact
 *                  inquiries, accessible to authenticated admins or support staff.
 *
 *               3. **GET /contact/application/:id**: Retrieves a specific contact
 *                  inquiry by its unique ID, allowing the authenticated user or
 *                  admin to view the details.
 *
 *               4. **POST /contact/application/:id/response**: Allows admins to
 *                  respond to a specific contact inquiry by sending an email response.
 *
 *               5. **DELETE /contact/application/:id**: Deletes a specific contact
 *                  inquiry by its ID, accessible to authenticated admins.
 *
 *               The router ensures proper handling of contact data, with validation
 *               and authorization checks where necessary.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postApplication_1 = __importDefault(require("../../controllers/contacts/postApplication"));
const getApplication_1 = __importDefault(require("../../controllers/contacts/getApplication"));
const deleteApplication_1 = __importDefault(require("../../controllers/contacts/deleteApplication"));
const sendContactResponse_1 = __importDefault(require("../../controllers/contacts/sendContactResponse"));
const authValidator_1 = __importDefault(require("../../middlewares/auth-validator/authValidator"));
const contactsRouter = (0, express_1.Router)();
contactsRouter.post("/application", postApplication_1.default.postCtrl);
contactsRouter.post("/response/:id", authValidator_1.default.validate, sendContactResponse_1.default.sendEmail);
contactsRouter.get("/application/:id", authValidator_1.default.validate, getApplication_1.default.getCtrl);
contactsRouter.get("/application", authValidator_1.default.validate, getApplication_1.default.getCtrl);
contactsRouter.delete("/application/:id", authValidator_1.default.validate, deleteApplication_1.default.deleteCtrl);
exports.default = contactsRouter;
