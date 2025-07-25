'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { X, Music, Heart, Plus } from 'lucide-react'

interface SuggestionsPanelProps {
  onClose: () => void
}

const SuggestionsPanel: React.FC<SuggestionsPanelProps> = ({ onClose }) => {
  // Mock suggestions based on current playlist mood
  const suggestions = [
    {
      id: 1,
      title: 'Levitating',
      artist: 'Dua Lipa',
      duration: '3:23',
      bpm: 103,
      energy: 'High',
      mood: 'Upbeat',
      reason: 'Matches your playlist energy'
    },
    {
      id: 2,
      title: 'Good 4 U',
      artist: 'Olivia Rodrigo',
      duration: '2:58',
      bpm: 140,
      energy: 'High',
      mood: 'Energetic',
      reason: 'Similar BPM to current tracks'
    },
    {
      id: 3,
      title: 'Stay',
      artist: 'Kid LAROI & Justin Bieber',
      duration: '2:21',
      bpm: 170,
      energy: 'Medium',
      mood: 'Melodic',
      reason: 'Complements your mix flow'
    },
    {
      id: 4,
      title: 'As It Was',
      artist: 'Harry Styles',
      duration: '2:47',
      bpm: 174,
      energy: 'Medium',
      mood: 'Chill',
      reason: 'Perfect transition track'
    },
    {
      id: 5,
      title: 'About Damn Time',
      artist: 'Lizzo',
      duration: '3:11',
      bpm: 110,
      energy: 'High',
      mood: 'Confident',
      reason: 'High energy boost'
    }
  ]

  return (
    <motion.div
      className="fixed right-0 top-0 h-full w-96 bg-gray-900/95 backdrop-blur-sm border-l border-gray-800 z-50"
      initial={{ x: 400 }}
      animate={{ x: 0 }}
      exit={{ x: 400 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <h3 className="text-h3 font-studio-freight text-text-primary">
            Suggestions
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-text-secondary" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="mb-6">
            <h4 className="text-lg font-medium text-text-primary mb-2">
              Based on your mix
            </h4>
            <p className="text-text-secondary text-sm">
              We found these tracks that would work well with your current playlist
            </p>
          </div>

          <div className="space-y-3">
            {suggestions.map((track, index) => (
              <motion.div
                key={track.id}
                className="card p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-green-400 rounded-lg flex items-center justify-center">
                    <Music className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="text-text-primary font-medium">{track.title}</h5>
                      <div className="flex items-center gap-2">
                        <button className="p-1 hover:bg-gray-700/50 rounded transition-colors">
                          <Heart className="w-4 h-4 text-text-secondary" />
                        </button>
                        <button className="p-1 hover:bg-gray-700/50 rounded transition-colors">
                          <Plus className="w-4 h-4 text-text-secondary" />
                        </button>
                      </div>
                    </div>
                    
                    <p className="text-text-secondary text-sm mb-2">{track.artist}</p>
                    
                    <div className="flex items-center gap-4 text-xs text-text-secondary">
                      <span>{track.duration}</span>
                      <span>{track.bpm} BPM</span>
                      <span className="text-primary">{track.energy} Energy</span>
                    </div>
                    
                    <p className="text-xs text-text-secondary mt-2">
                      {track.reason}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-800">
          <button className="w-full btn-primary">
            Add All to Playlist
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default SuggestionsPanel 