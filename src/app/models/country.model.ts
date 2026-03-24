export interface CountryModel {
  name :{
    common : string,
    official : string,
    nativeName : {
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
  capital :string[]
}
