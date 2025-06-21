
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import FlashCard from '@/components/vocabulary/FlashCard';
import { Plus, BookOpen, Trophy, TrendingUp } from 'lucide-react';

const Vocabulary = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showFlashcards, setShowFlashcards] = useState(false);

  const vocabularyWords = [
    {
      word: 'Meticulous',
      definition: 'Showing great attention to detail; very careful and precise',
      example: 'The researcher was meticulous in documenting every observation during the experiment.'
    },
    {
      word: 'Paradigm',
      definition: 'A typical example or pattern of something; a model',
      example: 'The new teaching method represents a paradigm shift in education.'
    },
    {
      word: 'Ubiquitous',
      definition: 'Present, appearing, or found everywhere',
      example: 'Smartphones have become ubiquitous in modern society.'
    }
  ];

  const handleNextCard = () => {
    setCurrentCardIndex((prev) => (prev + 1) % vocabularyWords.length);
  };

  const handleDifficulty = (level: 'easy' | 'medium' | 'hard') => {
    console.log(`Word rated as: ${level}`);
    // Implementation for spaced repetition algorithm
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Vocabulary Trainer</h1>
          <p className="text-gray-600">Build your academic vocabulary with spaced repetition</p>
        </div>

        {!showFlashcards ? (
          <>
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center space-x-3 mb-2">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">247</div>
                    <div className="text-sm text-gray-600">Words Learned</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center space-x-3 mb-2">
                  <Trophy className="w-8 h-8 text-yellow-500" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">7</div>
                    <div className="text-sm text-gray-600">Day Streak</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center space-x-3 mb-2">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">89%</div>
                    <div className="text-sm text-gray-600">Accuracy Rate</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center space-x-3 mb-2">
                  <Plus className="w-8 h-8 text-purple-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">15</div>
                    <div className="text-sm text-gray-600">Due Today</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Study Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Study Session</h3>
                <p className="text-gray-600 mb-4">Review words using spaced repetition algorithm</p>
                <button 
                  onClick={() => setShowFlashcards(true)}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Start Studying
                </button>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Quiz</h3>
                <p className="text-gray-600 mb-4">Test your knowledge with multiple choice questions</p>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                  Take Quiz
                </button>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Add Words</h3>
                <p className="text-gray-600 mb-4">Add new vocabulary from wordlists or manually</p>
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
                  Add Words
                </button>
              </div>
            </div>

            {/* Word Lists */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Available Word Lists</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer">
                  <h4 className="font-medium text-gray-900 mb-1">Academic Word List</h4>
                  <p className="text-sm text-gray-600 mb-2">570 essential academic words</p>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Popular</span>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:border-green-300 hover:bg-green-50 transition-colors cursor-pointer">
                  <h4 className="font-medium text-gray-900 mb-1">TOEFL High Frequency</h4>
                  <p className="text-sm text-gray-600 mb-2">300 most common TOEFL words</p>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Recommended</span>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 hover:bg-purple-50 transition-colors cursor-pointer">
                  <h4 className="font-medium text-gray-900 mb-1">Advanced Vocabulary</h4>
                  <p className="text-sm text-gray-600 mb-2">500 challenging academic terms</p>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Advanced</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <button 
                onClick={() => setShowFlashcards(false)}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                ← Back to Vocabulary
              </button>
              <div className="text-gray-600">
                Card {currentCardIndex + 1} of {vocabularyWords.length}
              </div>
            </div>
            
            <FlashCard
              {...vocabularyWords[currentCardIndex]}
              onNext={handleNextCard}
              onDifficulty={handleDifficulty}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Vocabulary;
