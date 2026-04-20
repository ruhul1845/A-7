import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip, Cell } from 'recharts';
import { TimeLine } from '../../context/TimeLine';

const COLORS = {
    call: '#1a5c3a',
    text: '#a855f7',
    video: '#22c55e',
    meetup: '#f59e0b',
}

const Stat = () => {
    const { Contact } = useContext(TimeLine)

    const counts = Contact.reduce((acc, friend) => {
        const type = friend.check || 'call'
        acc[type] = (acc[type] || 0) + 1
        return acc
    }, {})

    const data = Object.entries(counts).map(([type, count]) => ({
        name: type.charAt(0).toUpperCase() + type.slice(1),
        value: count,
        fill: COLORS[type] || '#8884d8'
    }))

    return (
        <div className='bg-gray-100 border border-white'>
            <div className=" my-20 p-8">

                {/* ✅ everything centered in one column same alignment */}
                <div className="w-9/12 mx-auto flex flex-col gap-6">

                    <h2 className="text-4xl font-black text-gray-900">Friendship Analytics</h2>

                    <div className="bg-white rounded-2xl p-8">
                        <p className="text-green-800 font-semibold mb-4">By Interaction Type</p>

                        {Contact.length === 0 ? (
                            <p className="text-center text-gray-400 py-20">No interactions yet.</p>
                        ) : (
                            <div className="flex justify-center">
                                <PieChart width={400} height={350}>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={90}
                                        outerRadius={140}
                                        cornerRadius={8}
                                        paddingAngle={5}
                                        dataKey="value"
                                        isAnimationActive={true}
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={index} fill={entry.fill} />
                                        ))}
                                    </Pie>
                                    <Legend />
                                    <Tooltip />
                                </PieChart>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Stat;