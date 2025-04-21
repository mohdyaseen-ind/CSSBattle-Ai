import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateChallenges } from '../api/generateChallenges';

const SelectChallenge = () => {
  const [challenges, setChallenges] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChallenges = async () => {
      const generatedChallenges = await generateChallenges(); // Get challenges from Gemini
      console.log("Challenges received in SelectChallenge:", generatedChallenges);
      setChallenges(generatedChallenges);
    };

    fetchChallenges();
  }, []);

  const handleSelectChallenge = (challenge) => {
    console.log("Selected challenge:", challenge);
    navigate('/challenge', {
      state: { html: challenge.html, css: challenge.css, name: challenge.name }
    });
  };

  if (!challenges.length) return <div>Loading challenges...</div>;

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h2 className="text-3xl font-bold mb-6">Choose Your Challenge</h2>

      <div className="flex flex-wrap gap-6">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className="challenge-card p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 cursor-pointer"
            onClick={() => handleSelectChallenge(challenge)}
          >
            <img src={challenge.image} alt="Image" />
            <h3 className="text-xl font-semibold">{challenge.name}</h3>
            <p>{challenge.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectChallenge;