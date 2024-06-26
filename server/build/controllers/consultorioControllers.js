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
exports.conController = void 0;
const database_1 = __importDefault(require("../database"));
class ConController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const act = yield database_1.default.query('SELECT * FROM Consultorios');
            res.json(act);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Consultorios set ?', [req.body]);
            res.json({ message: 'CONSULTORIO GUARDADO' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idConsultorios } = req.params;
            yield database_1.default.query('UPDATE Consultorios set ?  WHERE idConsultorios = ?', [req.body, idConsultorios]);
            res.json({ message: 'El Consultorio se actualizo' });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const consultorio = yield database_1.default.query('SELECT * FROM Consultorios WHERE idConsultorios = ?', [id]);
            console.log(consultorio.length);
            if (consultorio.length > 0) {
                return res.json(consultorio[0]);
            }
            res.status(404).json({ text: "EL CONSULTORIO NO EXISTE" });
        });
    }
}
exports.conController = new ConController();
