
import { Play, Heart, Share2, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturedTracks = () => {
  const tracks = [
    {
      id: 1,
      title: "Midnight Vibes",
      artist: "NeonBeats",
      genre: "Trap",
      duration: "3:24",
      plays: "125K",
      likes: "2.1K",
      waveform: "bg-gradient-to-r from-purple-500 to-blue-500"
    },
    {
      id: 2,
      title: "Future Bass Drop",
      artist: "SynthWave",
      genre: "Future Bass",
      duration: "4:12",
      plays: "89K",
      likes: "1.8K",
      waveform: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Dark Phoenix",
      artist: "BeatMaster",
      genre: "Phonk",
      duration: "2:58",
      plays: "203K",
      likes: "3.2K",
      waveform: "bg-gradient-to-r from-red-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Trending Beats
          </h2>
          <p className="text-gray-400 text-lg">Discover the hottest tracks from our community</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={track.id}
              className="group relative backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Track artwork */}
              <div className="relative mb-4 aspect-square rounded-xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button 
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play className="w-6 h-6 text-white ml-1" />
                  </motion.button>
                </div>
                {/* Waveform visualization */}
                <div className="absolute bottom-0 left-0 right-0 h-2">
                  <div className={`h-full ${track.waveform} opacity-60`} />
                </div>
              </div>

              {/* Track info */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-gray-400">by {track.artist}</p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="px-2 py-1 bg-purple-500/20 rounded-full text-purple-300">
                    {track.genre}
                  </span>
                  <span>{track.duration}</span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex space-x-4 text-sm text-gray-400">
                    <span className="flex items-center space-x-1">
                      <Play className="w-4 h-4" />
                      <span>{track.plays}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{track.likes}</span>
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105">
            Explore All Tracks
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedTracks;