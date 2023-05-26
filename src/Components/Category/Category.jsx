import React from 'react';

const Category = ({ category }) => {
    return (
        <div className='border m-4 p-6 bg-purple-100 hover:bg-purple-200'>
            <img className='mb-4' style={{height:"30px"}} src={category.logo} alt="" />
            <h1 className='text-gray-500 font-bold'>{category.title}</h1>
            <p className='font-thin'>{category.available}</p>
        </div>
    );
};

export default Category;