'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Music, Users, Settings, Play, Pause, SkipForward, SkipBack } from 'lucide-react'
import Sidebar from '@/components/dashboard/Sidebar'
import PlaylistCanvas from '@/components/dashboard/PlaylistCanvas'
import WaveformPreview from '@/components/dashboard/WaveformPreview'
import SuggestionsPanel from '@/components/dashboard/SuggestionsPanel'
import CollaborationPanel from '@/components/dashboard/CollaborationPanel'
import Navigation from '@/components/dashboard/Navigation'
import StatusIndicator from '@/components/dashboard/StatusIndicator'

export default function DashboardPage() {
  const [selectedTrack, setSelectedTrack] = useState<any>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [showCollaboration, setShowCollaboration] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-gray-950 to-background flex">
      {/* Sidebar */}
      <Sidebar 
        onTrackSelect={setSelectedTrack}
        onToggleSuggestions={() => setShowSuggestions(!showSuggestions)}
        onToggleCollaboration={() => setShowCollaboration(!showCollaboration)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="glass-panel border-b border-gray-700/30 p-6 backdrop-blur-xl">
          <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
            <h1 className="text-h2 font-studio-freight text-text-primary">
              DJ Mixer
            </h1>
            <StatusIndicator 
              totalTracks={5}
              isPlaying={isPlaying}
              collaborators={0}
            />
          </div>
            
            {/* Player Controls */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                <SkipBack className="w-5 h-5 text-text-secondary" />
              </button>
              
              <motion.button 
                className="p-4 bg-gradient-to-r from-primary to-green-400 hover:from-green-400 hover:to-primary rounded-full transition-all duration-300 shadow-2xl shadow-primary/30 hover:shadow-primary/50"
                onClick={() => setIsPlaying(!isPlaying)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-white" />
                ) : (
                  <Play className="w-6 h-6 text-white ml-1" />
                )}
              </motion.button>
              
              <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                <SkipForward className="w-5 h-5 text-text-secondary" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 flex">
          {/* Playlist Canvas */}
          <div className="flex-1 p-6">
            <Navigation />
            <PlaylistCanvas 
              selectedTrack={selectedTrack}
              onTrackSelect={setSelectedTrack}
            />
          </div>

          {/* Waveform Preview */}
          {selectedTrack && (
            <motion.div 
              className="w-96 bg-gray-900/30 border-l border-gray-800"
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 400, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <WaveformPreview track={selectedTrack} />
            </motion.div>
          )}
        </div>
      </div>

      {/* Suggestions Panel */}
      {showSuggestions && (
        <SuggestionsPanel onClose={() => setShowSuggestions(false)} />
      )}

      {/* Collaboration Panel */}
      {showCollaboration && (
        <CollaborationPanel onClose={() => setShowCollaboration(false)} />
      )}
    </div>
  )
} 