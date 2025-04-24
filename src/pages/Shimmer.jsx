import React from 'react';

const ShimmerCard = () => (
  <div className="w-80 h-80 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse rounded-lg shadow-md" />
);

const Shimmer = () => {
  const shimmerArray = Array.from({ length: 12 });

  return (
    <div className='flex flex-col justify-center items-center bg-black'>
      <h1 className='text-white'>Loading Challenges...</h1>
    <div className="grid grid-cols-4 grid-rows-2 gap-9">
      {shimmerArray.map((_, idx) => (
        <ShimmerCard key={idx} />
      ))}
    </div>
    </div>
  );
};

export default Shimmer;