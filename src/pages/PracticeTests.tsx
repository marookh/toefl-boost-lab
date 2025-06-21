
import React from 'react';
import Header from '@/components/layout/Header';
import TestCard from '@/components/practice/TestCard';
import { Clock } from 'lucide-react';

const PracticeTests = () => {
  const practiceTests = [
    {
      title: 'Reading Comprehension',
      duration: 54,
      questions: 30,
      description: 'Practice academic reading passages with authentic TOEFL-style questions',
      difficulty: 'Intermediate' as const
    },
    {
      title: 'Listening Comprehension',
      duration: 41,
      questions: 28,
      description: 'Academic lectures and campus conversations with note-taking practice',
      difficulty: 'Advanced' as const
    },
    {
      title: 'Speaking Section',
      duration: 17,
      questions: 4,
      description: 'Independent and integrated speaking tasks with recording capability',
      difficulty: 'Intermediate' as const
    },
    {
      title: 'Writing Section',
      duration: 50,
      questions: 2,
      description: 'Integrated and independent writing tasks with detailed feedback',
      difficulty: 'Advanced' as const
    }
  ];

  const handleStartTest = (testTitle: string) => {
    console.log(`Starting ${testTitle}`);
    // Implementation for starting test
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Practice Tests</h1>
          <p className="text-gray-600">Improve your TOEFL skills with timed practice sessions</p>
        </div>

        {/* Test Simulation Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Full Test Simulation</h2>
              <p className="text-indigo-100 mb-4">Take a complete 3-hour TOEFL iBT practice test with realistic conditions</p>
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Full Test
              </button>
            </div>
            <Clock className="w-20 h-20 text-indigo-200" />
          </div>
        </div>

        {/* Individual Section Tests */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice by Section</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practiceTests.map((test, index) => (
              <TestCard
                key={index}
                {...test}
                onStart={() => handleStartTest(test.title)}
              />
            ))}
          </div>
        </div>

        {/* Quick Practice */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Practice Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-left">
              <h4 className="font-medium text-gray-900 mb-1">Reading Passage</h4>
              <p className="text-sm text-gray-600">Single passage • 20 minutes</p>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors text-left">
              <h4 className="font-medium text-gray-900 mb-1">Listening Lecture</h4>
              <p className="text-sm text-gray-600">One lecture • 10 minutes</p>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors text-left">
              <h4 className="font-medium text-gray-900 mb-1">Speaking Task</h4>
              <p className="text-sm text-gray-600">Independent task • 15 minutes</p>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PracticeTests;
