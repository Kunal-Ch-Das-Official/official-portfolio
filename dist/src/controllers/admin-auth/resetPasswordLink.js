"use strict";
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
const authAdminCollection_1 = __importDefault(require("../../models/authAdminCollection"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const envConfig_1 = __importDefault(require("../../config/envConfig"));
const resetPasswordLink_1 = __importDefault(require("../../utils/response-emails/reset-password/resetPasswordLink"));
class ResetForgottenPassword {
    sendLink(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { adminUserEmail } = req.body;
            const mailSender = new resetPasswordLink_1.default();
            try {
                const findRequestedUser = yield authAdminCollection_1.default.findOne({
                    adminUserEmail,
                });
                if (!findRequestedUser) {
                    return res.status(500).json({
                        issue: "Not found!",
                        details: "Requested user with this email id dose not exist.",
                    });
                }
                else {
                    const secret = findRequestedUser._id + envConfig_1.default.jwtSecretKey;
                    const token = jsonwebtoken_1.default.sign({ adminId: findRequestedUser._id }, secret, {
                        expiresIn: "5m",
                    });
                    const link = `${envConfig_1.default.clientSideUrl}/reset-password/${findRequestedUser._id}/${token}`;
                    yield mailSender.sendMail(findRequestedUser.adminUserEmail, findRequestedUser.adminUserName, link, res);
                }
            }
            catch (error) {
                return res.status(500).json({
                    issue: "Internal Server error!",
                    details: error.message,
                });
            }
        });
    }
}
exports.default = new ResetForgottenPassword();
