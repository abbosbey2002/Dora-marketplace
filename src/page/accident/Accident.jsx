import React, { useState, useEffect } from 'react';
import getPersonData from '../../component/getPerson';

function Accident() {
  const [person, setPerson] = useState(null);

  const [checkInsur, setCheckinsur] = useState();

  const [Insurance, seInsurence] =useState();


    const [insureseria, setInsureSeria]  = useState();
    const [insurenumber, setInsureNumber]  = useState();
    const [insurebirthDate, setInsureBirhtdate]  = useState();


    async function changeSeria(e){
      console.log(e.target.value)
      console.log("insure", insureseria);
      setInsureSeria(await e.target.value);
    }

    async function changenumber(e){
      setInsureNumber(e.target.value);
    }
    async function changebirthDate(e){
      setInsureBirhtdate(e.target.value);
    }





  

  useEffect(() => {
    const storedPerson = localStorage.getItem('person');
    if (storedPerson) {
      let parsedPerson = JSON.parse(storedPerson);
      setPerson(parsedPerson);
    }
  }, []);

  const Owner = () => {

    async function req(){
    
      let req =await getPersonData(insureseria, insurenumber, insurebirthDate)
    
      if(await req.req){
        seInsurence(req)
        alert('karochi siz suxurtalandingiz')
        console.log("re = ", req);
        }else{
          setError("Malumotlar topilmadi")
        }
  }


    const [insureseria, setInsureSeria]  = useState();
    const [insurenumber, setInsureNumber]  = useState();
    const [insurebirthDate, setInsureBirhtdate]  = useState();


    async function changeSeria(e){
      console.log(e.target.value)
      console.log("insure", insureseria);
      setInsureSeria(await e.target.value);
    }

    async function changenumber(e){
      setInsureNumber(e.target.value);
    }
    async function changebirthDate(e){
      setInsureBirhtdate(e.target.value);
    }


    return (
      <>
        <h2 className='text-blue-700 text-3xl my-10'>Insurance information</h2>
        <div className='grid gap-3 mb-6 md:grid-cols-12'>
          <div className='col-span-2'>
            <label htmlFor='seria' className='block mb-2 text-sm font-medium text-gray-900'>
              Seria
            </label>
            <input
              type='text' 
              onChange={changeSeria}
              className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full uppercase p-2.5'
              placeholder='Seria'
              // required=''
             
            />
          </div>
          <div className='col-span-1'>
            <label htmlFor='number' className='block mb-2 text-sm font-medium text-gray-900'>
              Seria Number
            </label>
            <input
              type='text'
          
              onChange={changenumber}
              className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='Number'
              required=''
             
            />
          </div>
          <div className='col-span-2'>
            <label htmlFor='birthdate' className='block mb-2 text-sm font-medium text-gray-900'>
              Birthdate
            </label>
            <input
              type='date'
              onChange={changebirthDate}
              className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder=''
           
              required=''
            />
          </div>
          <div className='col-span-2'>
          
            <button
            onClick={req}
              type='button'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
            >
              Next
            </button>
          </div>
          <div className='col-span-2'></div>
        </div>
      </>
    );
  };

  return (
    <div className='bg-white'>
      <div className='container mx-auto py-10'>
        <h2 className='text-blue-700 text-3xl my-3'>Your information</h2>
        <div className='grid gap-3 mb-6 md:grid-cols-12'>
          <div className='col-span-2'>
            <label htmlFor='seria' className='block mb-2 text-sm font-medium text-gray-900'>
              Seria
            </label>
            <input
              type='text'
            
              defaultValue={person?.seria}
              className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full uppercase p-2.5'
              placeholder='Seria'
              required=''
            />
          </div>
          <div className='col-span-1'>
            <label htmlFor='number' className='block mb-2 text-sm font-medium text-gray-900'>
              Seria Number
            </label>
            <input
              type='text'
              defaultValue={person?.number}
              className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='Number'
              required=''
            />
          </div>
          <div className='col-span-2'>
            <label htmlFor='birthdate' className='block mb-2 text-sm font-medium text-gray-900'>
              Birthdate
            </label>
            <input type='date' defaultValue={person?.birth} className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Number' required='' />
          </div>
          <div className='col-span-2'>
            <button type='button' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
              Next
            </button>
          </div>
          <div className='col-span-2'></div>
        </div>
        <div className='flex w-36'>
            <label htmlFor='number' className='inline-block mb-2 text-sm font-medium text-gray-900'>
              Insurence o'zim
            </label>
            <input
            onChange={e=>setCheckinsur(e.target.checked)}
              type='checkbox'
              className='bg-white  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            />
          </div>
          {checkInsur &&  <Owner />}
        
      </div>
    </div>
  );
}

export default Accident;