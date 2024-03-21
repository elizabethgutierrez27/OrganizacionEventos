"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const citasControllers_1 = __importDefault(require("../controllers/citasControllers"));
class CitasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', citasControllers_1.default.list);
        this.router.get('/:id', citasControllers_1.default.getOne);
        this.router.post('/', citasControllers_1.default.create);
        this.router.delete('/:id', citasControllers_1.default.delete);
        this.router.put('/:id', citasControllers_1.default.update);
    }
}
const citasRoutes = new CitasRoutes();
exports.default = citasRoutes.router;
