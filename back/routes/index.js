import express from 'express';

import connection from './config';

const router = express.Router();

/* GET data */
router.get('/', (req, res) => {
  connection.query('SELECT * FROM tips', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des tips');
    } else {
      res.json(results);
    }
  });
});

/* POST data */
router.post('/', (req, res) => {
  const newTips = req.body;
  connection.query('INSERT INTO tips SET ?', newTips, (err) => {
    if (err) {
      res.status(500).send("Erreur lors de l'ajout d'un tips");
    } else {
      res.sendStatus(200);
    }
  });
});


export default router;
