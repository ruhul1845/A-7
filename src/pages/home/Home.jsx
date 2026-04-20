import React from 'react';
import Friend from '../../componenets/Friend';

const Home = () => {
    return (
        <>
            <div className='bg-gray-100 border border-white'>
                <div className="h-49  flex flex-col items-center justify-center gap-y-3 my-6 p-6">

                    <h1 className="text-4xl font-bold text-gray-900 tracking-tight leading-tight max-w-2xl">
                        Friends to keep close in your life
                    </h1>

                    {/* Subheading */}
                    <p className="mt-4 text-sm text-gray-600 max-w-sm leading-relaxed">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the
                        relationships that matter most.
                    </p>
                    <button className="btn bg-emerald-800 hover:bg-emerald-900 text-white border-none mt-2">
                        + Add a Friend
                    </button>

                </div>
                <Friend />
            </div>

        </>
    );
};

export default Home;