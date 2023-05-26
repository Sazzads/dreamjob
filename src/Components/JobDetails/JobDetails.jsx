import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../Utils/fakeDB';

const JobDetails = () => {
    const { id } = useParams()
    // console.log(id);
    const jobs = useLoaderData()
    // console.log(jobs);
    const [jobData, setJobData] = useState(null)
    useEffect(() => {
        if (jobs) {
            const jobsdata = jobs.find(job => job.id === id)
            setJobData(jobsdata)
        }
    }, [jobs, id])

    // console.log(jobData);

    if (!jobData) {
        return <div>Loading...</div>;
    }

    const handleAddToJob = () => {
        // console.log(id);
        addToDb(id)
    }
    return (
        <div className='my-container'>
            <h1 className='text-center text-5xl font-bold mb-20'>Job Details</h1>
            <div className=" grid md:grid-flow-col">

                <div className=' pe-10 text-justify p-3'>
                    <p className='mb-5 font-thin'><span className='font-bold'>Job Description:</span> {jobData.description}</p>
                    <p className='mb-5 font-thin'><span className="font-bold"> Job Responsibility: </span>{jobData.responsibility}</p>
                    <p className='mb-5 font-thin'><span className='font-bold'>Educational Requirements: </span> {jobData.requirements}</p>
                    <p className='mb-5 font-thin'><span className='font-bold'>Experiences: </span>{jobData.experiences}</p>
                </div>
                <div className="ss">
                    <div className='hover:bg-blue-100 bg-blue-50 p-3'>
                        <div>
                            <h4 className='my-3  font-bold'>Job Details</h4>
                            <hr className='w-3/4 mb-3' />
                            <p className='mb-2'>Salary: <span className='font-thin'>{jobData.salary}</span></p>
                            <p className='mb-2'>Job Title: <span className='font-thin'>{jobData.name}</span></p>


                            <h4 className='my-3 font-bold'>Contact Information</h4>
                            <hr className='w-3/4 mb-3' />
                            <p className='mb-2'>Phone: <span className='font-thin'>{jobData.phone}</span></p>
                            <p className='mb-2'>Email: <span className='font-thin'>{jobData.email}</span></p>
                            <p className='mb-2'>Address: <span className='font-thin'>{jobData.location}</span></p>
                        </div>

                    </div>
                    <Link onClick={() => handleAddToJob(id)} to='' className='btn md:w-auto md:mr-4 mt-4'>
                        <div className='inline-flex  items-center justify-center w-full h-full'>
                            <p className='mr-3'>Apply Now </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;