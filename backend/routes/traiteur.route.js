import express from 'express';
import { getAllTraiteur } from '../controllers/traiteur.controller.js';
import {getAllViennoiserie} from '../controllers/viennoiserie.controller.js';

const router = express.Router();

router.get('/traiteur', getAllTraiteur);
router.get("/viennoiserie", getAllViennoiserie);

export default router;