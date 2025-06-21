
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import { BookOpen, Users, Clock, Target } from 'lucide-react';

const TOEFLTips = () => {
  const [activeSection, setActiveSection] = useState('reading');

  const sections = [
    { id: 'reading', name: 'Reading', icon: BookOpen, color: 'blue' },
    { id: 'listening', name: 'Listening', icon: Users, color: 'green' },
    { id: 'speaking', name: 'Speaking', icon: Users, color: 'orange' },
    { id: 'writing', name: 'Writing', icon: Target, color: 'purple' }
  ];

  const tips = {
    reading: [
      {
        title: 'Skim Before Reading',
        description: 'Quickly scan the passage for main ideas, topic sentences, and keywords before answering questions.',
        strategy: 'Spend 2-3 minutes skimming to understand the overall structure and main arguments.'
      },
      {
        title: 'Master Question Types',
        description: 'Familiarize yourself with the 10 TOEFL reading question types and develop specific strategies for each.',
        strategy: 'Practice identifying vocabulary, inference, detail, and summary questions quickly.'
      },
      {
        title: 'Time Management',
        description: 'Allocate 20 minutes per passage and 18 minutes for questions to leave time for review.',
        strategy: 'Use the elimination method for difficult questions and make educated guesses when needed.'
      }
    ],
    listening: [
      {
        title: 'Take Effective Notes',
        description: 'Develop a note-taking system using abbreviations and symbols for lectures and conversations.',
        strategy: 'Focus on main ideas, examples, and transitions rather than trying to write everything down.'
      },
      {
        title: 'Predict Content',
        description: 'Use the introduction to predict what the lecture or conversation will cover.',
        strategy: 'Listen for signal words that indicate important information or changes in topic.'
      },
      {
        title: 'Practice Active Listening',
        description: 'Train yourself to identify the purpose, main idea, and attitude of speakers.',
        strategy: 'Pay attention to tone, emphasis, and rhetorical questions that signal important points.'
      }
    ],
    speaking: [
      {
        title: 'Structure Your Response',
        description: 'Use a clear introduction, supporting details, and conclusion for all speaking tasks.',
        strategy: 'Practice the 15-second preparation time to quickly organize your thoughts and main points.'
      },
      {
        title: 'Speak Naturally',
        description: 'Focus on clear pronunciation and natural rhythm rather than perfect grammar.',
        strategy: 'Practice speaking at a steady pace and use connecting words to link your ideas smoothly.'
      },
      {
        title: 'Use Templates',
        description: 'Develop templates for each task type to help organize your responses quickly.',
        strategy: 'Practice transitional phrases like "In my opinion," "For example," and "In conclusion."'
      }
    ],
    writing: [
      {
        title: 'Plan Before Writing',
        description: 'Spend 5 minutes planning your essay structure and main supporting points.',
        strategy: 'Create a simple outline with introduction, 2-3 body paragraphs, and conclusion.'
      },
      {
        title: 'Integrate Sources Effectively',
        description: 'For integrated tasks, clearly connect information from reading and listening passages.',
        strategy: 'Use phrases like "According to the passage" and "The lecturer explains" to cite sources.'
      },
      {
        title: 'Vary Your Language',
        description: 'Demonstrate vocabulary range and sentence variety throughout your essays.',
        strategy: 'Practice using synonyms, complex sentences, and appropriate academic vocabulary.'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">TOEFL Strategy Guide</h1>
          <p className="text-gray-600">Expert tips and strategies for each section of the TOEFL iBT</p>
        </div>

        {/* Section Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeSection === section.id
                    ? `bg-${section.color}-600 text-white`
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{section.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tips Content */}
        <div className="space-y-6">
          {tips[activeSection as keyof typeof tips].map((tip, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className={`w-8 h-8 bg-${sections.find(s => s.id === activeSection)?.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <span className={`text-${sections.find(s => s.id === activeSection)?.color}-600 font-bold text-sm`}>
                    {index + 1}
                  </span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-gray-700 mb-3">{tip.description}</p>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Strategy:</strong> {tip.strategy}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Study Schedule Recommendation */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
          <div className="flex items-center space-x-3 mb-4">
            <Clock className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Recommended Study Schedule</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-500 bg-opacity-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Week 1-2</h3>
              <p className="text-sm text-blue-100">Diagnostic test and skill assessment</p>
            </div>
            <div className="bg-blue-500 bg-opacity-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Week 3-6</h3>
              <p className="text-sm text-blue-100">Focused practice on weak areas</p>
            </div>
            <div className="bg-blue-500 bg-opacity-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Week 7-8</h3>
              <p className="text-sm text-blue-100">Full-length practice tests</p>
            </div>
            <div className="bg-blue-500 bg-opacity-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Final Week</h3>
              <p className="text-sm text-blue-100">Review and test day preparation</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TOEFLTips;
