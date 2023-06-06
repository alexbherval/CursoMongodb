db.pessoa.insertOne({
    isActive: true,
    name: "Alex",
    lastName: "Borges de Herval",
    dataNasc: "27/06/1978",
    cor: "Branca",
    disabledPerson: true,
    deficiency: "Mobilidade reduzida na mão esquerda",
    gender: "H",
    maritalStatus: "Casado",
    work: "Analista de Suporte",
    isJob: true,
    wage: 1980.00,
    parents: {
        father: "Adalberto Moraes de Herval",
        mother: "Isabel Cristina Botelho Borges"
    },
    documents: {
        cpf: "08066273797",
        rg: "111042628",
        nis: "123333129",
        auxBrasil: "",
        bolsaFamilia: "",
        auxEmergencial: "",
        bpc: "",
        perti: "",
        segDefeso: "",
        rn: ""      
    },
    contacts: {
        email: "abherval@gmail.com",
        homePhone: "2131016463",
        cellPhone: "21982417598"
    },
    socialMedia: {
        instagran: "@abherval",
        facebook: "facebook.com.br/abherval",
        page: "www.borgesti.com.br"
    },
    

})

db.familia.insertOne({
    family: "080662Herval",
    familyKeeper: ObjectId("647e8419e841c8b917fedac1"),
    familyIncome: 5600.00,
    numberOfDependents: 3,
    dependents: [   
        ObjectId("647e88d6e841c8b917fedac2")
    ],
    end: {
        cep: "26020097",
        publicPlace: "Trav. Rosalina",
        houseNumber: 29,
        neighborhood: "Kennedy",
        county: "Nova Iguaçu",
        city: "RJ",
        complement: "",
        referencePoint: "Prox. padaria Belissima"
    }
})

db.projetoSocial.insertOne({
    projectName: "Sala Hacker",

})