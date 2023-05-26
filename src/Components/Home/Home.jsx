import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import coverPic from '../../../src/assets/images/cover.png'
import Category from '../Category/Category';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'


const Home = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const jobs = useLoaderData()
    // console.log(jobs);

    // start slice 4 data
    const [showAllJobs, setShowAllJobs] = useState(false);

    // const handleSeeAllJobsClick = () => {
    //     setShowAllJobs(true) ;

    // };
    const displayedJobs = jobs.slice(0, showAllJobs ? 6 : 4)


    return (
        <div>
            <div className='my-container flex flex-col items-center justify-between lg:flex-row'>
                {/* Text Content */}
                <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
                    <div className='max-w-xl mb-6 lg:mt-8'>

                        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                            The mind is its  own place, and in itself can make a{' '}
                            <span className=' text-blue-400'> heaven of hell,</span><span className='text-blue-400'> a hell of heaven.</span>
                        </h2>
                        <p className='text-base text-gray-700 md:text-lg'>
                            Explore career options. Follow your passion. Rise to your potential. Syracuse University’s programs connect you with leading scientists and scholars who can prepare you for the careers of today and tomorrow.
                        </p>
                    </div>
                    <div className='flex flex-col items-center md:flex-row'>
                        <Link to='/appliedJobs' className='btn md:w-auto md:mr-4'>
                            <div className='inline-flex items-center justify-center w-full h-full'>
                                <p className='mr-3'>Get Started</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='relative lg:w-1/2 '>
                    <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
                        <img src={coverPic} alt="" />
                    </div>
                </div>


            </div>
            {/* job caragorys list started  */}
            <div className='my-container'>
                <div className=' flex flex-col items-center mb-6'>
                    <h1 className='text-3xl font-bold py-3'>Job Category Order</h1>
                    <p className='font-thin'>It takes just one job to develop a successful relationship that can propel your career forward.</p>
                </div>
                <div className=' grid grid-cols-1 md:grid-cols-4 '>
                    {
                        categories.map(category => <Category key={category.id} category={category}></Category>)
                    }
                </div>
            </div>
            {/* Featured Jobs start  */}
            <div className='my-container'>
                <div className=' flex flex-col items-center mb-6'>
                    <h1 className='text-3xl font-bold py-3'>Featured Jobs</h1>
                    <p className='font-thin'>It takes just one job to develop a successful relationship that can propel your career forward.</p>
                </div>
                <div className=' grid grid-cols-1 md:grid-cols-2 justify-center'>
                    {
                        displayedJobs.map(job =>
                            <div key={job.id} className="border p-10 m-10">
                                <img className='h-20 w-35 mb-3' src={job.logo} alt="" />
                                <h3 className='font-bold mb-1'>{job.title}</h3>
                                <p className='font-thin text-sm mb-1'>{job.name}</p>
                                <div className='flex'>
                                    <span className='border px-2 py-1 rounded border-blue-700 hover:bg-blue-200 cursor-pointer me-2'>{job.position1}</span>
                                    <span className='border px-2 py-1 rounded border-blue-700 hover:bg-blue-200 cursor-pointer'>{job.position2}</span>
                                </div>
                                <div className='flex'>
                                    <span className='flex text-sm my-2 me-3'>
                                        <MapPinIcon className="h-5 w-5 text-gray-500  " />{job.location}
                                    </span>
                                    <span className='flex text-sm my-2'>
                                        <CurrencyDollarIcon className="h-5 w-5 text-gray-500 " />{job.salary}
                                    </span>
                                </div>
                                <div className='flex flex-col items-center md:flex-row'>
                                    <Link to={`/job/${job.id}`} className='btn md:w-auto md:mr-4'>
                                        <div className='inline-flex  items-center justify-center w-full h-full'>
                                            <p className='mr-3'>View Details</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                </div>

                {
                    showAllJobs ||
                    <Link onClick={() => setShowAllJobs(!showAllJobs)} to='/' className='flex justify-center'>
                        <span className='py-4 px-10  bg-blue-400 hover:bg-blue-700 rounded text-white'>See All Jobs</span>
                    </Link>
                }
            </div>

        </div>

    );
};

export default Home;