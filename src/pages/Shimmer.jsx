import React from 'react';

const ShimmerCard = () => (
  <div className="w-64 h-40 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse rounded-lg shadow-md" />
);

const Shimmer = () => {
  const shimmerArray = Array.from({ length: 10 });

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {shimmerArray.map((_, idx) => (
        <ShimmerCard key={idx} />
      ))}
    </div>
  );
};

export default Shimmer;