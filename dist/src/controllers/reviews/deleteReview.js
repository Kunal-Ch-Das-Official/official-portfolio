"use strict";
/**
 * Project Name: Kunal Chandra Das Portfolio backend
 * File Name:    Delete Reviews
 * Author      : Kunal Chandra Das
 * Date        : 30.10.2024
 * Version     : 2.0.0
 * Details     : This controller handles the deletion of reviews posted by
 *               clients. It allows authorized users (e.g., admins or the
 *               review owner) to delete reviews from the system.
 *
 *               The controller first checks if the user making the request
 *               is authorized to delete the review (either the review owner
 *               or an admin). If unauthorized, a `403 Forbidden` response
 *               is returned.
 *
 *               It then attempts to find the review by its unique ID. If
 *               not found, a `404 Not Found` response is returned. If the
 *               review exists and the user is authorized, the review is deleted
 *               from the system, and a `200 OK` response is returned confirming
 *               the deletion.
 *
 *               If there is an error during the deletion process, a `500 Internal
 *               Server Error` response is returned.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reviewCollection_1 = __importDefault(require("../../models/reviewCollection"));
class ExistingReview {
    deleteCtrl(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const getRequestedData = yield reviewCollection_1.default.findById(id);
                if (!getRequestedData) {
                    return res.status(404).json({
                        issue: "Not found!",
                        details: "The requested data was not found.",
                    });
                }
                else {
                    const deleteInfo = yield reviewCollection_1.default.findByIdAndDelete(id);
                    if (!deleteInfo) {
                        return res.status(501).json({
                            issue: "Not implemented!",
                            details: "Requested data not been deleted, please try again later.",
                        });
                    }
                    else {
                        return res.status(200).json({
                            issue: "Successfully removed!",
                            details: "Requested data has been successfully removed from our records",
                        });
                    }
                }
            }
            catch (error) {
                return res.status(500).json({
                    issue: "Internal server error!",
                    details: error.message,
                });
            }
        });
    }
}
exports.default = new ExistingReview();
