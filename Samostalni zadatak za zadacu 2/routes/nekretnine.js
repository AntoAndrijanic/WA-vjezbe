const express = require('express');

module.exports = (nekretnine) => {
  const router = express.Router();

// Dohvati sve nekretnine
  router.get('/', (req, res) => {
    res.json(nekretnine);
  });

//Dohvati nekretninu po ID 
  router.get('/:id', (req, res) => {
    const nekretnina = nekretnine.find(n => n.id === parseInt(req.params.id));
    if (!nekretnina) return res.status(404).json({ error: 'Nekretnina nije pronađena' });
    res.json(nekretnina);
  });

// Dodaj novu nekretninu
  router.post('/', (req, res) => {
    const { naziv, opis, cijena, lokacija, brojSoba, povrsina } = req.body;

    if (!naziv || !opis || cijena == null || !lokacija || brojSoba == null || povrsina == null) {
      return res.status(400).json({ error: 'Nedostaju podaci o nekretnini' });
    }

    if (cijena < 0 || brojSoba < 0 || povrsina < 0) {
      return res.status(400).json({ error: 'Neispravni podaci o nekretnini' });
    }

    const novaNekretnina = {
      id: nekretnine.length + 1,
      naziv,
      opis,
      cijena,
      lokacija,
      brojSoba,
      povrsina
    };

    nekretnine.push(novaNekretnina);
    res.status(201).json(novaNekretnina);
  });

// Ažuriraj nekretninu potpuno
  router.put('/:id', (req, res) => {
    const nekretnina = nekretnine.find(n => n.id === parseInt(req.params.id));
    if (!nekretnina) return res.status(404).json({ error: 'Nekretnina nije pronađena' });

    const { naziv, opis, cijena, lokacija, brojSoba, povrsina } = req.body;

    if (!naziv || !opis || cijena == null || !lokacija || brojSoba == null || povrsina == null) {
      return res.status(400).json({ error: 'Nedostaju podaci o nekretnini' });
    }

    Object.assign(nekretnina, { naziv, opis, cijena, lokacija, brojSoba, povrsina });
    res.json(nekretnina);
  });

// Ažuriraj nekretninu djelomično
  router.patch('/:id', (req, res) => {
    const nekretnina = nekretnine.find(n => n.id === parseInt(req.params.id));
    if (!nekretnina) return res.status(404).json({ error: 'Nekretnina nije pronađena' });

    const { naziv, opis, cijena, lokacija, brojSoba, povrsina } = req.body;

    if (cijena < 0 || brojSoba < 0 || povrsina < 0) {
      return res.status(400).json({ error: 'Neispravni podaci o nekretnini' });
    }

    if (naziv) nekretnina.naziv = naziv;
    if (opis) nekretnina.opis = opis;
    if (cijena != null) nekretnina.cijena = cijena;
    if (lokacija) nekretnina.lokacija = lokacija;
    if (brojSoba != null) nekretnina.brojSoba = brojSoba;
    if (povrsina != null) nekretnina.povrsina = povrsina;

    res.json(nekretnina);
  });

// Obriši nekretninu
  router.delete('/:id', (req, res) => {
    const index = nekretnine.findIndex(n => n.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Nekretnina nije pronađena' });

    nekretnine.splice(index, 1);
    res.status(204).send();
  });

  return router;
};