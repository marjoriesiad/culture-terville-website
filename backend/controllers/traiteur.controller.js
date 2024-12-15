import Traiteur from '../models/traiteur.model.js';

export const getAllTraiteur = async (req, res) => {
    Traiteur.find()
    .then(traiteur => res.status(200).json(traiteur))
    .catch(err => res.status(400).json('Error: ' + err));
}