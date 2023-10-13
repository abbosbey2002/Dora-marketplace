import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import getPersonData from "../../component/getPerson"

function GetAccidentInsur() {

    const navigate = useNavigate();

    const [person, setPerson] = useState();
    const [error, setError] = useState('Bu error row')

    const [seria, setSeria] =useState()
    const [number, setNumber] =useState()
    const [birthDate, setBirhtdate] =useState()


    async function req(){
    
        let req =await getPersonData(seria, number, birthDate)
      
        if(await req.req){
            setPerson(await req)
            localStorage.setItem('person', JSON.stringify(await req))
            navigate('accident');
          }else{
            setError("Malumotlar topilmadi")
          }
    }


    return (
        <div className="container flex flex-col mx-auto text-white">
            <div className="grid w-full grid-cols-1 my-auto mt-12 mb-8 md:grid-cols-2 xl:gap-14 md:gap-5">
                <div className="flex flex-col justify-center col-span-1 text-center lg:text-start">
                    <div className="flex items-center justify-center mb-4 lg:justify-normal">
                        <img className="h-5" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-1.png" alt="logo"/>
                        <h4 className="ml-2 text-sm font-bold tracking-widest text-primary uppercase">
                            Osago
                        </h4>
                    </div>
                    <h1 className="mb-8 text-4xl font-extrabold leading-tight lg:text-6xl text-dark-grey-900">
                        Majbury avto sugurta
                    </h1>
                    <p className="mb-6 text-base font-normal leading-7 lg:w-3/4 text-grey-900">
                        Say goodbye to endless hours spent on building templates from scratch.
                                    Experience the quickest, most responsive, and trendiest dashboard

                    </p>
                    <div className="flex flex-col items-center gap-4 lg:flex-row">
                        <button className="flex items-center py-4 text-sm font-bold text-black px-7 bg-white hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 transition duration-300 rounded-xl">
                            Get started now
                        </button>   
                        <button className="flex items-center py-4 text-sm font-medium px-7 text-dark-grey-700 hover:text-dark-grey-900 transition duration-300 rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"/>
                            </svg>
                            Book a free call
                        </button>
                    </div>
                    {/* data */}
                    <div className='grid grid-cols-12 grid-flow-row gap-2 my-5	 '>

                        <div className='col-span-2'>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-200 ">
                                Seria
                            </label>
                            <input onChange={e => setSeria(e.target.value)} type="text" id="" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="AC" required=""/>
                        </div>
                        <div className='col-span-3'>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-200 ">
                                First name
                            </label>
                            <input onChange={e => setNumber(e.target.value)}  type="text" id="" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="1110802" required=""/>
                        </div>
                        <div className='col-span-3'>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-200 ">
                                Birthdate
                            </label>
                            <input onChange={e => setBirhtdate(e.target.value)}  type="date" id="" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required=""/>
                        </div>
                        <div>
                            <button onClick={req} className='border px-4 rounded-lg py-2'>Dalshe</button>
                        </div>
                    </div>
                    <div className='text-red-400 my-2'>
                        <h6>{error}</h6>
                    </div>
                </div>
                <div className="items-center justify-end hidden col-span-1 md:flex">
                    <img className="w-4/5 rounded-md" src="./img/w.png" alt="header image"/>
                </div>
            </div>
        </div>

    )
}

export default GetAccidentInsur
