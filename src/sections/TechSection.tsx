import {
    Brain,
    Cloud,
    Code,
    Database,
    Link,
    Settings
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

import { motion } from 'framer-motion'

const TechSection = () => {
  const techCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-6 h-6 text-blue-600" />,
      technologies: [
        { name: "React", icon: <Code className="w-5 h-5" />, color: "text-blue-500" },
        { name: "Next.js", icon: <Code className="w-5 h-5" />, color: "text-gray-700" },
        { name: "Flutter", icon: <Code className="w-5 h-5" />, color: "text-blue-400" },
        { name: "Tailwind CSS", icon: <Code className="w-5 h-5" />, color: "text-cyan-500" },
        { name: "ShadCN UI", icon: <Code className="w-5 h-5" />, color: "text-gray-600" }
      ]
    },
    {
      title: "Backend",
      icon: <Settings className="w-6 h-6 text-green-600" />,
      technologies: [
        { name: "Node.js", icon: <Code className="w-5 h-5" />, color: "text-green-600" },
        { name: "Go", icon: <Code className="w-5 h-5" />, color: "text-blue-500" },
        { name: "FastAPI", icon: <Code className="w-5 h-5" />, color: "text-green-500" },
        { name: "Python", icon: <Code className="w-5 h-5" />, color: "text-yellow-500" }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6 text-purple-600" />,
      technologies: [
        { name: "PostgreSQL", icon: <Database className="w-5 h-5" />, color: "text-blue-600" },
        { name: "MongoDB", icon: <Database className="w-5 h-5" />, color: "text-green-600" },
        { name: "Neo4j", icon: <Database className="w-5 h-5" />, color: "text-green-500" },
        { name: "Elasticsearch", icon: <Database className="w-5 h-5" />, color: "text-yellow-600" },
        { name: "Redis", icon: <Database className="w-5 h-5" />, color: "text-red-500" }
      ]
    },
    {
      title: "AI/ML",
      icon: <Brain className="w-6 h-6 text-pink-600" />,
      technologies: [
        { name: "TensorFlow", icon: <Brain className="w-5 h-5" />, color: "text-orange-500" },
        { name: "PyTorch", icon: <Brain className="w-5 h-5" />, color: "text-red-500" },
        { name: "AWS SageMaker", icon: <Cloud className="w-5 h-5" />, color: "text-orange-400" }
      ]
    },
    {
      title: "Blockchain",
      icon: <Link className="w-6 h-6 text-indigo-600" />,
      technologies: [
        { name: "Ethereum", icon: <Link className="w-5 h-5" />, color: "text-gray-600" },
        { name: "Polygon", icon: <Link className="w-5 h-5" />, color: "text-purple-500" },
        { name: "Hyperledger", icon: <Link className="w-5 h-5" />, color: "text-blue-600" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6 text-cyan-600" />,
      technologies: [
        { name: "AWS", icon: <Cloud className="w-5 h-5" />, color: "text-orange-400" },
        { name: "GCP", icon: <Cloud className="w-5 h-5" />, color: "text-blue-500" },
        { name: "Docker", icon: <Settings className="w-5 h-5" />, color: "text-blue-600" },
        { name: "Kubernetes", icon: <Settings className="w-5 h-5" />, color: "text-blue-500" },
        { name: "GitHub Actions", icon: <Code className="w-5 h-5" />, color: "text-gray-700" }
      ]
    }
  ]

  const integrations = [
    { name: "LinkedIn API", description: "Profile synchronization and networking" },
    { name: "Razorpay/Stripe", description: "Secure payment processing" },
    { name: "Twilio", description: "SMS and communication services" },
    { name: "Firebase", description: "Real-time notifications and analytics" }
  ]

  return (
    <section id="tech" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built with modern, scalable technologies for enterprise-grade performance and security
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    {category.icon}
                    <CardTitle className="text-xl text-gray-900 ml-2">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: techIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      >
                        <div className={`${tech.color}`}>
                          {tech.icon}
                        </div>
                        <span className="font-medium text-gray-900">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900 mb-4">
                Third-Party Integrations
              </CardTitle>
              <p className="text-gray-600">
                Seamless integration with popular services and platforms
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {integrations.map((integration, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {integration.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {integration.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Architecture Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Scalable Architecture</h4>
              <p className="text-gray-600">Microservices-based design for horizontal scaling and high availability</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h4>
              <p className="text-gray-600">End-to-end encryption, blockchain verification, and compliance standards</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Cloud-Native</h4>
              <p className="text-gray-600">Built for cloud deployment with auto-scaling and global distribution</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechSection
