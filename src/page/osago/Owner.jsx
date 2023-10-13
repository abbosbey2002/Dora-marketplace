import React, {useState} from 'react'
import Client from './Client';

import getDriver from '../../component/getDriver';


const Owner = (props) => {

    const [checkClient, setCheckClient] = useState(true);

    const [isClient, setIsClient] = useState(false);
    const [owner, setOwner]=useState();
    
    const [seria, SetSeria] = useState();
    const [number, setNumber] = useState();
    const [pinfl, Setpinfl] = useState(props.pinfl);

    const req = async () => {
        let req = await getDriver(seria, number, pinfl)
        if (await req.req) {
            setIsClient(true)
            // localStorage.setItem("car", (JSON.stringify({...req, techpassportseria, techPassportNumber})));
            let firstName = req.driverPersonInfo.firstNameLatin
            let lastName = req.driverPersonInfo.lastNameLatin
            let surName = req.driverPersonInfo.middleNameLatin
            let owner = {
                firstName: req.driverPersonInfo.firstNameLatin,
                lastName: req.driverPersonInfo.lastNameLatin,
                surName: req.driverPersonInfo.middleNameLatin,
                organizationName: `${lastName} ${firstName} ${surName}`,
                innNumber: null,
                pinfl: pinfl,
                passportSeries: seria,
                passportNumber: number
            }
            setOwner(await req.driverPersonInfo)
            console.log(req.driverPersonInfo);
            localStorage.setItem("owner", (JSON.stringify(owner)));
            
        } else {
            console.log("Malumotlaringiz xato")
        }
    }

    const clientChange = (e) => {
        setCheckClient(e.target.checked)
        if (e.target.checked) {
                let client = {
                    firstName: owner.firstNameLatin,
                    lastName: owner.lastNameLatin,
                    surName: owner.middleNameLatin,
                    typeId: 1, // chala
                    legalTypeId: 3, // chala
                    innNumber: null, // chala
                    phone: '+99899',
                    address: owner.address,
                    organizationName: `${
                        owner.lastNameLatin
                    } ${
                        owner.firstNameLatin
                    } ${
                        owner.middleNameLatin
                    }`,
                    email: "example@example.com",
                    pinfl: owner.pinfl,
                    passportSeries: owner.seria,
                    passportNumber: owner.number,
                    passportAuthority: owner.issuedBy,
                    passportIssueDate: owner.startDate.slice(0, 10),
                    passportExpirationDate: owner.endDate.slice(0, 10),
                    birthDate: owner.birth,
                    gender: owner.gender,
                    countryIdForEosgoUz: 210,
                    regionIdForEosgoUz: 10,
                    districtIdForEosgoUz: 1007,
                    residentTypeId: 1,
                    mfoCode: null,
                    settlementAccount: null,
                    activityType: null
                }   
                localStorage.setItem("client", (JSON.stringify(client)));
    }
}

    return (<>

        <div className='grid  mx-auto border gap-3  mb-6 grid-cols-12 p-5 rounded-2xl'>
            <div className='col-span-4'>
                {/* <div class=""> */}
                <div class="relative h-10 w-full ">
                    <input onChange={
                            e => SetSeria(e.target.value)
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
                    <input onChange={
                            e => setNumber(e.target.value)
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
                        <input type='text'
                            defaultValue={pinfl}
                            disabled={true}
                            id="first_seria"
                            class="peer  h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "/>
                        <label htmlFor="first_number" class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Pinfl
                        </label>
                    </div>
                </div>

                <button onClick={req}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Next</button>
            </div>
            <div className='col-span-2'></div>
        </div>

        {isClient && <div class="flex items-center pl-4 border border-gray-200 rounded rounded-2xl ">
                <input  onChange={clientChange} defaultChecked id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 " />
                <label htmlFor="bordered-checkbox-2" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Client o`zi</label>
            </div>
                                    
                                    }
            
                        {!checkClient && <Client />}
                    </>
        )
    }

    export default Owner;
