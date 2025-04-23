import React, { useContext } from 'react';
import { UserContext } from '../UserContext'; // Import UserContext
import { useNavigate } from 'react-router-dom';

const Leaderboard = () => {
    const user = useContext(UserContext); // Consume the UserContext to get the user data
    const navigate = useNavigate();

    // You can use the user object here, for example, display the user's name
    if (!user) {
        return <div>Please log in to see the leaderboard.</div>;
    }

    // Example of handling navigation or rendering user-specific data
    function handleViewProfile() {
        navigate('/profile', {
            state: { userId: user.uid, userName: user.displayName }
        });
    }

    return (
        <div className="min-h-screen bg-black text-white p-6">
            <h2 className="text-3xl font-bold mb-4">Leaderboard</h2>

            {/* Displaying the logged-in user's name */}
            <div className="mb-4">
                <h3 className="text-xl font-semibold">Hello, {user.displayName}</h3>
                <p>Email: {user.email}</p>
            </div>

            <div className="mt-8 text-center">
                <button
                    onClick={handleViewProfile}
                    className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold text-white"
                >
                    View Profile
                </button>
            </div>

            {/* Add leaderboard content here */}
        </div>
    );
};

export default Leaderboard;