'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Music2, Youtube } from 'lucide-react'

const OAuthButtons = () => {
  const handleSpotifyLogin = () => {
    // TODO: Implement Spotify OAuth
    console.log('Spotify login clicked')
  }

  const handleYouTubeLogin = () => {
    // TODO: Implement YouTube OAuth
    console.log('YouTube login clicked')
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
          className="flex items-center gap-3 bg-[#1DB954] hover:bg-[#1ed760] text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
          onClick={handleSpotifyLogin}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Music2 className="w-6 h-6" />
          Sign in with Spotify
        </motion.button>

      <motion.button
        className="flex items-center gap-3 bg-[#FF0000] hover:bg-[#ff1a1a] text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
        onClick={handleYouTubeLogin}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Youtube className="w-6 h-6" />
        Sign in with YouTube
      </motion.button>
    </div>
  )
}

export default OAuthButtons 