import React from 'react';

export default function StarshipCard({ starship }) {
  return (
    <div className="group relative max-w-xs max-h-[150px] overflow-hidden rounded-2xl bg-slate-800 p-6 text-gray-300 transition-all duration-700 ease-out hover:max-w-lg hover:max-h-[500px] hover:shadow-2xl">
      <div>
        <p className="text-2xl font-semibold">{starship.name}</p>
        <p className="text-lg text-gray-400">{starship.model}</p>
      </div>
      <div className="max-h-0 overflow-hidden transition-all duration-700 ease-out group-hover:max-h-[400px]">
        <div className="mt-4 text-sm text-gray-400">
          <p><strong>Cost:</strong> {starship.cost_in_credits} credits</p>
          <p><strong>Length:</strong> {starship.length} meters</p>
          <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
          <p><strong>Crew:</strong> {starship.crew}</p>
          <p><strong>Max Atmospheric Speed:</strong> {starship.max_atmosphering_speed}</p>
        </div>
      </div>
    </div>
  );
}
