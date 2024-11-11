const express = require('express');

module.exports = (nekretnine, ponude) => {
  const router = express.Router();

  // Varijabla za praćenje ID-a ponude
  let nextPonudaId = ponude.length ? Math.max(...ponude.map(p => p.id)) + 1 : 1;

  // Nova ponuda
  router.post('/', (req, res) => {
    const { nekretninaId, ime, prezime, ponudjenaCijena, brojTelefona } = req.body;

    // Provjera postoji li nekretnina sa ID-em
    const nekretnina = nekretnine.find(n => n.id === nekretninaId);
    if (!nekretnina) return res.status(404).json({ error: 'Nekretnina nije pronađena' });

    // Provjera jesu li uneseni svi podatci
    if (!ime || !prezime || ponudjenaCijena == null || !brojTelefona) {
        return res.status(400).json({ error: 'Nedostaju podaci o ponudi' });
    }

    const novaPonuda = {
        id: nextPonudaId++,
        nekretninaId,
        ime,
        prezime,
        ponudjenaCijena,
        brojTelefona
    };

    ponude.push(novaPonuda);
    res.status(201).json(novaPonuda);
  });

  return router;
};
