import { Play, Upload, Users, TrendingUp } from 'lucide-react';

console.log('Hero.tsx loading...');
console.log('Framer motion available:', typeof import('framer-motion'));

const Hero = () => {
  console.log('Hero component rendering...');
  
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 w-full px-6 py-6 flex justify-between items-center backdrop-blur-sm bg-black/20 border-b border-white/10">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
         REVERBERATE
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-purple-400 transition-colors">Discover</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Upload</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Community</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Profile</a>
        </div>
        <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105">
          Sign In
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
          Unleash Your
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Sound Universe
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          The next-generation platform for music producers to share, discover, and monetize their beats with a global community.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-2xl shadow-purple-500/25">
            <div className="flex items-center space-x-2">
              <Upload className="w-5 h-5" />
              <span>Upload Your Beats</span>
            </div>
          </button>
          <button className="group border border-white/20 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm">
            <div className="flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Explore Sounds</span>
            </div>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Users className="w-8 h-8 text-purple-400" />
            </div>
            <div className="text-2xl font-bold text-white">50K+</div>
            <div className="text-gray-400">Producers</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Play className="w-8 h-8 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-white">1M+</div>
            <div className="text-gray-400">Tracks</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <TrendingUp className="w-8 h-8 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white">$2M+</div>
            <div className="text-gray-400">Earned</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Hero;