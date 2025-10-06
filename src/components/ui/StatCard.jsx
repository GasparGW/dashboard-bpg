import React from 'react';

const StatCard = ({ label, value, sublabel, color = 'blue' }) => {
  const colorClasses = {
    red: 'text-red-400',
    yellow: 'text-yellow-400',
    blue: 'text-blue-400',
    green: 'text-green-400'
  };

  return (
    <div className="bg-slate-700 rounded-lg p-4">
      <div className="text-sm text-slate-400 mb-1">{label}</div>
      <div className={`text-3xl font-bold ${colorClasses[color]}`}>
        {value}
      </div>
      {sublabel && (
        <div className="text-xs text-slate-400 mt-1">{sublabel}</div>
      )}
    </div>
  );
};

export default StatCard;