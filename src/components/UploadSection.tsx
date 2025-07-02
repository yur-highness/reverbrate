import { Upload, Music, DollarSign, Share2, BarChart3, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const UploadSection = () => {
  const features = [
    {
      icon: Music,
      title: "High-Quality Audio",
      description: "Upload lossless audio files up to 32-bit/192kHz for crystal clear sound"
    },
    {
      icon: DollarSign,
      title: "Monetize Your Beats",
      description: "Set your own prices and earn revenue from every sale and stream"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track plays, downloads, and earnings with detailed insights"
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description: "Share your tracks across social media with one click"
    },
    {
      icon: Shield,
      title: "Copyright Protection",
      description: "Your content is protected with blockchain-verified ownership"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Upload interface mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Upload Your Track</h3>
              
              {/* Upload area */}
              <motion.div 
                className="border-2 border-dashed border-purple-500/30 rounded-2xl p-12 text-center mb-6 hover:border-purple-500/50 transition-all cursor-pointer group"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Upload className="w-8 h-8 text-purple-400" />
                </motion.div>
                <p className="text-white font-semibold mb-2">Drop your audio file here</p>
                <p className="text-gray-400 text-sm">Supports WAV, MP3, FLAC up to 500MB</p>
              </motion.div>

              {/* Form fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-white font-medium mb-2">Track Title</label>
                  <input 
                    type="text" 
                    placeholder="Enter track title..."
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none backdrop-blur-sm"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Genre</label>
                    <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none backdrop-blur-sm">
                      <option value="">Select genre</option>
                      <option value="trap">Trap</option>
                      <option value="phonk">Phonk</option>
                      <option value="future-bass">Future Bass</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Price ($)</label>
                    <input 
                      type="number" 
                      placeholder="10.00"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none backdrop-blur-sm"
                    />
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-[1.02]">
                  Publish Track
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right side - Features and benefits */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Share Your Sound
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Join thousands of producers earning from their passion. Upload, promote, and monetize your beats with our cutting-edge platform.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="pt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-2xl shadow-purple-500/25">
                Start Uploading Now
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;