'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface FeatureSectionProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ 
  icon, 
  title, 
  description, 
  delay = 0 
}) => {
  return (
    <motion.div
      className="card text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
          {icon}
        </div>
      </div>
      
      <h3 className="text-h3 font-studio-freight mb-3 text-text-primary">
        {title}
      </h3>
      
      <p className="text-text-secondary text-body">
        {description}
      </p>
    </motion.div>
  )
}

export default FeatureSection 