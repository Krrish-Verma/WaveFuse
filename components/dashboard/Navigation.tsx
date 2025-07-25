'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Home, Music } from 'lucide-react'
import Link from 'next/link'

const Navigation = () => {
  return (
    <motion.div 
      className="flex items-center gap-2 text-sm text-text-secondary mb-4"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link href="/" className="flex items-center gap-1 hover:text-primary transition-colors">
        <ArrowLeft className="w-4 h-4" />
        <Home className="w-4 h-4" />
        <span>Home</span>
      </Link>
      <span>/</span>
      <div className="flex items-center gap-1 text-primary">
        <Music className="w-4 h-4" />
        <span>DJ Mixer</span>
      </div>
    </motion.div>
  )
}

export default Navigation 