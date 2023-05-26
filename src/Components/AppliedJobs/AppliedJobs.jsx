import React, { useState } from 'react';
import { getStoredCart } from '../../Utils/fakeDB';
import { Link, useLoaderData } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import banner from '../../assets/images/banner.png'


const AppliedJobs = () => {

    const pData = useLoaderData()
    let cart = [];
    const savedCart = getStoredCart()
    for (const id in savedCart) {
        const foundJob = pData.find(job => job.id === id)
        if (foundJob) {
            cart.push(foundJob)
        }
    }
    console.log(cart);

    const [filter, setFilter] = useState(null)
    const handleFIlter = (value) => {
        setFilter(value)
    }
    const filterJob = pData.filter(job => {
        if (!filter) {
            return savedCart && savedCart[job.id]
        }
        else {
            return savedCart && savedCart[job.id] && job.position1 === filter
        }
    })

    return (
        <div className='  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  '>
            <div className='relative mb-5' >
                <h1 className='sm:text-5xl text-2xl text-center absolute inset-0 md:mt-16 mt-6 '>Applied Jobs</h1>
                <img className='' src={banner} alt="" />
            </div>

            <div className='flex flex-row-reverse'>
                <button onClick={() => handleFIlter("Onsite")} className='border px-3 p1-2 rounded bg-blue-700 text-white hover:bg-blue-400 mx-2'>Onsite</button>
                <button onClick={() => handleFIlter("Remote")} className='border px-3 p1-2 rounded bg-blue-700 text-white hover:bg-blue-400 mx-2'>Remote</button>

            </div>

            {
                filterJob.map(jobCart => (
                    <li key={jobCart.id} className='flex flex-col py-6 sm:flex-row sm:justify-between'>
                        <div className='flex w-full space-x-2 sm:space-x-4'>
                            <img
                                className='flex-shrink-0 object-cover w-40 h-25 border-transparent rounded outline-none sm:w-64 sm:h-40 '
                                src={jobCart.logo}
                                alt='Polaroid camera'
                            />
                            <div className='flex flex-col justify-between w-full pb-4'>
                                <div className='flex justify-between w-full pb-2 space-x-2'>
                                    <div className='space-y-1'>
                                        <h3 className='text-lg font-semibold leading-snug sm:pr-8'>
                                            {jobCart.title}
                                        </h3>
                                        <p className='text-sm text-gray-400'>{jobCart.name}</p>
                                        <div className='flex'>
                                            <span className='border px-2 py-1 rounded border-blue-700 hover:bg-blue-200 cursor-pointer me-2'>{jobCart.position1}</span>
                                            <span className='border px-2 py-1 rounded border-blue-700 hover:bg-blue-200 cursor-pointer'>{jobCart.position2}</span>
                                        </div>
                                        <div className='flex'>
                                            <span className='flex text-sm my-2 me-3'>
                                                <MapPinIcon className="h-5 w-5 text-gray-500  " />{jobCart.location}
                                            </span>
                                            <span className='flex text-sm my-2'>
                                                <CurrencyDollarIcon className="h-5 w-5 text-gray-500 " />{jobCart.salary}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='text-right'>
                                        <Link to={`/job/${jobCart.id}`} className='flex justify-center'>
                                            <span className='py-3 px-5  bg-blue-400 hover:bg-blue-700 rounded'>View Details</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))
            }
        </div>
    );
};

export default AppliedJobs;