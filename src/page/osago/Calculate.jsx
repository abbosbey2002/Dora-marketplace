import React, {useState, useEffect} from 'react'
import getPersonData from '../../component/getPerson';
import CreateOrder from '../../component/CreateOrder';

function Calculate() { // region code

    const month = {
        '1': "Yanvar",
        '2': "Fevral",
        '3': "Mart",
        '4': "Aprel",
        '5': "MaY",
        '6': "Iyun",
        '7': "Iyul",
        '8': "August",
        '9': "Sentabr",
        '10': "Oktober",
        '11': "Noyaber",
        '12': "dekabr"
    }

    const regionsIDForEosgouz = {
        "01": 10,
        "10": 11,
        "20": 12,
        "25": 13,
        "30": 14,
        "40": 15,
        "50": 16,
        "60": 17,
        "70": 18,
        "75": 19,
        "80": 20,
        "85": 21,
        "90": 22,
        "95": 23
    }

    const [amountOfDrivers, setAmountOFDrivers] = useState();
    let placeBoxForCalculate = 10;
    // = regionsIDForEosgouz[vehicle.govNumber.toString().substr(0,2)]
    let calcRegion;
    if (placeBoxForCalculate === 10 || placeBoxForCalculate === 11) {
        calcRegion = 1.4;
    } else {
        calcRegion = 1;
    }

    let agreementDate = new Date();

    const [skidka, setSkidka] = useState();
    const [period, setPeriod] = useState();
    const [cases, setcases] = useState();
    const [drivers, setDrivers] = useState([])
    const [startDate, setStartDate] = useState(agreementDate);
    const [endDate, setEndtDate] = useState(agreementDate);


    const [driversSeria, setDriversSeria] = useState('')
    const [driversNumber, setDriversNumber] = useState('')
    const [driverBirthdate, setDriverBirthdate] = useState('')
    const [agreement, setagreement] = useState('')
    const [totalAmount, setTotalAmount] = useState(0);


    // calculate summ

    const [sumInsured, setSumInsured] = useState(40000000) // 40 000 000
    let calcCitizenship = 1;
    let calcType_of_person = 1.4;
    let car_type = 0.1

    // localstroge
    const [vehicle, setVehicle] = useState();
    const [client, setClient] = useState();
    const [owner, setOwner] = useState();

    function addOneYearAndOneDayToCurrentDate() {
        const today = new Date();
        const nextYear = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate());
        nextYear.setDate(nextYear.getDate() - 1);

        let now = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        now.setDate(now.getDate() + 1)
        setStartDate(now)
        setEndtDate(nextYear)
    }


    useEffect(() => {

        addOneYearAndOneDayToCurrentDate()

        setVehicle(JSON.parse(localStorage.getItem('vehicle')))
        setClient(JSON.parse(localStorage.getItem('client')))
        setOwner(JSON.parse(localStorage.getItem('owner')))
    }, []);

    // localstroge

    // end calculatge summ

    const finish = async () => {
        console.log('====================================');
        console.log('finish');
        console.log(agreement);
        console.log(totalAmount);
        console.log(drivers);

        const res = await CreateOrder({
            agreement,
            drivers,
            vehicle,
            client,
            owner
        });

        console.log('====================================');


    }


    const addDrivers = () => {

        async function req() {
            let req = await getPersonData(driversSeria, driversNumber, driverBirthdate)
            if (await req.req) {
                document.querySelector('#setDriversSeria').value = ''
                document.querySelector('#setDriversNumber').value = ''
                document.querySelector('#setDriverBirthdate').value = ''
                drivers.push({
                    firstName: "SHOXRUX",
                    lastName: "QURBONBOYEV",
                    surName: "UMRBEKOVICH",
                    birthday: driverBirthdate,
                    pinfl: req.pinfl,
                    passportSeries: driversSeria,
                    passportNumber: driversNumber,
                    passportAuthority: req.issuedBy,
                    passportIssueDate: req.startDate.slice(0, 10),
                    passportExpirationDate: req.endDate.slice(0, 10),
                    driverLicenseSeries: "AF",
                    driverLicenseNumber: "2388278",
                    driverLicenseIssueDate: "2021-02-22",
                    insuranceClaimCoefficient: "1",
                    familyRelationId: "8"
                });

                console.log(drivers);
            } else {
                console.log(error)
            }
        }

        req()
    }

    const calculateAmount = async () => {
        setTotalAmount(await(sumInsured * calcCitizenship * calcType_of_person * car_type * amountOfDrivers * period * calcRegion * cases * skidka) / 100)
        setagreement({
            agreementId: "3072ce18-3953-45a8-b68c-8fe8f6df5591",
            agreementDate: agreementDate.toISOString().slice(0, 10),
            periodStartDate: startDate.toISOString().slice(0, 10),
            periodEndDate: endDate.toISOString().slice(0, 10),
            paymentDate: agreementDate.toISOString().slice(0, 10),
            policyDeliveryDate: agreementDate.toISOString().slice(0, 10),
            premiumAmount: Math.round(totalAmount),
            policyBlankNumber: "1",
            isLimited: amountOfDrivers == 1
        })
        console.log('==================================== total');
        console.log(((sumInsured, calcCitizenship, calcType_of_person, car_type, amountOfDrivers, period, calcRegion, cases, skidka)));
        console.log('resuylt', skidka);
        console.log('====================================');


    }


    function amountDrivers() {
        setAmountOFDrivers(1)
    }
    function amountDrivers2() {
        setAmountOFDrivers(3)
    }

    return (
        <div className='bg-white'>
            <div className='container mx-auto'>
                <h1 className='py-6 ps-5 text-lg'> Calculate ipolis</h1>






                <div className=" border mx-auto container  text-1xl gap-3">
                    <div className='col-span-3'>
                        <div className=" mt-6 h-auto max-w-full rounded-lg bg-gray-100  p-4" id="headlessui-radiogroup-:rf:" role="radiogroup" aria-labelledby="headlessui-label-:rg:">
                            <label className="heading-16 font-medium" id="headlessui-label-:rg:" role="none">
                                Polis turini tanlang
                            </label>
                            <div className="mt-6 bg-white" role="none">
                                <div className='p-2 border my-1 rounded-lg'>
                                    <input onChange={setAmountOFDrivers}
                                        className='me-2'
                                        name='amountdriver'
                                        id='amountdriver'
                                        type="radio"/>
                                    <label htmlFor="amountdriver">Checklanmagan (vip)</label>
                                </div>
                                <div className='p-2 border my-1 rounded-lg'>
                                    <input onChange={amountDrivers2}
                                        className='me-2'
                                        name='amountdriver'
                                        id='amountdriver1'
                                        type="radio"/>
                                    <label htmlFor="amountdriver1">5 kishi</label>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-6'>
                            <div className="col-span-2 bg-gray-100  mt-4 my-2 me-2 border rounded-lg p-4" id="headlessui-radiogroup-:rj:" role="radiogroup" aria-labelledby="headlessui-label-:rk:">
                                <label className="heading-16 font-medium" id="headlessui-label-:rk:" role="none">
                                    Sug‘urtalash davri
                                </label>
                                <div className="mt-6" role="none">
                                    <div className="mb-4" id="headlessui-radiogroup-option-:rm:" role="none">
                                        {/* <div className="flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select"> */}
                                        <select onChange={
                                                e => setPeriod(e.target.value)
                                            }
                                            className='flex w-full cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select'
                                            name=""
                                            id="">
                                            <option className='flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select' value="1">12 oy</option>
                                            <option className='flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select' value="0.7">6 oy</option>
                                            <option className='flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select' value="0.2">20 kun</option>

                                        </select>

                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 mt-4 my-2 border rounded-lg bg-gray-100 p-4" id="headlessui-radiogroup-:rj:" role="radiogroup" aria-labelledby="headlessui-label-:rk:">
                                <label className="heading-16 font-medium" id="headlessui-label-:rk:" role="none">
                                    Chegirma  olish
                                </label>
                                <div className="mt-6 bg-white" role="none">
                                    <div className="mb-4" id="headlessui-radiogroup-option-:rm:" role="none">
                                        {/* <div className="flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select"> */}
                                        <select onChange={
                                                e => setSkidka(e.target.value)
                                            }
                                            className='flex w-full cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select'
                                            name=""
                                            id="">
                                            <option className='flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select' value="1">nogiron</option>
                                            <option className='flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select' value="1">soppasow</option>

                                        </select>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-6'>
                            <div className="col-span-3 bg-gray-100  mt-4 my-2 me-2 border rounded-lg p-4" id="headlessui-radiogroup-:rj:" role="radiogroup" aria-labelledby="headlessui-label-:rk:">
                                <label className="heading-16 font-medium" id="headlessui-label-:rk:" role="none">
                                    Start Date
                                </label>
                                <div className="mt-6" role="none">
                                    <div className="mb-4" id="headlessui-radiogroup-option-:rm:" role="none">
                                        {/* <div className="flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select"> */}
                                        <p className='flex w-full cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select' name="" id="">
                                            {
                                            startDate.toDateString()
                                        } </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3 bg-gray-100  mt-4 my-2  border rounded-lg p-4" id="headlessui-radiogroup-:rj:" role="radiogroup" aria-labelledby="headlessui-label-:rk:">
                                <label className="heading-16 font-medium" id="headlessui-label-:rk:" role="none">
                                    Start Date
                                </label>
                                <div className="mt-6" role="none">
                                    <div className="mb-4" id="headlessui-radiogroup-option-:rm:" role="none">
                                        {/* <div className="flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select"> */}
                                        <p className='flex w-full cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select' name="" id="">
                                            {
                                            endDate.toDateString()
                                        } </p>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='col-span-4 border'>
                        <div className="mt-4 rounded-lg bg-white p-4" id="headlessui-radiogroup-:rj:" role="radiogroup" aria-labelledby="headlessui-label-:rk:">
                            <label className="heading-16 font-medium" id="headlessui-label-:rk:" role="none">
                                Sug`urta  olish
                            </label>
                            <div className="mt-6 bg-white" role="none">
                                <div className="mb-4" id="headlessui-radiogroup-option-:rm:" role="none">
                                    {/* <div className="flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select"> */}
                                    <select onChange={
                                            e => setcases(e.target.value)
                                        }
                                        className='flex w-full cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select'
                                        name=""
                                        id="">
                                        <option className='flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select' value="2">
                                            Oldingi majburiy sug'urta shartnomasi amal qilish davrida yuz bergan bitta sug'urta hodisasi
                                        </option>
                                        <option className='flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select' value="2.5">
                                            Oldingi majburiy sug'urta shartnomasi amal qilish davrida yuz bergan ikkita sug'urta hodisasi
                                        </option>

                                        <option className='flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select' value="3">
                                            Oldingi majburiy sug'urta shartnomasi amal qilish davrida yuz bergan uch va undan ko'p sug'urta hodisasi
                                        </option>

                                        <option className='flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select' value="1">

                                            Birinchi marta, shuningdek oldingi majburiy sug'urta shartnomasi amal qilish davrida sug'urta hodisalari bo'lmasa

                                        </option>

                                    </select>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-6 border p-3'>
                        <div className='w-full'>
                        {
                    amountOfDrivers != 1 && <div className='col-span-6 border p-3'>

                        <button data-popover-target="popover-user-profile" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Add Drivers
                        </button>
                        <div className="absolute z-10 mx-3  inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-1 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
                            <div className="p-3">
                                <div className="grid grid-col2 gap-3 mb-2">
                                    <h2>Passort data of driver</h2>
                                    <div>
                                        <label htmlFor="setDriversSeria" className="block mb-2 text-sm font-medium dark:text-white">Seria</label>
                                        <input onChange={
                                                e => setDriversSeria(e.target.value)
                                            }
                                            type="text"
                                            id="setDriversSeria"
                                            className="bg-white uppercase border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                            placeholder="AC"
                                            required/>
                                    </div>
                                    <div>
                                        <label htmlFor="setDriversNumber" className="block mb-2 text-sm font-medium dark:text-white">Nomer</label>
                                        <input onChange={
                                                e => setDriversNumber(e.target.value)
                                            }
                                            type="text"
                                            id="setDriversNumber"
                                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                            placeholder="1110802"
                                            required/>
                                    </div>
                                    <div>
                                        <label htmlFor="setDriverBirthdate" className="block mb-2 text-sm font-medium dark:text-white">birthdate</label>
                                        <input onChange={
                                                e => setDriverBirthdate(e.target.value)
                                            }
                                            type="date"
                                            id="setDriverBirthdate"
                                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                            placeholder=""
                                            required/>
                                    </div>
                                    <div>
                                        <button onClick={addDrivers}
                                            className='bg-green-700 px-7 py-3 w-full text-white  rounded-2xl'>
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div data-popper-arrow=""/>
                        </div>


                    </div>
                }
                        </div>
                    </div>

                    <div className='col-span-6 border p-3'>
                        <button onClick={calculateAmount}
                            className='bg-red-700 px-7 py-3 text-white mx-5  rounded-2xl'>
                            calculate
                        </button>
                        <button onClick={finish}
                            className='bg-green-700 px-7 py-3 text-white  rounded-2xl'>
                            Next
                        </button>
                    </div>
                    {/* dont touch it */}
                    <div className='col-span-1  flex gap-2'>
                            <div className=''>
                        <div className="mt-4 bg-gray-200 border rounded-lg p-4" id="headlessui-radiogroup-:rj:" role="radiogroup" aria-labelledby="headlessui-label-:rk:">

                                <label className="heading-16 p-1 font-medium" id="headlessui-label-:rk:" role="none">
                                    Pay
                                </label>
                                <div className="m-1 p-1 " role="none">
                                    <div className="mb-4 flex justify-between" id="headlessui-radiogroup-option-:rm:" role="none">
                                        <h2 className='text-start mx-2'>Polis narxi</h2>
                                        <h3 className='mx-2 text-end text-slate-600'>
                                            {
                                            Math.round(totalAmount)
                                        }</h3>
                                    </div>
                                    <div className="mb-4 flex justify-between" id="headlessui-radiogroup-option-:rm:" role="none">
                                        <h2 className='text-start mx-2'>Sugurta</h2>
                                        <h3 className='mx-2 tex-end text-slate-600'>
                                            {sumInsured}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     </div>
            </div>
        </div>

    )
}

export default Calculate
