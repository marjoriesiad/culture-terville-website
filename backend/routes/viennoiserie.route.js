import express from 'express';
import { getAllViennoiserie } from '../controllers/viennoiserie.controller.js';


const router = express.Router();

router.get('/viennoiserie', getAllViennoiserie);


export default router;