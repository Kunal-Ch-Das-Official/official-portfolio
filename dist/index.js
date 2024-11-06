"use strict";
/**
 * Server Startup Script
 * Project: Kunal Chandra Das Portfolio
 * Author: Kunal Chandra Das
 * Date: 29/10/2024
 * Version: 2.0.0
 *
 * Description:
 * This script initializes and starts the Express server for the Kunal Chandra Das Portfolio
 * application. It configures the server to listen on a specified port and establishes a connection
 * to the database before starting the server.
 *
 * Functionality:
 * - Imports configuration settings from the environment configuration file.
 * - Establishes a connection to the database using a dedicated connection function.
 * - Sets up the server to listen on the specified port (defaulting to 5000 if not provided).
 * - Logs a message to the console indicating the server is running and the port it's listening on.
 *
 * Usage:
 * Run this script to start the backend server for the portfolio application. It ensures that
 * the database connection is established before the server begins accepting requests.
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
const envConfig_1 = __importDefault(require("./src/config/envConfig"));
const databaseConnection_1 = __importDefault(require("./src/config/databaseConnection"));
const server_1 = __importDefault(require("./src/server"));
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const serverConf = {
            port: envConfig_1.default.port,
        };
        yield (0, databaseConnection_1.default)();
        server_1.default.listen(serverConf.port || 5000, () => {
            console.log(`server is running on port: ${serverConf.port}`);
        });
    });
}
startServer();
