const express = require('express');
const app = express();

app.use(express.json());

let nekretnine = [
    {
      id: 1,
      naziv: "Stan",
      opis: "Stan u centru grada, novogradnja.",
      cijena: 200000,
      lokacija: "Slavonski Brod",
      brojSoba: 5,
      povrsina: 130
    },
    {
      id: 2,
      naziv: "Kuca",
      opis: "Kuca u naselju Livada.",
      cijena: 200000,
      lokacija: "Slavonski Brod",
      brojSoba: 6,
      povrsina: 150
    },
    {
      id: 3,
      naziv: "Vikendica",
      opis: "Mirna kuća u prirodi sa pogledom na grad.",
      cijena: 90000,
      lokacija: "Slavonski Brod",
      brojSoba: 4,
      povrsina: 120
    }
  ];

  let ponude = [
    {
      id: 1,
      nekretninaId: 1,
      ime: "Anto",
      prezime: "Andrijanić",
      ponudjenaCijena: 180000,
      brojTelefona: "0911234567"
    },
    {
      id: 2,
      nekretninaId: 2,
      ime: "Filip",
      prezime: "Marić",
      ponudjenaCijena: 185000,
      brojTelefona: "0927654321"
    },
    {
      id: 3,
      nekretninaId: 3,
      ime: "Dajana",
      prezime: "Mandić",
      ponudjenaCijena: 85000,
      brojTelefona: "0951122334"
    }
  ];

const ponudeRouter = require('./routes/ponude')(nekretnine, ponude);
app.use('/ponude', ponudeRouter);

const nekretnineRouter = require('./routes/nekretnine')(nekretnine);
app.use('/nekretnine', nekretnineRouter);


const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

