'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Volume2, Settings } from 'lucide-react'

interface WaveformPreviewProps {
  track: any
}

const WaveformPreview: React.FC<WaveformPreviewProps> = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [crossfadeDuration, setCrossfadeDuration] = useState(3)
  const [volume, setVolume] = useState(80)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Mock waveform data with more realistic patterns
  const generateWaveformData = () => {
    const data = []
    for (let i = 0; i < 200; i++) {
      // Create more realistic waveform patterns
      const base = Math.sin(i * 0.1) * 0.3 + 0.5
      const noise = (Math.random() - 0.5) * 0.2
      const beat = Math.sin(i * 0.3) * 0.1
      const value = Math.max(0.1, Math.min(1, base + noise + beat))
      data.push(value)
    }
    return data
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw waveform
    const waveformData = generateWaveformData()
    const barWidth = canvas.width / waveformData.length
    const maxHeight = canvas.height * 0.8

    ctx.fillStyle = '#1DB954'
    waveformData.forEach((value, index) => {
      const height = value * maxHeight
      const x = index * barWidth
      const y = (canvas.height - height) / 2
      
      ctx.fillRect(x, y, barWidth - 1, height)
    })
  }, [track])

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-h3 font-studio-freight text-text-primary">
            Waveform Preview
          </h3>
          <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <Settings className="w-5 h-5 text-text-secondary" />
          </button>
        </div>

        {/* Track Info */}
        <div className="mb-4">
          <p className="text-text-primary font-medium">{track.title}</p>
          <p className="text-text-secondary text-sm">{track.artist}</p>
          <div className="flex items-center gap-4 mt-2 text-xs text-text-secondary">
            <span>{track.duration}</span>
            <span>{track.bpm} BPM</span>
            <span>Key: C Major</span>
          </div>
        </div>

        {/* Play Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-3 bg-primary hover:bg-green-500 rounded-full transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white ml-1" />
            )}
          </button>
          
          <div className="flex items-center gap-2 flex-1">
            <Volume2 className="w-4 h-4 text-text-secondary" />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <span className="text-xs text-text-secondary w-8">{volume}%</span>
          </div>
        </div>
      </div>

      {/* Waveform */}
      <div className="flex-1 p-4">
        <div className="waveform-container h-full">
          <canvas
            ref={canvasRef}
            width={400}
            height={200}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Crossfade Controls */}
      <div className="p-4 border-t border-gray-800">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-text-primary">
              Crossfade Duration
            </label>
            <span className="text-sm text-text-secondary">{crossfadeDuration}s</span>
          </div>
          <input
            type="range"
            min="0"
            max="10"
            step="0.5"
            value={crossfadeDuration}
            onChange={(e) => setCrossfadeDuration(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

        {/* Auto-Mix Options */}
        <div className="space-y-2">
          <button className="w-full btn-primary text-sm">
            Apply Auto-Mix
          </button>
          <button className="w-full btn-secondary text-sm">
            Preview Mix
          </button>
        </div>
      </div>
    </div>
  )
}

export default WaveformPreview 