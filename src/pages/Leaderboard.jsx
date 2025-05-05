import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const leaderboardQuery = query(
      collection(db, "leaderboard"),
      orderBy('score', 'asc'),
      limit(10)
    );

    const unsubscribe = onSnapshot(leaderboardQuery, (snapshot) => {
      const leaderboardData = snapshot.docs.map(doc => doc.data());
      setLeaderboard(leaderboardData);
      setLoading(false);
    });

    return () => unsubscribe(); // Always clean up listeners
  }, []);

  const getMedal = (rank) => {
    if (rank === 0) return '🥇';
    if (rank === 1) return '🥈';
    if (rank === 2) return '🥉';
    return rank + 1;
  };

  return (
    <div className="min-h-screen bg-[#1d1e20] text-white flex flex-col items-center justify-start pt-20 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
        Global Leaderboard
      </h1>

      <div className="w-full max-w-4xl">
        {loading ? (
          <p className="text-center text-gray-400">Loading leaderboard... ⏳</p>
        ) : leaderboard.length === 0 ? (
          <p className="text-center text-gray-400">No leaderboard data yet!</p>
        ) : (
          <table className="w-full table-auto text-center border-collapse">
            <thead>
              <tr className="text-purple-300 text-lg">
                <th className="py-3 border-b border-gray-600">Rank</th>
                <th className="py-3 border-b border-gray-600">Name</th>
                <th className="py-3 border-b border-gray-600">Score (ms)</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry, index) => (
                <tr key={index} className="hover:bg-[#292b30] transition">
                  <td className="py-4">{getMedal(index)}</td>
                  <td className="py-4">{entry.name}</td>
                  <td className="py-4">{entry.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;