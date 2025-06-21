
import React from 'react';

interface ProgressCardProps {
  title: string;
  score: number;
  maxScore: number;
  improvement: number;
  color: string;
}

const ProgressCard = ({ title, score, maxScore, improvement, color }: ProgressCardProps) => {
  const percentage = (score / maxScore) * 100;
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className={`text-2xl font-bold ${color}`}>
          {score}/{maxScore}
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Progress</span>
          <span>{Math.round(percentage)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${color.replace('text', 'bg')}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
      
      <div className="flex items-center text-sm">
        <span className="text-gray-600">Recent improvement:</span>
        <span className={`ml-2 font-medium ${improvement >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {improvement >= 0 ? '+' : ''}{improvement} points
        </span>
      </div>
    </div>
  );
};

export default ProgressCard;
