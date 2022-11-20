import React from 'react';

const Loader = () => {
    return (<div className='flex justify-center mt-6 items-center'>
        <h2 className="text-6xl">L</h2>
        <p className="w-14 h-14  border-4 border-dashed rounded-full  animate-spin border-red-700"></p>
        <span className='text-6xl'>ading........</span>
    </div>

    );
};

export default Loader;