const faker = {
  sites: [
    {
      IDsite: 0,
      nom: "siège social",
      ville: "lille",
      adresse: "10 rue de lille",
      codePostal: "59000",
      marge: "0.2"
    },
    {
      IDsite: 1,
      nom: "site de production",
      ville: "dax",
      adresse: "10 rue de dax",
      codePostal: "40100",
      marge: "0.17"
    },
    {
      IDsite: 2,
      nom: "site de production",
      ville: "annecy",
      adresse: "10 rue de annecy",
      codePostal: "74000",
      marge: "0.2"
    },
    {
      IDsite: 3,
      nom: "magasin",
      ville: "brest",
      adresse: "10 rue de brest",
      codePostal: "29000",
      marge: "0.2"
    },
    {
      IDsite: 4,
      nom: "magasin",
      ville: "macon",
      adresse: "10 rue de macon",
      codePostal: "71000",
      marge: "0.2"
    }
  ],
  users : [
    {
      IDuser : 0,
      prenom : 'prenom1',
      nom : 'nom1',
      tel : '+336598784512',
      mail : 'mail@mail.com',
      password : '7fqofé"é&',
      statut : 0,
      ville : 'lille',
      codePostal : '59000',
      pays : 'france',
      creation: '1537104024',
      modifiction: '1537104024',
      actif : false,
      IDUser_Utilisaeur : 0,
      IDsite : 1,
      IDtva : 1
    },
    {
      IDuser: 1,
      prenom: 'prenom2',
      nom: 'nom2',
      tel: '+336598784512',
      mail: 'mail@mail.com',
      password: '7fqofé"é&',
      statut: 0,
      ville: 'lille',
      codePostal: '59000',
      pays: 'france',
      creation: '1537104024',
      modifiction: '1537104024',
      actif: false,
      IDUser_Utilisaeur: 0,
      IDsite: 1,
      IDtva: 1
    },
    {
      IDuser: 2,
      prenom: 'prenom3',
      nom: 'nom3',
      tel: '+336598784512',
      mail: 'mail@mail.com',
      password: '7fqofé"é&',
      statut: 1,
      ville: 'lille',
      codePostal: '59000',
      pays: 'france',
      creation: '1537104024',
      modifiction: '1537104024',
      actif: false,
      IDUser_Utilisaeur: 0,
      IDsite: 1,
      IDtva: 1
    }
  ]
};

module.exports = faker;