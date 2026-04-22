import React, { useState, useEffect } from 'react';
import { MoonLoader } from 'react-spinners';
import FriendShow from './FriendShow';

const Friend = () => {
    const [friends, setFriends] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/friend.json')
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    setFriends(data)
                    setLoading(false)
                }, 2000)
            })
    }, [])

    const onTrack = friends.filter(f => f.status === 'on_track').length
    const overdue = friends.filter(f => f.status === 'overdue').length

    return (
        <div className="bg-gray-100">

            <div className="flex gap-5 justify-center bg-gray-100 p-10 mb-4">
                <div className="bg-white rounded-xl shadow-sm px-8 py-6 text-center w-48">
                    <div className="text-2xl font-semibold text-green-800">{friends.length}</div>
                    <div className="text-sm text-gray-500 mt-2">Total Friends</div>
                </div>
                <div className="bg-white rounded-xl shadow-sm px-8 py-6 text-center w-48">
                    <div className="text-2xl font-semibold text-green-800">{onTrack}</div>
                    <div className="text-sm text-gray-500 mt-2">On Track</div>
                </div>
                <div className="bg-white rounded-xl shadow-sm px-8 py-6 text-center w-48">
                    <div className="text-2xl font-semibold text-green-800">{overdue}</div>
                    <div className="text-sm text-gray-500 mt-2">Need Attention</div>
                </div>
                <div className="bg-white rounded-xl shadow-sm px-8 py-6 text-center w-48">
                    <div className="text-2xl font-semibold text-green-800">12</div>
                    <div className="text-sm text-gray-500 mt-2">Interactions This Month</div>
                </div>
            </div>

            <div className="border border-gray-200 mx-auto max-w-[58%] mb-8" />

            <div className="flex flex-col relative">
                <h2 className="text-3xl font-black absolute top-0 my-4 left-95 ">
                    Your Friends
                </h2>
                <div className="flex items-center justify-center mt-16">
                    {loading
                        ? <MoonLoader color="#166534" className='my-10' />
                        : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto my-8 ">
                            {friends.map((friend) => (
                                <FriendShow key={friend.id} friend={friend} />
                            ))}
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default Friend;