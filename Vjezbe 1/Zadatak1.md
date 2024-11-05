Izmijenite vaš Express poslužitelj tako da:
1. Nadogradite postojeću GET rutu / koja sad mora vratiti HTML stranicu s <h1 naslovom "Hello,
Express!".
2. Dodate još jednu GET rutu /about koja će vratiti HTML stranicu s <h1 naslovom "Ovo je stranica o
nama!".
Obje HTML stranice pohranite u direktorij /public .
Kako biste vratili podatke u obliku HTML stranice, koristite res.sendFile() metodu.
Sintaksa:

res.sendFile(__dirname + 'putanja_do_datoteke');

4. Dodajte i posljednju GET rutu /users koja će vratiti korisnike u JSON formatu. Korisnike pohranite u
polju kao objekte s atributima id , ime i prezime . Dodajte barem 3 korisnika. Kako biste vratili
korisnike u JSON formatu, koristite res.json() metodu.
Testirajte u web pregledniku i s programom curl sve tri rute.
Kada završite, pohranite promjene na GitHub repozitorij s komentarom "Samostalni zadatak za vježbu 1".
