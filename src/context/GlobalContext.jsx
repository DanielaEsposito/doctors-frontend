import { createContext, useContext, useState } from "react";

//creo il context
const GlobalContext = createContext();
// esporto il provider
export const GlobalContextProvider = ({ children }) => {
  const [dataList, setDataList] = useState([
    {
      id: 0,
      destination: "Malesia",
      dateStart: "22-01-2025",
      dateFinish: "01-02-2025",
      tutor: "Alessandro Guglielmi",
      people: [
        {
          id: 1,
          name: "Luca Marinelli",

          email: "lucamarinelli@gmail.-com",
          age: "33",
          cf: "SPSHNL87J982K",
          cellNumber: 3309968745,
        },
        {
          id: 2,
          name: "Mario Rossi",

          email: "mariorossi@gmail.-com",
          age: "33",
          cf: "SPSHNL87J982K",
          cellNumber: 3309968745,
        },
        {
          id: 3,
          name: "Gino D'acampo",

          email: "gino@gmail.-com",
          age: "33",
          cf: "SPSHNL87J982K",
          cellNumber: 3309968745,
        },
        {
          id: 4,
          name: "Alvaro Vianello",

          email: "alvaroNoSoler@gmail.-com",
          age: "33",
          cf: "SPSHNL87J982K",
          cellNumber: 3309968745,
        },
        {
          id: 5,
          name: "Maria Grazia Rosetta",

          email: "mariarosetta@gmail.-com",
          age: "33",
          cf: "SPSHNL87J982K",
          cellNumber: 3309968745,
        },
      ],
    },
    {
      id: 1,
      destination: "Lituania",
      dateStart: "09-05-2025",
      dateFinish: "01-06-2025",
      tutor: "Paolo Maria",
      people: [
        {
          id: 1,
          name: "Maria Maddalena",

          email: "MM@gmail.-com",
          age: "33",
          cf: "SPSHNL87J982K",
          cellNumber: 3309968745,
        },
        {
          id: 2,
          name: "Paola Lurentis",

          email: "paula@gmail.-com",
          age: "33",
          cf: "SPSHNL87J982K",
          cellNumber: 3309968745,
        },
        {
          id: 3,
          name: "Maria Stuarda",

          email: "Stuarda@gmail.-com",
          age: "33",
          cf: "SPSHNL87J982K",
          cellNumber: 3309968745,
        },
        {
          id: 4,
          name: "Valentina La Fiasca",

          email: "Vale@gmail.-com",
          age: "33",
          cf: "SPSHNL87J982K",
          cellNumber: 3309968745,
        },
        {
          id: 5,
          name: "Giorgione De Santis",

          email: "giorgione@gmail.-com",
          age: "33",
          cf: "SPSHNL87J982K",
          cellNumber: 3309968745,
        },
      ],
    },
    {
      id: 2,
      destination: "Africa",
      dateStart: "17-01-2025",
      dateFinish: "04-02-2025",
      tutor: "Luciano Vianello",
      people: [
        {
          id: 1,
          name: "Toto Mlevolo",

          email: "malevolo@gmail.-com",
          age: "33",
          cf: "SPSHNL87J982K",
          cellNumber: 3309968745,
        },
        {
          id: 2,
          name: "Giammaria Esposito",

          email: "giamma@gmail.-com",
          age: "33",
          cf: "SPSHNL87J982K",
          cellNumber: 3309968745,
        },
        {
          id: 3,
          name: "Alberto Speranza",

          email: "speranza@gmail.-com",
          age: "33",
          cf: "SPSHNL87J982K",
          cellNumber: 3309968745,
        },
        {
          id: 4,
          name: "Leopoldo Rossi",

          email: "leorosso@gmail.-com",
          age: "33",
          cf: "SPSHNL87J982K",
          cellNumber: 3309968745,
        },
        {
          id: 5,
          name: "Eustorgio Valenza",

          email: "euvale@gmail.-com",
          age: "33",
          cf: "SPSHNL87J982K",
          cellNumber: 3309968745,
        },
      ],
    },
    {
      id: 3,
      destination: "Canada",
      dateStart: "22-01-2025",
      dateFinish: "01-02-2025",
      tutor: "Luca Boscolo",
      people: [
        {
          id: 1,
          name: "Stefano De Martino",

          email: "stee@gmail.-com",
          age: "33",
          cf: "SPSHNL87J982K",
          cellNumber: 3309968745,
        },
        {
          id: 2,
          name: "Maria De Filippi",

          email: "mary@gmail.-com",
          age: "33",
          cf: "SPSHNL87J982K",
          cellNumber: 3309968745,
        },
        {
          id: 3,
          name: "Roberto Robertino",

          email: "robb@gmail.-com",
          age: "33",
          cf: "SPSHNL87J982K",
          cellNumber: 3309968745,
        },
        {
          id: 4,
          name: "Giammaria Scalabrin",

          email: "scalagiamma@gmail.-com",
          age: "33",
          cf: "SPSHNL87J982K",
          cellNumber: 3309968745,
        },
        {
          id: 5,
          name: "Alfredo Gelo",

          email: "fafreddo@gmail.-com",
          age: "33",
          cf: "SPSHNL87J982K",
          cellNumber: 3309968745,
        },
      ],
    },
    {
      id: 4,
      destination: "Germania",
      dateStart: "22-01-2025",
      dateFinish: "01-02-2025",
      tutor: "Alessandro Scalabrin",
      people: [
        {
          id: 1,
          name: "Matteo Matteotti",

          email: "matemate@gmail.-com",
          age: "33",
          cf: "SPSHNL87J982K",
          cellNumber: 3309968745,
        },
        {
          id: 2,
          name: "Nicolò Nicoli",

          email: "nicooo@gmail.-com",
          age: "33",
          cf: "SPSHNL87J982K",
          cellNumber: 3309968745,
        },
        {
          id: 3,
          name: "Luca Marinelli",

          email: "lucaluca@gmail.-com",
          age: "33",
          cf: "SPSHNL87J982K",
          cellNumber: 3309968745,
        },
        {
          id: 4,
          name: "Stefania Stefani",

          email: "steff@gmail.-com",
          age: "33",
          cf: "SPSHNL87J982K",
          cellNumber: 3309968745,
        },
        {
          id: 5,
          name: "Pasquale Palindromo",

          email: "pascà@gmail.-com",
          age: "33",
          cf: "SPSHNL87J982K",
          cellNumber: 3309968745,
        },
      ],
    },
  ]);

  return (
    <GlobalContext.Provider value={{ dataList, setDataList }}>
      {children}
    </GlobalContext.Provider>
  );
};
//esporto lo use
export const useGlobalContext = () => useContext(GlobalContext);
