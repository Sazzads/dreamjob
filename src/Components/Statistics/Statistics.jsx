import React, { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import axios from 'axios';







const Statistics = () => {

    const [marks, setMarks] = useState([])




    useEffect(() => {
        // fetch('marks.json')
        //     .then(res => res.json())
        //     .then(data => setMarks(data))
        axios.get('marks.json')
            .then(data => {
                const loadedData = data.data;
                // console.log(loadedData);
                setMarks(loadedData);
            })
    }, [])

    return (
        <div className='my-container'>
            <h1 className='text-center text-6xl font-bold text-gray-500 mb-10' >My Assignment marks</h1>

            <div className='flex flex-col items-center '>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={marks} width={480} height={360}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis />
                    <Radar name="Marks" dataKey="marks" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Tooltip />
                </RadarChart>
            </div>



        </div >
    );
};

export default Statistics;