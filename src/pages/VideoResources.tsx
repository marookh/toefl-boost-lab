
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import { Youtube, Bookmark, BookmarkCheck, Play, Clock } from 'lucide-react';

const VideoResources = () => {
  const [savedVideos, setSavedVideos] = useState<string[]>([]);

  const videoCategories = [
    {
      title: 'Reading Strategies',
      videos: [
        {
          id: '1',
          title: 'TOEFL Reading: How to Skim Effectively',
          channel: 'TOEFL Prep Online',
          duration: '12:45',
          thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=225&fit=crop',
          description: 'Learn essential skimming techniques for TOEFL reading passages'
        },
        {
          id: '2',
          title: 'Mastering Inference Questions',
          channel: 'English Test Prep',
          duration: '15:20',
          thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=225&fit=crop',
          description: 'Complete guide to answering TOEFL reading inference questions'
        }
      ]
    },
    {
      title: 'Listening Practice',
      videos: [
        {
          id: '3',
          title: 'Note-Taking for TOEFL Listening',
          channel: 'Academic English Help',
          duration: '18:30',
          thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=225&fit=crop',
          description: 'Effective note-taking strategies for lectures and conversations'
        },
        {
          id: '4',
          title: 'Understanding Academic Lectures',
          channel: 'TOEFL Success',
          duration: '22:15',
          thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=225&fit=crop',
          description: 'How to follow complex academic discussions and lectures'
        }
      ]
    },
    {
      title: 'Speaking Tips',
      videos: [
        {
          id: '5',
          title: 'TOEFL Speaking: Templates That Work',
          channel: 'Speaking Success',
          duration: '25:40',
          thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=225&fit=crop',
          description: 'Proven templates for all TOEFL speaking tasks'
        }
      ]
    }
  ];

  const toggleSaveVideo = (videoId: string) => {
    setSavedVideos(prev => 
      prev.includes(videoId) 
        ? prev.filter(id => id !== videoId)
        : [...prev, videoId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Video Resources</h1>
          <p className="text-gray-600">Curated YouTube videos to enhance your TOEFL preparation</p>
        </div>

        {/* Saved Videos Section */}
        {savedVideos.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <BookmarkCheck className="w-5 h-5 mr-2 text-blue-600" />
              Saved Videos ({savedVideos.length})
            </h2>
          </div>
        )}

        {/* Video Categories */}
        {videoCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{category.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.videos.map((video) => (
                <div key={video.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {video.duration}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{video.title}</h3>
                      <button
                        onClick={() => toggleSaveVideo(video.id)}
                        className="ml-2 p-1 hover:bg-gray-100 rounded transition-colors"
                      >
                        {savedVideos.includes(video.id) ? (
                          <BookmarkCheck className="w-5 h-5 text-blue-600" />
                        ) : (
                          <Bookmark className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2">{video.channel}</p>
                    <p className="text-sm text-gray-700 mb-4">{video.description}</p>
                    
                    <div className="flex items-center space-x-2">
                      <button className="flex items-center space-x-2 bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 transition-colors text-sm">
                        <Youtube className="w-4 h-4" />
                        <span>Watch on YouTube</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Add Video Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Recommend a Video</h3>
          <p className="text-gray-600 mb-4">Found a helpful TOEFL video? Share it with the community!</p>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Paste YouTube URL here..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Add Video
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VideoResources;
