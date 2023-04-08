CREATE DATABASE contact;

use contact;
db.createCollection("liste de contacts");
db.contactlist.insertMany([
   { Nom: "Ben Lahmer", Prénom: "Fares", Email: "fares@gmail.com", âge: 26 },
   { Nom: "Kefi", Prénom: "Seif", Email: "kefi@gmail.com", âge: 15 },
   { Nom: "Fatnassi", Prénom: "Sarra", Email: "sarra.f@gmail.com", âge: 40 },
   { Nom: "Ben Yahia", Prénom: "Rym", âge: 4 },
   { Nom: "Chérif", Prénom: "Sami", âge: 3 }
]);
db.contactlist.findOne({_id: ""})
db.contactlist.find({âge: {$gt: 18}})
db.contactlist.find({Nom: /ah/i, âge: {$gt: 18}})
db.contactlist.updateOne({Nom: "Kefi", Prénom: "Seif"}, {$set: {Prénom: "Anis"}})
db.contactlist.deleteMany({âge: {$lt: 5}})
db.contactlist.find()