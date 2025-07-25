'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Music, Music2, Youtube, Users, Share2, Download } from 'lucide-react'
import HeroBanner from '@/components/HeroBanner'
import FeatureSection from '@/components/FeatureSection'
import OAuthButtons from '@/components/OAuthButtons'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <HeroBanner />
      
      {/* OAuth Login Section */}
      <section className="py-20 px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-h2 font-studio-freight mb-8">
            Import Your Music
          </h2>
          <p className="text-text-secondary text-body mb-12 max-w-2xl mx-auto">
            Connect your Spotify or YouTube account to import your playlists and start creating seamless mixes
          </p>
          <OAuthButtons />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-h2 font-studio-freight text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Create Perfect Mixes
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureSection 
              icon={<Music className="w-8 h-8" />}
              title="Drag & Drop Playlists"
              description="Arrange your tracks with intuitive drag-and-drop interface and waveform previews"
              delay={0.1}
            />
            <FeatureSection 
              icon={<Music2 className="w-8 h-8" />}
              title="Auto Beat Matching"
              description="Automatic BPM and key analysis for seamless transitions between tracks"
              delay={0.2}
            />
            <FeatureSection 
              icon={<Users className="w-8 h-8" />}
              title="Real-time Collaboration"
              description="Invite friends to join your session and vote on the next track"
              delay={0.3}
            />
            <FeatureSection 
              icon={<Share2 className="w-8 h-8" />}
              title="Smart Suggestions"
              description="Get track recommendations based on mood and energy of your mix"
              delay={0.4}
            />
            <FeatureSection 
              icon={<Download className="w-8 h-8" />}
              title="Export & Share"
              description="Export your finished mix as MP3 or share via link"
              delay={0.5}
            />
            <FeatureSection 
              icon={<Music className="w-8 h-8" />}
              title="Multi-Platform Support"
              description="Import from Spotify, YouTube, and more platforms"
              delay={0.6}
            />
          </div>
        </div>
      </section>
    </div>
  )
} 