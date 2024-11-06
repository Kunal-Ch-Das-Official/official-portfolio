"use strict";
/**
 * Project Name: Kunal Chandra Das Portfolio backend
 * File Name:    Get all reviews
 * Author      : Kunal Chandra Das
 * Date        : 30.10.2024
 * Version     : 2.0.0
 * Details     : This controller handles fetching reviews posted by clients.
 **/
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
class ReviewInfo {
    getCtrl(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const findAllReviews = yield reviewCollection_1.default.find();
                if (!findAllReviews) {
                    return res.status(404).json({
                        issue: "Not Found!",
                        details: "Requested resources are not found.",
                    });
                }
                else {
                    return res.status(200).json(findAllReviews);
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
exports.default = new ReviewInfo();
