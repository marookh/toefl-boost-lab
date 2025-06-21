
import React from 'react';
import Header from '@/components/layout/Header';
import ProgressCard from '@/components/dashboard/ProgressCard';
import { Calendar, Target, Trophy, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const progressData = [
    { title: 'Reading', score: 24, maxScore: 30, improvement: 3, color: 'text-blue-600' },
    { title: 'Listening', score: 21, maxScore: 30, improvement: 1, color: 'text-green-600' },
    { title: 'Speaking', score: 18, maxScore: 30, improvement: -1, color: 'text-orange-600' },
    { title: 'Writing', score: 22, maxScore: 30, improvement: 2, color: 'text-purple-600' }
  ];

  const totalScore = progressData.reduce((sum, section) => sum + section.score, 0);
  const totalPossible = progressData.reduce((sum, section) => sum + section.maxScore, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back to your TOEFL Lab</h1>
          <p className="text-gray-600">Track your progress and continue improving your English skills</p>
        </div>

        {/* Overall Score */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Overall TOEFL Score</h2>
              <div className="text-4xl font-bold">{totalScore}/{totalPossible}</div>
              <p className="text-blue-100 mt-2">Keep practicing to reach your target score!</p>
            </div>
            <div className="text-right">
              <Trophy className="w-16 h-16 text-blue-200 mb-2" />
              <p className="text-blue-100">Progress: {Math.round((totalScore / totalPossible) * 100)}%</p>
            </div>
          </div>
        </div>

        {/* Section Scores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {progressData.map((section, index) => (
            <ProgressCard key={index} {...section} />
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Take Practice Test</h3>
            </div>
            <p className="text-gray-600 mb-4">Start a timed practice session to improve your skills</p>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              Start Practice
            </button>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Study Vocabulary</h3>
            </div>
            <p className="text-gray-600 mb-4">Review words using spaced repetition system</p>
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
              Study Words
            </button>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Daily Goal</h3>
            </div>
            <p className="text-gray-600 mb-4">Complete 2 more practice sections today</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-600 h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Completed Reading Practice Test 1</span>
              </div>
              <span className="text-gray-500 text-sm">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">Studied 25 vocabulary words</span>
              </div>
              <span className="text-gray-500 text-sm">Yesterday</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                <span className="text-gray-700">Completed Speaking Section 2</span>
              </div>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
