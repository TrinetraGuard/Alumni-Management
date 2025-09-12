import {
    Brain,
    CheckCircle,
    DollarSign,
    Network,
    Rss,
    Shield,
    Store,
    Trophy,
    Users
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

import { motion } from 'framer-motion'

const SolutionSection = () => {
  const solutions = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Centralized Alumni Hub",
      description: "Single platform for all alumni data, profiles, and interactions"
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: "AI-Powered Mentor Matching",
      description: "Intelligent matching system connecting mentors with mentees"
    },
    {
      icon: <Network className="w-8 h-8 text-green-600" />,
      title: "Career Graph Visualization",
      description: "Interactive network maps showing career progression paths"
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      title: "Blockchain Credential Verification",
      description: "Secure, tamper-proof verification of achievements and credentials"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-600" />,
      title: "Transparent Donation System",
      description: "Trackable, transparent fundraising with real-time impact reporting"
    },
    {
      icon: <Rss className="w-8 h-8 text-pink-600" />,
      title: "Personalized Alumni Feed",
      description: "AI-curated content and updates based on individual interests"
    },
    {
      icon: <Store className="w-8 h-8 text-orange-600" />,
      title: "Alumni Marketplace & Collaboration Hub",
      description: "Platform for business opportunities, partnerships, and collaboration"
    },
    {
      icon: <Trophy className="w-8 h-8 text-red-600" />,
      title: "Gamification & Recognition",
      description: "Engagement rewards, achievements, and recognition systems"
    }
  ]

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Solution
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Allumino leverages cutting-edge AI, Blockchain, and Cloud technologies to create a comprehensive alumni ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-green-500 group">
                <CardHeader className="text-center">
                  <motion.div 
                    className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    {solution.icon}
                  </motion.div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Key benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="py-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Why Allumino?
                </h3>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                  Our platform addresses every challenge in traditional alumni management with innovative technology solutions
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive</h4>
                  <p className="text-gray-600">Covers all aspects of alumni engagement and management</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Intelligent</h4>
                  <p className="text-gray-600">AI-powered features for personalized experiences</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Secure</h4>
                  <p className="text-gray-600">Blockchain-based security and data integrity</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default SolutionSection
