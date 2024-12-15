import Viennoiserie from '../models/viennoiserie.model.js';

export const getAllViennoiserie = async (req, res) => {
    Viennoiserie.find()
    .then(viennoiserie => res.status(200).json(viennoiserie))
    .catch(err => res.status(400).json('Error: ' + err));
}