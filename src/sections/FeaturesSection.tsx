import {
    Award,
    BarChart3,
    Brain,
    Calendar,
    Gamepad2,
    Linkedin,
    Monitor,
    Network,
    Settings,
    Shield,
    Smartphone,
    Store,
    TrendingUp,
    Users
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

import { motion } from 'framer-motion'

const FeaturesSection = () => {
  const webFeatures = [
    {
      icon: <Settings className="w-6 h-6 text-blue-600" />,
      title: "Admin Dashboard",
      description: "Comprehensive analytics and management tools for administrators"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-600" />,
      title: "Fundraising Transparency",
      description: "Real-time tracking and reporting of donations and their impact"
    },
    {
      icon: <Network className="w-6 h-6 text-purple-600" />,
      title: "Alumni Network Map",
      description: "Interactive visualization of alumni connections and relationships"
    },
    {
      icon: <Shield className="w-6 h-6 text-indigo-600" />,
      title: "Role-based Access",
      description: "Secure access control with customizable permission levels"
    },
    {
      icon: <Linkedin className="w-6 h-6 text-blue-500" />,
      title: "LinkedIn Sync",
      description: "Automatic synchronization with LinkedIn profiles and updates"
    }
  ]

  const mobileFeatures = [
    {
      icon: <Brain className="w-6 h-6 text-purple-600" />,
      title: "Smart AI Mentor Match",
      description: "Intelligent matching algorithm for finding the perfect mentor"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      title: "Career Graphs",
      description: "Visual representation of career progression and opportunities"
    },
    {
      icon: <Gamepad2 className="w-6 h-6 text-orange-600" />,
      title: "Gamified Engagement",
      description: "Points, badges, and rewards for active participation"
    },
    {
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
      title: "Event Hub & Virtual Reunions",
      description: "Easy access to events, webinars, and virtual meetups"
    },
    {
      icon: <Store className="w-6 h-6 text-pink-600" />,
      title: "Startup/Job Marketplace",
      description: "Platform for job opportunities and startup collaborations"
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unique Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions across web and mobile platforms for maximum accessibility and engagement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Web Portal Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-l-4 border-l-blue-500">
              <CardHeader className="text-center bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="flex items-center justify-center mb-4">
                  <Monitor className="w-8 h-8 text-blue-600 mr-3" />
                  <CardTitle className="text-2xl text-gray-900">Web Portal</CardTitle>
                </div>
                <p className="text-gray-600">
                  Comprehensive management and analytics platform for administrators and power users
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {webFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex-shrink-0 mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Mobile App Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-l-4 border-l-purple-500">
              <CardHeader className="text-center bg-gradient-to-r from-purple-50 to-pink-50">
                <div className="flex items-center justify-center mb-4">
                  <Smartphone className="w-8 h-8 text-purple-600 mr-3" />
                  <CardTitle className="text-2xl text-gray-900">Mobile App</CardTitle>
                </div>
                <p className="text-gray-600">
                  On-the-go access with personalized features and gamified engagement
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {mobileFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex-shrink-0 mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Integration Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
            <CardContent className="py-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Seamless Integration
                </h3>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                  Web and mobile platforms work together to provide a unified alumni experience
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Unified Experience</h4>
                  <p className="text-gray-600">Consistent interface across all devices and platforms</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Enhanced Engagement</h4>
                  <p className="text-gray-600">Multiple touchpoints increase user participation and retention</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Smart Analytics</h4>
                  <p className="text-gray-600">Cross-platform insights for better decision making</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection