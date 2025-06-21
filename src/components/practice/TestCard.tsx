
import React from 'react';
import { Timer, BookOpen, Users } from 'lucide-react';

interface TestCardProps {
  title: string;
  duration: number;
  questions: number;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  onStart: () => void;
}

const TestCard = ({ title, duration, questions, description, difficulty, onStart }: TestCardProps) => {
  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Advanced: 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[difficulty]}`}>
          {difficulty}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
        <div className="flex items-center space-x-1">
          <Timer className="w-4 h-4" />
          <span>{duration} min</span>
        </div>
        <div className="flex items-center space-x-1">
          <BookOpen className="w-4 h-4" />
          <span>{questions} questions</span>
        </div>
      </div>
      
      <button
        onClick={onStart}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
      >
        Start Practice Test
      </button>
    </div>
  );
};

export default TestCard;
