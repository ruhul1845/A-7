import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { MoonLoader } from 'react-spinners';
import { TimeLine } from '../context/TimeLine';
import { toast } from 'react-toastify';
import { AiTwotoneDelete } from "react-icons/ai";

const FriendDetails = () => {
    const { id } = useParams()

    const [friends, setFriends] = useState([])
    const [loading, setLoading] = useState(true)

    const { Contact, SetContact } = useContext(TimeLine)

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

    const friend = friends.find(element => element.id == id)

    const Handlecall = (type) => {
        const updatedFriend = { ...friend, check: type }  // ✅ no mutation
        SetContact([...Contact, updatedFriend])
        toast.success(`${type} with ${friend.name}`)
    }

    if (loading) return (
        <div className="flex justify-center items-center h-screen">
            <MoonLoader color="#166534" />
        </div>
    )

    if (!friend) return (
        <div className="flex justify-center items-center h-screen">
            <p className="text-gray-500">Friend not found.</p>
        </div>
    )

    return (
        <div className="bg-gray-100 border border-white">
            <div className="max-w-4xl mx-auto p-6 flex items-center gap-6 my-20 ">

                {/* LEFT PROFILE */}
                <div className='flex flex-col items-center text-center'>
                    <div className="col-span-1 shadow rounded-xl p-4  space-y-3 bg-white mb-3">
                        <div className="w-16 h-16 mx-auto rounded-full bg-gray-300 flex items-center justify-center text-xl font-semibold text-white">
                            <img src={friend.picture} alt="img" />
                        </div>
                        <h2 className="font-semibold text-lg">{friend.name}</h2>

                        <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                            {friend.status}
                        </span>

                        <div className="flex gap-2 flex-wrap justify-center mt-3 mr-3">
                            {friend.tags.map((tag, i) => (
                                <span key={i} className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="text-sm text-gray-500 italic">{friend.bio}</p>
                        <p className="text-xs text-gray-400">Preferred: email</p>
                    </div>
                    <div className="space-y-2 w-full">
                        <button className="w-full  p-2 rounded-lg bg-white">Snooze 2 Weeks</button>
                        <button className="w-full  p-2 rounded-lg bg-white">Archive</button>
                        <button className="w-full  p-2 rounded-lg bg-white text-red-500 flex items-center justify-center gap-2" ><AiTwotoneDelete size={18} />Delete</button>
                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div className="col-span-2 space-y-4 ml-4 bg-gray-100 p-4 rounded-xl">

                    {/* STATS */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-xl text-center">
                            <p className="text-3xl font-semibold text-green-800">{friend.days_since_contact}</p>
                            <p className="text-sm text-gray-400 mt-1">Days Since Contact</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl text-center">
                            <p className="text-3xl font-semibold text-green-800">{friend.goal}</p>
                            <p className="text-sm text-gray-400 mt-1">Goal (Days)</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl text-center">
                            <p className="text-2xl font-bold text-green-800">{friend.next_due_date}</p>
                            <p className="text-sm text-gray-400 mt-1">Next Due</p>
                        </div>
                    </div>

                    {/* RELATIONSHIP GOAL */}
                    <div className="bg-white p-5 rounded-xl flex justify-between items-center">
                        <div>
                            <p className="font-semibold text-gray-800">Relationship Goal</p>
                            <p className="text-sm text-gray-500 mt-1">
                                Connect every <span className="font-bold text-gray-800">{friend.goal} days</span>
                            </p>
                        </div>
                        <button className="border border-gray-200 px-4 py-1 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                            Edit
                        </button>
                    </div>

                    {/* QUICK CHECK-IN */}
                    <div className="bg-white p-5 rounded-xl">
                        <h2 className="font-semibold text-gray-800 mb-4">Quick Check-In</h2>
                        <div className="grid grid-cols-3 gap-4">
                            <button
                                onClick={() => Handlecall("call")}
                                className="flex flex-col items-center justify-center p-4 border border-gray-100 rounded-xl hover:bg-gray-50">
                                <span className="text-xl mb-1">📞</span>
                                <span className="text-sm text-gray-600">Call</span>
                            </button>
                            <button
                                onClick={() => Handlecall("text")}
                                className="flex flex-col items-center justify-center p-4 border border-gray-100 rounded-xl hover:bg-gray-50">
                                <span className="text-xl mb-1">💬</span>
                                <span className="text-sm text-gray-600">Text</span>
                            </button>
                            <button
                                onClick={() => Handlecall("video")}
                                className="flex flex-col items-center justify-center p-4 border border-gray-100 rounded-xl hover:bg-gray-50">
                                <span className="text-xl mb-1">🎥</span>
                                <span className="text-sm text-gray-600">Video</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FriendDetails;