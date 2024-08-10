// aqui se definiran los tipos de las variabes o los modelos a seguir

interface medication{
    id:number,
    medicationName:string,
    quantity:number,
    expirationDate:Date,
    price:number
}

interface users{
    id:number,
    name:string,
    lastName:string,
    email:string,
    password:string,
    position:string
}

interface paciente extends users{
    age:number,
    frecuency:number
    endDateMedication:Date
}




