"use strict";
/**
 * Contact Us Database Model
 * Project: Kunal Chandra Das Portfolio
 * Author: Kunal Chandra Das
 * Date: 29/10/2024
 * Version: 2.0.0
 *
 * Description:
 * This model defines the schema and structure for the contact us document
 * in the Kunal Chandra Das Portfolio database. It is responsible for
 * managing records of user inquiries, including fields for name, email,
 * message, and submission date.
 *
 * Usage:
 * Use this model to interact with contact form data in the database.
 * It supports operations like creating and reading inquiries, allowing
 * for effective communication management with users who reach out for
 * support, feedback, or inquiries.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const validatePhoneNumber = function (phone) {
    return /^\d{10}$/.test(phone); // Ensures the phone number is exactly 10 digits
};
const ContactSchema = new mongoose_1.Schema({
    userName: {
        type: String,
        length: 50,
        required: true,
    },
    contactEmail: {
        type: String,
        length: 50,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
        validate: {
            validator: validatePhoneNumber,
            message: "Phone number must be exactly 10 digits.",
        },
    },
    message: {
        type: String,
        length: 1500,
        required: true,
    },
    status: {
        type: Boolean,
        default: 1,
    },
}, { timestamps: true });
const contactModel = mongoose_1.default.model("Contact-application", ContactSchema);
exports.default = contactModel;
