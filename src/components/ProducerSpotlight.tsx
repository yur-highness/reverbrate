import { Star, Music, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const ProducerSpotlight = () => {
  const producers = [
    {
      id: 1,
      name: "Alex Rivera",
      username: "@alexbeats",
      genre: "Trap & Hip-Hop",
      followers: "25.3K",
      tracks: 156,
      rating: 4.9,
      totalPlays: "2.1M",
      badge: "Top Producer"
    },
    {
      id: 2,
      name: "Maya Chen",
      username: "@synthqueen",
      genre: "Future Bass",
      followers: "18.7K",
      tracks: 89,
      rating: 4.8,
      totalPlays: "1.8M",
      badge: "Rising Star"
    },
    {
      id: 3,
      name: "Jordan Blake",
      username: "@darkphonk",
      genre: "Phonk & Drift",
      followers: "31.2K",
      tracks: 203,
      rating: 4.9,
      totalPlays: "3.2M",
      badge: "Verified"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Producer Spotlight
          </h2>
          <p className="text-gray-400 text-lg">Meet the artists shaping the future of sound</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {producers.map((producer, index) => (
            <motion.div
              key={producer.id}
              className="group relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Badge */}
              <div className="absolute -top-3 -right-3">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 rounded-full text-xs font-semibold text-black">
                  {producer.badge}
                </div>
              </div>

              {/* Profile section */}
              <div className="text-center mb-6">
                <div className="relative mb-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                    {producer.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{producer.name}</h3>
                <p className="text-purple-300 text-sm mb-2">{producer.username}</p>
                <p className="text-gray-400 text-sm">{producer.genre}</p>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-white/5 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center justify-center mb-1">
                    <Users className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="text-lg font-semibold text-white">{producer.followers}</div>
                  <div className="text-xs text-gray-400">Followers</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center justify-center mb-1">
                    <Music className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="text-lg font-semibold text-white">{producer.tracks}</div>
                  <div className="text-xs text-gray-400">Tracks</div>
                </div>
              </div>

              {/* Additional stats */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Total Plays</span>
                  <span className="text-white font-semibold">{producer.totalPlays}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Rating</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{producer.rating}</span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex space-x-2">
                <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 py-2 rounded-lg text-sm font-semibold hover:from-purple-700 hover:to-blue-700 transition-all">
                  Follow
                </button>
                <button className="px-4 py-2 border border-white/20 rounded-lg text-sm hover:bg-white/10 transition-all">
                  View Profile
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProducerSpotlight;