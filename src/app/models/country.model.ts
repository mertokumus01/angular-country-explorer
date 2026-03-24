export interface CountryModel {
  name :{
    comon : string,
    official : string,
    naticeName : {
      tur:{
        official : string,
        common : string
      }
    }
  },
  currencies : {
    [moneyName:string] : {
      name :string,
      symbol : string
    }
  },
  capital :[]
}
