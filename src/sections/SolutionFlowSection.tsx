import {
    Brain,
    Cloud,
    Database,
    ExternalLink,
    Link,
    Monitor,
    Server,
    Settings,
    Users
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

import { motion } from 'framer-motion'

const SolutionFlowSection = () => {
  const flowSteps = [
    {
      title: "Users",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      description: "Alumni, Students, Faculty, Employers"
    },
    {
      title: "Web/Mobile UI",
      icon: <Monitor className="w-8 h-8 text-green-600" />,
      description: "React Web App & Flutter Mobile App"
    },
    {
      title: "Backend Microservices",
      icon: <Server className="w-8 h-8 text-purple-600" />,
      description: "Node.js, Go, FastAPI Services"
    },
    {
      title: "AI/Blockchain",
      icon: <Brain className="w-8 h-8 text-orange-600" />,
      description: "ML Models & Smart Contracts"
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8 text-indigo-600" />,
      description: "PostgreSQL, MongoDB, Neo4j, Redis"
    },
    {
      title: "Cloud Infrastructure",
      icon: <Cloud className="w-8 h-8 text-cyan-600" />,
      description: "AWS/GCP with Auto-scaling"
    },
    {
      title: "Admin Dashboard",
      icon: <Settings className="w-8 h-8 text-red-600" />,
      description: "Analytics & Management Tools"
    },
    {
      title: "External APIs",
      icon: <ExternalLink className="w-8 h-8 text-gray-600" />,
      description: "LinkedIn, Payment, Communication"
    }
  ]

  return (
    <section id="solution-flow" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Solution Architecture Flow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end data flow and system architecture overview
          </p>
        </motion.div>

        {/* Flow Diagram */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 transform -translate-y-1/2 z-0" />
          
          {/* Flow Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {flowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                  <CardHeader className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex justify-center mb-4"
                    >
                      {step.icon}
                    </motion.div>
                    <CardTitle className="text-lg text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-gray-600">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Arrow for desktop */}
                {index < flowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-0 h-0 border-l-8 border-l-blue-500 border-t-4 border-t-transparent border-b-4 border-b-transparent"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Architecture Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-white/80 backdrop-blur-sm border-white/20">
            <CardContent className="py-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Architecture Benefits
                </h3>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                  Our microservices architecture ensures scalability, reliability, and maintainability
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Server className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Scalable</h4>
                  <p className="text-gray-600">Microservices architecture allows independent scaling of components</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Link className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Resilient</h4>
                  <p className="text-gray-600">Fault-tolerant design with automatic failover and recovery</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Maintainable</h4>
                  <p className="text-gray-600">Modular design enables easy updates and feature additions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default SolutionFlowSection
