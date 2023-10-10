import React, {useState, useEffect} from 'react'
import Owner from './Owner';
import Client from './Client';

function Osago() {

    const [car, setCar] = useState({});
    const [owner, setOwner] = useState();


    // const [ownerseria, setOwerseria] = useState();
    // const [ownerNumner, setOwerNumber] = useState();
    // const [ownerphone, setOwerphone] = useState();
    // const [ownerBirthdate, setOwnerBirthdate] = useState();
    const [pinfl, Setpinfl] = useState(51404026300023)

    useEffect(() => {
        const carData = localStorage.getItem('car');
        if (true) {
            let card = JSON.parse(carData);
            // Setpinfl(card.pinfl);
            setCar(card)
            let vehicle = {
                brand: null,
                model: card.modelName,
                engineNumber: card.engineNumber,
                bodyNumber: card.bodyNumber,
                passportSeries: card.techpassportseria,
                passportNumber: card.techPassportNumber,
                pinfl: card.pinfl,
                inn: card.inn,
                discountTypeIdForEosgoUz: "1",
                registeredPlaceIdForEosgoUz: "1",
                insurancePeriodIdForEosgoUz: 1,
                typeIdForEosgoUz: card.vehicleTypeId,
                manufacturedYear: card.issueYear,
                stateRegistrationNumber: card.govNumber,
                // passportIssueDate: card.techPassportIssueDate.toString().substr(0, 10),
                // regionIdForEosgoUz: card.govNumber.toString().substr(0, 2)
            };

            localStorage.setItem("vehicle", (JSON.stringify(vehicle)));

        }
    }, []);

    return (
        <div className='bg-white'>
            <div className='container  mx-auto px-auto py-10'>


                <div className="flex justify-around w-[50%] sm:flex-nowrap flex-wrap gap-4 mx-auto">
                    <div className='w-[50%] min-w-[280px]'>
                        <div className='grid  mx-auto border gap-3  mb-6 grid-cols-12 p-5 rounded-2xl'>
                            <div className='col-span-4'>
                                {/* <div class=""> */}
                                <div class="relative h-10 w-full ">
                                    <input defaultValue={
                                            car.techpassportseria
                                        }
                                        id="first_seria"
                                        class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" "/>
                                    <label htmlFor="first_seria" class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        seria
                                    </label>
                                </div>
                                {/* </div> */} </div>
                            <div className='col-span-8'>
                                <div class="relative h-10 w-full">
                                    <input defaultValue={
                                            car.techPassportNumber
                                        }
                                        id="first_seria"
                                        class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" "/>
                                    <label htmlFor="first_number" class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Number
                                    </label>
                                </div>
                            </div>
                            <div className='col-span-12 gap-1 flex justify-around'>
                                <div className=''>
                                    <div class="relative h-10 w-full">
                                        <input defaultValue={
                                                car ?. govNumber
                                            }
                                            id="first_seria"
                                            class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                            placeholder=" "/>
                                        <label htmlFor="first_number" class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            Mashina raqam
                                        </label>
                                    </div>
                                </div>

                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Next</button>
                            </div>
                            <div className='col-span-2'></div>
                        </div>
                        <Owner pinfl={pinfl}/>{ /* avto egasi */
}
                <div className='border p-4 flex justify-between my-4 rounded-2xl'>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Back</button>

                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Next</button>
                </div>

                    </div>
                    <div className='w-[50%] min-w-[280px]'>
                        <div className='border rounded-2xl p-2'>

                            <div className="mt-6 bg-white" role="none">
                                <div className="mb-4 flex justify-between" id="headlessui-radiogroup-option-:rm:" role="none">
                                    <h2 className='text-start mx-2'>Polis narxi</h2>
                                    <h3 className='mx-2 text-end text-slate-600'>30 000</h3>
                                </div>
                                <div className="mb-4 flex justify-between" id="headlessui-radiogroup-option-:rm:" role="none">
                                    <h2 className='text-start mx-2'>Sugurta</h2>
                                    <h3 className='mx-2 tex-end text-slate-600'>30 000</h3>
                                </div>
                                <div className="mb-4 flex justify-between" id="headlessui-radiogroup-option-:rm:" role="none">
                                    <h2 className='text-start mx-2'>Jami</h2>
                                    <h3 className='mx-2 text-end text-slate-600'>30 000</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>

    )
}

export default Osago; 