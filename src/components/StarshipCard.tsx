import React, { useState } from 'react';

export default function StarshipCard({ starship }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={`w-2/4 rounded-2xl bg-zinc-900 p-6 text-gray-300 shadow-md transition-all duration-1000 ease-out`}>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-2xl font-semibold">{starship.name}</p>
          <p className="text-lg text-gray-400">{starship.model}</p>
        </div>
        <button
          onClick={toggleExpand}
          className="text-xs text-blue-400 underline focus:outline-none transition-all duration-300 cursor-pointer hover:text-blue hover:drop-shadow-[0_0_7px_rgba(255,255,255,0.7)] hover:font-medium"
        >
          {isExpanded ? 'View less' : 'View more'}
        </button>
      </div>
      {isExpanded && (
        <div className="mt-4 text-sm text-gray-400">
          <p>
            <strong>Cost:</strong> {starship.cost_in_credits} credits
          </p>
          <p>
            <strong>Length:</strong> {starship.length} meters
          </p>
          <p>
            <strong>Manufacturer:</strong> {starship.manufacturer}
          </p>
          <p>
            <strong>Crew:</strong> {starship.crew}
          </p>
          <p>
            <strong>Max Atmospheric Speed:</strong> {starship.max_atmosphering_speed}
          </p>
        </div>
      )}
    </div>
  );
}
