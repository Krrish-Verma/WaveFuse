'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Music, Users, Clock } from 'lucide-react'

interface StatusIndicatorProps {
  totalTracks: number
  isPlaying: boolean
  collaborators: number
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ totalTracks, isPlaying, collaborators }) => {
  return (
    <motion.div 
      className="flex items-center gap-4 text-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex items-center gap-2 text-text-secondary">
        <Music className="w-4 h-4" />
        <span>{totalTracks} tracks</span>
      </div>
      
      {isPlaying && (
        <motion.div 
          className="flex items-center gap-2 text-primary"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span>Playing</span>
        </motion.div>
      )}
      
      {collaborators > 0 && (
        <div className="flex items-center gap-2 text-text-secondary">
          <Users className="w-4 h-4" />
          <span>{collaborators} collaborators</span>
        </div>
      )}
    </motion.div>
  )
}

export default StatusIndicator 