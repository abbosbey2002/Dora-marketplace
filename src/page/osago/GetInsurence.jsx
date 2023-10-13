import React, { useState } from 'react'
import getCar from '../../component/getCar';
import { useNavigate } from 'react-router-dom';



function Header() {

  const navigate = useNavigate();

  const [car, setCar] = useState();
  const [error, setError] = useState('Bu error row')

  const [techpassportseria, setTechpassportseria] = useState('AAF');
  const [techPassportNumber, SetTechPassportNumber] = useState('3132507');
  const [govNumber, setGovNumber] = useState('01D797EB');

  const req =async () =>{
    let req = await getCar(govNumber, techpassportseria, techPassportNumber)
    if(await req.req){
      setCar(req)
      localStorage.setItem("car", (JSON.stringify({...req, techpassportseria, techPassportNumber})));
      navigate('osago');
    }else{
      setError("Malumotlaringiz xato")
    }
  }


  
  return (
    <div className="container flex flex-col mx-auto text-white">
  <div className="grid w-full grid-cols-1 my-auto mt-12 mb-8 md:grid-cols-2 xl:gap-14 md:gap-5">
    <div className="flex flex-col justify-center col-span-1 text-center lg:text-start">
      <div className="flex items-center justify-center mb-4 lg:justify-normal">
        <img
          className="h-5"
          src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-1.png"
          alt="logo"
        />
        <h4 className="ml-2 bg-transparent py-3 px-6 rounded-3xl bg-gray-100/20 text-sm font-bold tracking-widest text-primary uppercase">
          Osago
        </h4>
      </div>
      <h1 className="mb-8 text-4xl font-extrabold leading-tight lg:text-6xl text-dark-grey-900">
        Majbury avto sugurta
      </h1>
      <p className="mb-6 text-base font-normal leading-7 lg:w-3/4 text-grey-900">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente corrupti doloribus nobis laborum blanditiis a distinctio corporis, eum ipsum!

      </p>
      <div className="flex flex-col items-center gap-4 lg:flex-row">
       
        <button className="flex items-center py-4 text-sm font-medium px-7 text-dark-grey-700 hover:text-dark-grey-900 transition duration-300 rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>
          Book a free call
        </button>
      </div>
     {/* content */}
     <div className='grid md:w-[500px] mt-3   border grid-rows-2 gap-3  mb-6 grid-cols-12 p-5 rounded-2xl'>
                            <div className='col-span-4'>
                                {/* <div class=""> */}
                                <div class="relative h-10 w-full ">
                                    <input 
                                    onChange={e => setTechpassportseria(e.target.value)}
                                        id="first_seria"
                                        class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-6 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" "/>
                                    <label htmlFor="first_seria" class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Tech seria
                                    </label>
                                </div>
                                {/* </div> */} </div>
                            <div className='col-span-8'>
                                <div class="relative h-10 w-full">
                                    <input 
                                    
                                    onChange={e => SetTechPassportNumber(e.target.value)}

                                        id="first_seria"
                                        class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-6 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" "/>
                                    <label htmlFor="first_number" class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Tech Number
                                    </label>
                                </div>
                            </div>
                            <div className='col-span-12 gap-1 flex justify-around'>
                                <div className=''>
                                    <div class="relative h-10 w-full">
                                        <input 
                                            id="first_seria"
                                            setGovNumber={e => SetTechPassportNumber(e.target.value)}
                                            class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-6 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                            placeholder=" "/>
                                        <label htmlFor="first_number" class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            Car Number
                                        </label>
                                    </div>
                                </div>
                                <button onClick={req} className="flex items-center sm:py-4 py-3 px-6 m-1 text-sm   font-bold text-black sm:px-7 bg-white hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 transition duration-300 rounded-xl">
          Get started now
        </button>
                            </div>
                        </div>
       <div className='text-red-400 my-2'> <h6>{error}</h6>  </div>

     {/* content */}
     
    </div>
    <div className="items-center justify-end hidden col-span-1 md:flex">
      <img
        className="w-4/5 rounded-md"
        src="./img/w.png"
        alt="header image"
      />
    </div>
  </div>
</div>

  )
}

export default Header