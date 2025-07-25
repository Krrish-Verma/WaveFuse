'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { GripVertical, Play, Pause, Trash2, Plus } from 'lucide-react'

interface PlaylistCanvasProps {
  selectedTrack: any
  onTrackSelect: (track: any) => void
}

const PlaylistCanvas: React.FC<PlaylistCanvasProps> = ({ selectedTrack, onTrackSelect }) => {
  const [playlist, setPlaylist] = useState([
    { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', duration: '3:20', bpm: 171, isPlaying: false, energy: 'High', key: 'C Major' },
    { id: 2, title: 'Dance Monkey', artist: 'Tones and I', duration: '3:29', bpm: 98, isPlaying: false, energy: 'Medium', key: 'A Minor' },
    { id: 3, title: 'Shape of You', artist: 'Ed Sheeran', duration: '3:53', bpm: 96, isPlaying: false, energy: 'High', key: 'C# Minor' },
    { id: 4, title: 'Levitating', artist: 'Dua Lipa', duration: '3:23', bpm: 103, isPlaying: false, energy: 'High', key: 'F Major' },
    { id: 5, title: 'Good 4 U', artist: 'Olivia Rodrigo', duration: '2:58', bpm: 140, isPlaying: false, energy: 'High', key: 'G Major' },
  ])

  const handleTrackClick = (track: any) => {
    onTrackSelect(track)
  }

  const handlePlayPause = (trackId: number) => {
    setPlaylist(prev => prev.map(track => ({
      ...track,
      isPlaying: track.id === trackId ? !track.isPlaying : false
    })))
  }

  const handleRemoveTrack = (trackId: number) => {
    setPlaylist(prev => prev.filter(track => track.id !== trackId))
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-h3 font-studio-freight text-text-primary">
          Playlist Canvas
        </h2>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Track
        </button>
      </div>

      {/* Playlist */}
      <div className="flex-1 glass-panel p-6">
        {playlist.length === 0 ? (
          <div className="h-full flex items-center justify-center text-text-secondary">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8" />
              </div>
              <p className="text-lg font-medium mb-2">Your playlist is empty</p>
              <p className="text-sm">Drag tracks from the sidebar to start building your mix</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {playlist.map((track, index) => (
              <motion.div
                key={track.id}
                className={`playlist-item flex items-center gap-6 ${
                  selectedTrack?.id === track.id ? 'border-primary/50 bg-primary/10 ring-2 ring-primary/30' : ''
                } ${track.isPlaying ? 'ring-2 ring-primary/50 shadow-lg shadow-primary/20' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleTrackClick(track)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Drag Handle */}
                <div className="drag-handle p-1">
                  <GripVertical className="w-4 h-4 text-text-secondary" />
                </div>

                {/* Track Info */}
                <div className="flex-1">
                  <p className="text-text-primary font-medium">{track.title}</p>
                  <p className="text-text-secondary text-sm">{track.artist}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      track.energy === 'High' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {track.energy} Energy
                    </span>
                    <span className="text-xs text-text-secondary">{track.key}</span>
                  </div>
                </div>

                {/* BPM */}
                <div className="text-center">
                  <p className="text-text-secondary text-xs">BPM</p>
                  <p className="text-primary text-sm font-medium">{track.bpm}</p>
                </div>

                {/* Duration */}
                <div className="text-center">
                  <p className="text-text-secondary text-xs">Duration</p>
                  <p className="text-text-primary text-sm">{track.duration}</p>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-3">
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation()
                      handlePlayPause(track.id)
                    }}
                    className="p-3 hover:bg-gray-700/30 rounded-xl transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {track.isPlaying ? (
                      <Pause className="w-5 h-5 text-primary" />
                    ) : (
                      <Play className="w-5 h-5 text-primary" />
                    )}
                  </motion.button>
                  
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleRemoveTrack(track.id)
                    }}
                    className="p-3 hover:bg-red-500/20 hover:text-red-400 rounded-xl transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Trash2 className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Auto-Mix Button */}
      {playlist.length > 1 && (
        <div className="mt-6">
          <button className="w-full btn-primary flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Auto-Mix Playlist
          </button>
        </div>
      )}
    </div>
  )
}

export default PlaylistCanvas 