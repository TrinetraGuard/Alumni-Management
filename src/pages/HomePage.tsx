import { ArrowRight, Award, Brain, CheckCircle, DollarSign, Download, Globe, Shield, Target, TrendingUp, Users, X, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { getSEOData, useSEO } from '../lib/seo'

import { motion } from 'framer-motion'
import { Button } from '../components/ui/button'

const HomePage = () => {
  // SEO setup
  const seoData = getSEOData('home')
  useSEO(seoData)

  const features = [
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Centralized Alumni Hub",
      description: "Unified platform connecting all alumni data and interactions"
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: "AI-Powered Matching",
      description: "Intelligent mentor-mentee matching using machine learning"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Blockchain Security",
      description: "Tamper-proof credential verification and secure transactions"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-600" />,
      title: "Transparent Donations",
      description: "Trackable fundraising with real-time impact reporting"
    }
  ]

  const stats = [
    { value: "93%", label: "Alumni Engagement", icon: <TrendingUp className="w-6 h-6" /> },
    { value: "156%", label: "Higher Donations", icon: <DollarSign className="w-6 h-6" /> },
    { value: "$13.5B", label: "Global Giving", icon: <Globe className="w-6 h-6" /> },
    { value: "75%", label: "Mobile Preference", icon: <Zap className="w-6 h-6" /> }
  ]

  const technologies = [
    { name: "React", color: "text-blue-500" },
    { name: "Node.js", color: "text-green-500" },
    { name: "AI/ML", color: "text-purple-500" },
    { name: "Blockchain", color: "text-orange-500" },
    { name: "Cloud", color: "text-cyan-500" },
    { name: "Mobile", color: "text-pink-500" }
  ]

  const achievements = [
    "Smart India Hackathon 2024 Finalists",
    "Best AI Innovation Award 2024",
    "Top 10 Blockchain Projects 2024",
    "Excellence in Alumni Engagement"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main heading */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center justify-center mb-4"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-orange-lg mr-4">
                  <span className="text-white font-bold text-2xl">A</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold">
                  <span className="text-gradient">Allumino</span>
                </h1>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 font-medium"
              >
                by Team Trinetra
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
              >
                Smart Alumni Ecosystem powered by AI, Blockchain & Cloud
              </motion.p>
            </div>

            {/* Feature highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-6 text-sm text-gray-600"
            >
              <div className="flex items-center space-x-2 bg-white/50 px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-orange-600" />
                <span>Centralized Alumni Hub</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/50 px-4 py-2 rounded-full">
                <Brain className="w-5 h-5 text-orange-500" />
                <span>AI-Powered Matching</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/50 px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-orange-700" />
                <span>Blockchain Security</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg hover-lift shadow-orange-lg"
                onClick={() => window.location.href = '/login'}
              >
                Explore Solution
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg border-orange-500 text-orange-600 hover:bg-orange-50 hover-lift"
              >
                <Download className="w-5 h-5 mr-2" />
                Download SIH Report (PDF)
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 hover-lift"
                >
                  <div className="flex justify-center mb-2">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Allumino?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary features that transform alumni engagement and management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-orange-lg transition-all duration-300 hover-lift group border-0 bg-gradient-to-br from-white to-orange-50">
                  <CardHeader className="text-center">
                    <motion.div 
                      className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Built with Modern Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technologies powering the future of alumni engagement
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-sm hover-lift"
              >
                <div className={`text-2xl font-bold ${tech.color} mb-2`}>
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-l-4 border-l-red-500 hover:shadow-orange-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-red-600" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">The Problem</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Scattered alumni data across platforms</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Limited engagement via traditional methods</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">No structured mentorship system</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Missed opportunities for growth</span>
                    </li>
                  </ul>
                  <Button 
                    variant="outline" 
                    className="mt-6 border-red-500 text-red-600 hover:bg-red-50"
                    onClick={() => window.location.href = '/problem'}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-l-4 border-l-green-500 hover:shadow-orange-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">Our Solution</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Centralized AI-powered platform</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Smart mentor matching system</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Blockchain-secured credentials</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Transparent donation tracking</span>
                    </li>
                  </ul>
                  <Button 
                    className="mt-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                    onClick={() => window.location.href = '/solution'}
                  >
                    Explore Solution
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-orange-100 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Recognition & Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proud to be recognized for our innovative approach to alumni engagement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-sm hover-lift"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">{achievement}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Transform Alumni Engagement?
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Join the future of alumni management with Allumino's AI-powered platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg hover-lift shadow-lg"
                onClick={() => window.location.href = '/login'}
              >
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg hover-lift"
                onClick={() => window.location.href = '/team'}
              >
                Meet Our Team
                <Users className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage