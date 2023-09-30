import React, { useState } from 'react'

function Osago() {

    const [car, setCar] = useState({name:'abbos'});
    const [owner, setOwner] =useState();

    const [ownerseria, setOwerseria] = useState();
    const [ownerNumner, setOwerNumber] = useState();
    const [ownerphone, setOwerphone] = useState();
    const [ownerBirthdate, setOwnerBirthdate] = useState();


    const Owner = ()=>{
        return (
            <>
             <h2 className='text-blue-700 text-3xl my-10'> Avtomobil egasi malumotlari to`ldiring </h2>
    <div className="grid gap-6 mb-6 md:grid-cols-12">
    <div className='col-span-1'>
        <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-medium text-gray-900 "
        >
        First name
        </label>
        <input
        type="text"
        id="first_name"
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="John"
        required=""
        />
    </div>
    <div className='col-span-2'>
        <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-medium text-gray-900 "
        >
        First name
        </label>
        <input
        type="text"
        id="first_name"
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="John"
        required=""
        />
    </div>
    <div className='col-span-1'>
        <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-medium text-gray-900 "
        >
        First name
        </label>
        <input
        type="text"
        id="first_name"
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="John"
        required=""
        />
    </div>

        <div className=' text-center'>
    <label htmlFor="">.............</label>
                <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Edit</button>
        </div>

    </div>
    </>
        )
    }


  return (
    <div className='bg-white'>
    <div className='container mx-auto py-10'>
      <h2 className='text-blue-700 text-3xl my-3'> Avtomabil malumotlaringizni to`ldiring </h2>

      <div className="grid gap-3 mb-6 md:grid-cols-12 ">
  <div className='col-span-2'>
    <label
      htmlFor="first_name"
      className="block mb-2 text-sm font-medium text-gray-900 "
    >
      Mashina raqam 
    </label>
    <input
      type="text"
      id=""
      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder="Mashina raqam"
      required=""
    />
  </div>
  <div className='col-span-1'>
    <label
      htmlFor="first_name"
      className="block mb-2 text-sm font-medium text-gray-900 "
    >
      Seria
    </label>
    <input
      type="text"
      id="first_name"
      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder="Seria"
      required=""
    />
  </div>
  <div className='col-span-2'>
    <label
      htmlFor="first_name"
      className="block mb-2 text-sm font-medium text-gray-900 "
    >
      Number
    </label>
    <input
      type="text"
      id=""
      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder="Number"
      required=""
    />
  </div>
  <div className='col-span-2'>
        <button  type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Edit</button>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Next</button>
 </div>
 <div className='col-span-2'>
 </div>
      </div>

{/* avto egasi */}

   { Boolean(car) && <Owner />}

{/* avto egasi */}


    </div>
    </div>
  
  )
}

export default Osago