import React from 'react';
import { FaceFrownIcon } from '@heroicons/react/24/solid'
import { Link, useRouteError, } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900 '>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8 border'>
                <FaceFrownIcon className='w-40 h-40 text-red-500' />
                <div className='max-w-md text-center'>
                    <h2 className='text-3xl text-red-600'>4O4 ERROR PAGE</h2>
                    <p></p>
                    <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
                    </p>
                    <Link to='/' className='btn border p-3 rounded-sm bg-blue-300'>
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;