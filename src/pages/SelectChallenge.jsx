import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateChallenges } from '../api/generateChallenges';
import Shimmer from './Shimmer';

const SelectChallenge = () => {
  const [challenges, setChallenges] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChallenges = async () => {
      const generatedChallenges = await generateChallenges();
      setChallenges(generatedChallenges);
    };

    fetchChallenges();
  }, []);

  const handleSelectChallenge = (challenge) => {
    navigate('/challenge', {
      state: { aiHtml: challenge.html, name: challenge.name }
    });
  };

  if (!challenges.length) return <Shimmer/>;

  return (
    <div className="min-h-min bg-black text-white p-6">
      <h2 className="text-3xl font-bold mb-6">Choose Your Challenge</h2>

      <div className="grid grid-cols-4 grid-rows-2 gap-10">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className="challenge-card p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 cursor-pointer"
            onClick={() => handleSelectChallenge(challenge)}
          >
            <iframe
              title={challenge.name}
              style={{ width: '100%', height: '300px', border: '1px solid #ccc', borderRadius: '8px' }}
              sandbox=""
              srcDoc={challenge.html}
            />
            <h3 className="text-xl font-semibold">{challenge.name}</h3>
            <p>{challenge.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectChallenge;