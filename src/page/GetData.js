import React, { useState, useEffect } from 'react';

const GetData = () => {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('https://niche-site-backend.onrender.com/')
            .then(response => response.json())
            .then(data => setAllData(data))
            .catch(error => console.error('Error fetching data:', error));
    };

    return (
        <div className='container'>
            <h1 className='homepage__title'>All Links from users</h1>
            {allData.map((item, index) => (
                <div key={index}>
                    <p>Link: {item.title}</p>
                    <p>Description: {item.description}</p>
                    <hr/>
                </div>
            ))}
        </div>
    );
};

export default GetData;
