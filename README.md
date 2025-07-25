# DJ Mixer 🎧

A modern web-based DJ mixer application that lets users import music from Spotify and YouTube, arrange playlists with drag-and-drop, and create seamless mixes with automatic beat matching and real-time collaboration.

## ✨ Features

### Core Features
- **OAuth Login & Library Import** - Sign in with Spotify/YouTube and import your playlists
- **Playlist Builder** - Drag-and-drop interface for arranging tracks
- **Waveform Preview & Crossfade** - Visual waveform display with crossfade controls
- **Auto Beat/Key Match** - Automatic BPM and key analysis for seamless transitions
- **Smart Suggestions** - Get track recommendations based on mood and energy
- **Real-time Collaboration** - Invite friends, vote on tracks, and chat in real-time
- **Export & Share** - Export mixes as MP3 or share via link

### User Flows
1. **Onboard** - Landing page → OAuth → Dashboard
2. **Build a Mix** - Search → Drag tracks → Arrange playlist
3. **Auto-Mix & Preview** - Analyze BPM/key → Apply transitions → Preview
4. **Collab Mode** - Invite → Share room → Vote & chat
5. **Export & Share** - Render mix → Download or share link

## 🎨 Design

### Theme & Colors
- **Background**: #000000 (pure black)
- **Primary Accent**: #1DB954 (Spotify green)
- **Secondary Accent**: rgba(29,185,84,0.2) for hover/active highlights
- **Text**: #FFFFFF (white) & #B3B3B3 (light grey)

### Typography
- **Headings**: Studio Freight (geometric sans-serif)
- **Body**: IBM Plex Sans (readable text face)

### Animations & Interactions
- Scroll-triggered animations with Framer Motion
- Parallax effects and smooth transitions
- Micro-interactions and hover states
- Drag-and-drop with visual feedback

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Next.js 14** with App Router
- **TailwindCSS** with custom dark theme
- **Framer Motion** for animations
- **react-beautiful-dnd** for drag-and-drop
- **Web Audio API** + wavesurfer.js for waveform rendering
- **Socket.IO** for real-time collaboration
- **Lucide React** for icons

### Backend (Planned)
- **Node.js** + Express with TypeScript
- **PostgreSQL** for user data and playlists
- **Redis** for ephemeral room state
- **FFmpeg** (Docker) for server-side mix rendering
- **AWS** (ECS Fargate or Lambda + API Gateway)

### APIs & Integrations
- **Spotify Web API** (OAuth + audio analysis)
- **YouTube Data API** (optional alternate source)
- **Spotify Audio Features** for mood/energy analysis

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/dj-mixer.git
   cd dj-mixer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your API keys to `.env.local`:
   ```env
   SPOTIFY_CLIENT_ID=your_spotify_client_id
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
   YOUTUBE_API_KEY=your_youtube_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
djmixer/
├── app/                    # Next.js App Router
│   ├── dashboard/         # Dashboard pages
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Landing page
├── components/            # React components
│   ├── dashboard/        # Dashboard-specific components
│   ├── HeroBanner.tsx   # Landing page hero
│   ├── FeatureSection.tsx
│   └── OAuthButtons.tsx
├── public/               # Static assets
├── package.json          # Dependencies
├── tailwind.config.js    # TailwindCSS config
├── tsconfig.json         # TypeScript config
└── README.md
```

## 🎯 Development Roadmap

### Week 1: Auth & Data Fetch
- [x] OAuth flow setup
- [x] Display user songs
- [ ] Spotify API integration
- [ ] YouTube API integration

### Week 2: Playlist Canvas & Drag-Drop
- [x] Basic drag-and-drop interface
- [x] Add/remove/reorder songs locally
- [ ] Persistent playlist storage
- [ ] Enhanced drag animations

### Week 3: Waveform Preview & Crossfade
- [x] Static waveform display
- [x] Manual crossfade slider
- [ ] Real audio waveform rendering
- [ ] Web Audio API integration

### Week 4: Auto-Mix Algorithm
- [ ] BPM/key analysis
- [ ] Auto transitions
- [ ] Beat matching algorithm
- [ ] Pitch shifting

### Week 5: Suggestions Panel
- [x] Display mood-based recommendations
- [ ] Energy/mood analysis
- [ ] Smart filtering
- [ ] A/B testing

### Week 6: Collab Mode & WebSockets
- [x] Real-time sync UI
- [x] Simple voting interface
- [ ] WebSocket implementation
- [ ] Room management

### Week 7: Export Mix
- [ ] Server mix render
- [ ] Download link generation
- [ ] FFmpeg integration
- [ ] Share URL creation

### Week 8: Polish & Deploy
- [ ] UI tweaks
- [ ] Performance optimization
- [ ] Monitoring setup
- [ ] Production deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Spotify Web API for music data
- YouTube Data API for video content
- Framer Motion for smooth animations
- TailwindCSS for utility-first styling
- Next.js team for the amazing framework

---

Built with ❤️ and lots of 🎵 