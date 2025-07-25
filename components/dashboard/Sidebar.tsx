'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Music, Heart, Clock, Users, Lightbulb, X } from 'lucide-react'

interface SidebarProps {
  onTrackSelect: (track: any) => void
  onToggleSuggestions: () => void
  onToggleCollaboration: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ 
  onTrackSelect, 
  onToggleSuggestions, 
  onToggleCollaboration 
}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('playlists')

  // Mock data for demonstration
  const mockPlaylists = [
    { id: 1, name: 'Liked Songs', icon: Heart, count: 127 },
    { id: 2, name: 'Recently Played', icon: Clock, count: 45 },
    { id: 3, name: 'Summer Vibes', icon: Music, count: 23 },
    { id: 4, name: 'Workout Mix', icon: Music, count: 18 },
    { id: 5, name: 'Chill Beats', icon: Music, count: 32 },
    { id: 6, name: 'Party Anthems', icon: Music, count: 28 },
  ]

  const mockTracks = [
    { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', duration: '3:20', bpm: 171, energy: 'High' },
    { id: 2, title: 'Dance Monkey', artist: 'Tones and I', duration: '3:29', bpm: 98, energy: 'Medium' },
    { id: 3, title: 'Shape of You', artist: 'Ed Sheeran', duration: '3:53', bpm: 96, energy: 'High' },
    { id: 4, title: 'Uptown Funk', artist: 'Mark Ronson ft. Bruno Mars', duration: '4:30', bpm: 115, energy: 'High' },
    { id: 5, title: 'Levitating', artist: 'Dua Lipa', duration: '3:23', bpm: 103, energy: 'High' },
    { id: 6, title: 'Good 4 U', artist: 'Olivia Rodrigo', duration: '2:58', bpm: 140, energy: 'High' },
    { id: 7, title: 'Stay', artist: 'Kid LAROI & Justin Bieber', duration: '2:21', bpm: 170, energy: 'Medium' },
    { id: 8, title: 'As It Was', artist: 'Harry Styles', duration: '2:47', bpm: 174, energy: 'Medium' },
  ]

  return (
    <div className="w-80 glass-panel border-r border-gray-700/30 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-700/30">
        <h2 className="text-h3 font-studio-freight text-text-primary mb-4">
          Your Library
        </h2>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary/60" />
          <input
            type="text"
            placeholder="Search songs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-800/30 border border-gray-700/50 rounded-2xl pl-12 pr-4 py-3 text-text-primary placeholder-text-secondary/60 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 backdrop-blur-sm"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700/30">
        <button
          className={`flex-1 py-4 px-6 text-sm font-medium transition-all duration-300 ${
            activeTab === 'playlists' 
              ? 'text-primary border-b-2 border-primary bg-primary/5' 
              : 'text-text-secondary hover:text-text-primary hover:bg-gray-800/20'
          }`}
          onClick={() => setActiveTab('playlists')}
        >
          Playlists
        </button>
        <button
          className={`flex-1 py-4 px-6 text-sm font-medium transition-all duration-300 ${
            activeTab === 'tracks' 
              ? 'text-primary border-b-2 border-primary bg-primary/5' 
              : 'text-text-secondary hover:text-text-primary hover:bg-gray-800/20'
          }`}
          onClick={() => setActiveTab('tracks')}
        >
          Tracks
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'playlists' ? (
          <div className="p-6 space-y-3">
            {mockPlaylists.map((playlist) => (
              <motion.div
                key={playlist.id}
                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-800/30 cursor-pointer transition-all duration-300 hover:scale-[1.02] transform-gpu"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
              >
                <playlist.icon className="w-5 h-5 text-primary" />
                <div className="flex-1">
                  <p className="text-text-primary text-sm font-medium">{playlist.name}</p>
                  <p className="text-text-secondary text-xs">{playlist.count} songs</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="p-4 space-y-2">
            {mockTracks.map((track) => (
              <motion.div
                key={track.id}
                className="p-4 rounded-2xl hover:bg-gray-800/30 cursor-pointer transition-all duration-300 hover:scale-[1.02] transform-gpu"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
                onClick={() => onTrackSelect(track)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-text-primary text-sm font-medium">{track.title}</p>
                    <p className="text-text-secondary text-xs">{track.artist}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`px-1 py-0.5 rounded text-xs ${
                        track.energy === 'High' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {track.energy}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-text-secondary text-xs">{track.duration}</p>
                    <p className="text-primary text-xs font-medium">{track.bpm} BPM</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="p-6 border-t border-gray-700/30 space-y-3">
        <motion.button
          onClick={onToggleSuggestions}
          className="w-full flex items-center gap-3 p-4 rounded-2xl hover:bg-gray-800/30 transition-all duration-300 text-text-primary"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Lightbulb className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium">Suggestions</span>
        </motion.button>
        
        <motion.button
          onClick={onToggleCollaboration}
          className="w-full flex items-center gap-3 p-4 rounded-2xl hover:bg-gray-800/30 transition-all duration-300 text-text-primary"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Users className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium">Collaborate</span>
        </motion.button>
      </div>
    </div>
  )
}

export default Sidebar 