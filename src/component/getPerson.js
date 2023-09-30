import axios from "axios";

const getPersonData = async (seria, number, birthDate) =>{
    console.log(seria, number, birthDate)
    try {
    
    const response = await axios.get(`${import.meta.env.VITE_REACT_APP_IPOLIS_ENDPOINT}/eosgouz/provider/birthdate`, {
      auth: {
        username: import.meta.env.VITE_REACT_APP_IPOLIS_USERNAME,
        password: import.meta.env.VITE_REACT_APP_IPOLIS_PASSWORD
      },
      params: {
        birthdate: birthDate,
        passportSeries: seria,
        passportNumber: number
      }
    });     
    console.log(import.meta.env.VITE_REACT_APP_IPOLIS_ENDPOINT)
    console.log(response.data.operationResult)
      return {req: true, seria, number, birth: birthDate, ...response.data.operationResult.person}
  } catch (error) {

   return {req: false, ...error}
  //   throw new Error(error);
  }
  }

  export default getPersonData;


// import axios from "axios";



// const getPersonData = async (seria="AC", number="1110802", birthDate="2002-04-14") =>{
//     console.log(seria, number, birthDate)
//     try {
    
//     const response = await axios.get(`http://localhost:8000/api`, {
//       params: { 
//         birthdate: birthDate,
//         passportSeries: seria,
//         passportNumber: number
//       }
//     });     
//     console.log("req =", response.data, "finish  ");
//       return {req: true , ...response}
//   } catch (error) {
//     console.log("req", error);
//    return {req: false, ...error}
//   //   throw new Error(error);
//   }
//   }

//   let seria;
//   let number;
//   let birthDate;

//  getPersonData(seria, number, birthDate);

//  export default getPersonData