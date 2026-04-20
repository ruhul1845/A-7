import React, { useContext, useState } from 'react';
import { TimeLine } from '../../context/TimeLine';

import callImg from '../../assests/call.png'
import textImg from '../../assests/text.png'
import videoImg from '../../assests/video.png'
import meetImg from '../../assests/meet.png'

const checkConfig = {
    call: { icon: callImg, bg: 'bg-gray-100', label: 'Call' },
    text: { icon: textImg, bg: 'bg-gray-100', label: 'Text' },
    video: { icon: videoImg, bg: 'bg-gray-100', label: 'Video' },
    meetup: { icon: meetImg, bg: 'bg-yellow-100', label: 'Meetup' },
}

const Timeline = () => {
    const { Contact } = useContext(TimeLine)
    const [filter, setFilter] = useState('all')

    const filtered = filter === 'all'
        ? Contact
        : Contact.filter(f => f.check === filter)

    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="max-w-2xl mx-auto">

                <h2 className="text-3xl font-black text-gray-800 mb-4">Timeline</h2>

                {/* FILTER */}
                <select
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                    className="mb-6 border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-600 bg-white w-48 cursor-pointer"
                >
                    <option value="all">Filter timeline</option>
                    <option value="call">Call</option>
                    <option value="text">Text</option>
                    <option value="video">Video</option>
                    <option value="meetup">Meetup</option>
                </select>

                {/* LIST */}
                <div className="flex flex-col gap-2 max-w-2xl">
                    {filtered.length === 0 && (
                        <p className="text-gray-400 text-sm mt-6">No interactions yet.</p>
                    )}

                    {filtered.map((friend, i) => {
                        const config = checkConfig[friend.check] || checkConfig['call']
                        return (
                            <div key={i} className="bg-white rounded-xl px-5 py-4 flex items-center gap-4 border border-gray-100">

                                {/* IMAGE ICON */}
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${config.bg}`}>
                                    <img src={config.icon} alt={config.label} className="w-5 h-5 object-contain" />
                                </div>

                                {/* INFO */}
                                <div>
                                    <p className="text-sm text-gray-800">
                                        <span className="font-bold text-green-700 capitalize">{config.label}</span>
                                        <span className="text-gray-700 font-normal"> with {friend.name}</span>
                                    </p>
                                    <p className="text-xs text-gray-700 mt-0.5">
                                        {new Date().toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}{' '},
                                        {new Date().toLocaleTimeString('en-US', {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            hour12: true
                                        })}
                                    </p>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Timeline;