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
const database_1 = __importDefault(require("../database"));
class CitasController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const citas = yield database_1.default.query('SELECT * FROM cita INNER JOIN usuarios where idUsuarioC=idUsuario');
            resp.json(citas);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const citas = yield database_1.default.query('SELECT * FROM cita,usuarios WHERE id=? and correo', [id]);
            if (citas.length > 0) {
                return res.json(citas[0]);
            }
            res.status(404).json({ text: 'La cita no existe, lo sentimos' });
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO cita set ?', [req.body]);
            // console.log(req.body);
            resp.json({ message: 'CITA GUARDADA CON EXITO' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            database_1.default.query('DELETE FROM cita WHERE id=?', [id]);
            res.json({ message: 'LA CITA HA SIDO ELIMINADA' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE cita set ? WHERE id=?', [req.body, id]);
            res.json({ message: 'EL JUEGO HA SIDO ACTUALIZADO' });
        });
    }
}
const citasControllers = new CitasController();
exports.default = citasControllers;
