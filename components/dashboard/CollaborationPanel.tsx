'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Users, Share2, MessageCircle, ThumbsUp, ThumbsDown, Copy, Send } from 'lucide-react'

interface CollaborationPanelProps {
  onClose: () => void
}

const CollaborationPanel: React.FC<CollaborationPanelProps> = ({ onClose }) => {
  const [roomId] = useState('dj-mix-abc123')
  const [copied, setCopied] = useState(false)
  const [message, setMessage] = useState('')
  const [chatMessages] = useState([
    { id: 1, user: 'Alex', message: 'This mix is fire! 🔥', time: '2:30' },
    { id: 2, user: 'Sarah', message: 'Add some more upbeat tracks', time: '2:32' },
    { id: 3, user: 'You', message: 'On it!', time: '2:33' },
  ])

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://djmixer.app/collab/${roomId}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      // TODO: Send message via WebSocket
      setMessage('')
    }
  }

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
            Collaboration
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-text-secondary" />
          </button>
        </div>

        {/* Room Info */}
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-text-primary font-medium">3 people in room</span>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-3 mb-3">
            <p className="text-text-secondary text-xs mb-1">Room Link</p>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={`https://djmixer.app/collab/${roomId}`}
                readOnly
                className="flex-1 bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-xs text-text-primary"
              />
              <button
                onClick={handleCopyLink}
                className="p-2 hover:bg-gray-700/50 rounded transition-colors"
              >
                {copied ? (
                  <span className="text-primary text-xs">Copied!</span>
                ) : (
                  <Copy className="w-4 h-4 text-text-secondary" />
                )}
              </button>
            </div>
          </div>

          <button className="w-full btn-secondary flex items-center justify-center gap-2">
            <Share2 className="w-4 h-4" />
            Share Room
          </button>
        </div>

        {/* Voting Queue */}
        <div className="flex-1 p-4">
          <h4 className="text-lg font-medium text-text-primary mb-4">Vote on Next Track</h4>
          
          <div className="space-y-3">
            {[
              { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', votes: 3 },
              { id: 2, title: 'Dance Monkey', artist: 'Tones and I', votes: 2 },
              { id: 3, title: 'Shape of You', artist: 'Ed Sheeran', votes: 1 },
            ].map((track) => (
              <motion.div
                key={track.id}
                className="card p-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-text-primary font-medium text-sm">{track.title}</p>
                    <p className="text-text-secondary text-xs">{track.artist}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-primary text-sm font-medium">{track.votes} votes</span>
                    <div className="flex gap-1">
                      <button className="p-1 hover:bg-green-500/20 rounded transition-colors">
                        <ThumbsUp className="w-4 h-4 text-green-400" />
                      </button>
                      <button className="p-1 hover:bg-red-500/20 rounded transition-colors">
                        <ThumbsDown className="w-4 h-4 text-red-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Chat */}
        <div className="border-t border-gray-800">
          <div className="p-4 border-b border-gray-800">
            <h4 className="text-lg font-medium text-text-primary mb-3">Chat</h4>
            
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {chatMessages.map((msg) => (
                <div key={msg.id} className="text-sm">
                  <span className="text-primary font-medium">{msg.user}</span>
                  <span className="text-text-secondary text-xs ml-2">{msg.time}</span>
                  <p className="text-text-primary mt-1">{msg.message}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2 text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-primary hover:bg-green-500 rounded-lg transition-colors"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default CollaborationPanel 