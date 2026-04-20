import React from 'react';
import { Link } from 'react-router';

const FriendShow = ({ friend }) => {
    const getStatusColor = (status) => {
        if (status === "overdue") return "bg-red-500";
        if (status === "on-track") return "bg-green-600";
        if (status === "almost-due") return "bg-yellow-400 text-black";
        return "bg-gray-400";
    };
    return (
        <Link to={`/friend/${friend.id}`}>
            <div className="bg-white rounded-xl shadow-sm p-6 text-center w-64">


                {/* Avatar placeholder */}
                <div className="w-16 h-16 mx-auto rounded-full bg-gray-300 flex items-center justify-center text-xl font-semibold text-white">
                    <img src={friend.picture} alt="img" />
                </div>

                {/* Name */}
                <div className="mt-4 text-lg font-semibold text-gray-800">
                    {friend.name}
                </div>

                {/* Days since contact */}
                <div className="text-sm text-gray-500 mt-1">
                    {friend.days_since_contact}d ago
                </div>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                    {friend.tags.map((tag, index) => (
                        <div
                            key={index}
                            className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700"
                        >
                            {tag.toUpperCase()}
                        </div>
                    ))}
                </div>

                {/* Status */}
                <div className="mt-3">
                    <div
                        className={`inline-block text-xs px-3 py-1 rounded-full text-white ${getStatusColor(
                            friend.status
                        )}`}
                    >
                        {friend.status.replace("-", " ").toUpperCase()}
                    </div>
                </div>

            </div>
        </Link>
    );
};

export default FriendShow;