const express = require('express');
const router = express.Router();
const pC = require('../controllers/participanteController');

router.get("/participantes", pC.getParticipantes);
router.get("/participantes/:id", pC.getOnePar);
router.post("/participantes", pC.createPar);
router.delete("/participantes/:id", pC.deletePar);
router.put("/participantes/:id", pC.updatePar);

module.exports = router;
