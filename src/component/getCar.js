import axios from "axios";


const getCar = async (govNumber, techpassportseria, techPassportNumber) =>{
 
        try {
          const response = await axios.get(`${import.meta.env.IPOLIS_ENDPOINT}/eosgouz/provider/vehicle`, {
            auth: {
                username: import.meta.env.VITE_REACT_APP_IPOLIS_USERNAME,
                password: import.meta.env.VITE_REACT_APP_IPOLIS_PASSWORD
            },
            params: {
              govNumber: govNumber,
              techPassportSeria: techpassportseria,
              techPassportNumber: techPassportNumber
            }
          });  
          console.log(response.data.operationResult.vehicle);
          return {req: true, ...response.data.operationResult.vehicle}
        } catch (error) {
            console.log(error)
            return {req: false, ...error}
        //   throw new Error(error);
        }

}

export default getCar;