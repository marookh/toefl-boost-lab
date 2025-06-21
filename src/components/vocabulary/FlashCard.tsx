
import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

interface FlashCardProps {
  word: string;
  definition: string;
  example: string;
  onNext: () => void;
  onDifficulty: (level: 'easy' | 'medium' | 'hard') => void;
}

const FlashCard = ({ word, definition, example, onNext, onDifficulty }: FlashCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="max-w-md mx-auto">
      <div 
        className={`relative w-full h-64 cursor-pointer transition-transform duration-500 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of card */}
        <div className={`absolute inset-0 bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col items-center justify-center p-6 ${isFlipped ? 'opacity-0' : 'opacity-100'}`}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{word}</h2>
          <p className="text-gray-500 text-center">Click to reveal definition</p>
          <RotateCcw className="w-5 h-5 text-gray-400 mt-2" />
        </div>
        
        {/* Back of card */}
        <div className={`absolute inset-0 bg-blue-50 rounded-xl shadow-lg border border-blue-200 p-6 ${isFlipped ? 'opacity-100' : 'opacity-0'}`}>
          <div className="h-full flex flex-col">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">{word}</h3>
            <p className="text-gray-700 mb-4 flex-grow">{definition}</p>
            <div className="bg-white p-3 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-600 italic">"{example}"</p>
            </div>
          </div>
        </div>
      </div>
      
      {isFlipped && (
        <div className="mt-6 space-y-3">
          <p className="text-center text-gray-600 text-sm">How difficult was this word?</p>
          <div className="flex space-x-2">
            <button
              onClick={() => { onDifficulty('easy'); onNext(); }}
              className="flex-1 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
            >
              Easy
            </button>
            <button
              onClick={() => { onDifficulty('medium'); onNext(); }}
              className="flex-1 bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors"
            >
              Medium
            </button>
            <button
              onClick={() => { onDifficulty('hard'); onNext(); }}
              className="flex-1 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
            >
              Hard
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlashCard;
