import {
  ArrowRight,
  Brain,
  CheckCircle,
  Cloud,
  Database,
  Globe,
  Link,
  Lock,
  Monitor,
  Server,
  Shield,
  Zap
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { getSEOData, useSEO } from '../lib/seo'

const TechPage = () => {
  // SEO setup
  const seoData = getSEOData('tech')
  useSEO(seoData)

  const techStack = [
    {
      category: "Frontend",
      icon: <Monitor className="w-8 h-8 text-blue-600" />,
      technologies: [
        { name: "React", description: "Modern UI library", color: "text-blue-500" },
        { name: "Next.js", description: "Full-stack framework", color: "text-gray-700" },
        { name: "Flutter", description: "Cross-platform mobile", color: "text-cyan-500" },
        { name: "TailwindCSS", description: "Utility-first CSS", color: "text-teal-500" },
        { name: "ShadCN UI", description: "Component library", color: "text-gray-600" }
      ]
    },
    {
      category: "Backend",
      icon: <Server className="w-8 h-8 text-green-600" />,
      technologies: [
        { name: "Node.js", description: "JavaScript runtime", color: "text-green-500" },
        { name: "Go", description: "High-performance language", color: "text-cyan-500" },
        { name: "FastAPI", description: "Python web framework", color: "text-green-600" },
        { name: "Express.js", description: "Web framework", color: "text-gray-700" },
        { name: "GraphQL", description: "Query language", color: "text-pink-500" }
      ]
    },
    {
      category: "Databases",
      icon: <Database className="w-8 h-8 text-purple-600" />,
      technologies: [
        { name: "PostgreSQL", description: "Relational database", color: "text-blue-600" },
        { name: "MongoDB", description: "Document database", color: "text-green-500" },
        { name: "Neo4j", description: "Graph database", color: "text-orange-500" },
        { name: "Elasticsearch", description: "Search engine", color: "text-yellow-500" },
        { name: "Redis", description: "In-memory cache", color: "text-red-500" }
      ]
    },
    {
      category: "AI/ML",
      icon: <Brain className="w-8 h-8 text-pink-600" />,
      technologies: [
        { name: "TensorFlow", description: "Machine learning", color: "text-orange-500" },
        { name: "PyTorch", description: "Deep learning", color: "text-red-500" },
        { name: "AWS SageMaker", description: "ML platform", color: "text-orange-600" },
        { name: "OpenAI API", description: "Language models", color: "text-green-500" },
        { name: "Scikit-learn", description: "ML library", color: "text-orange-400" }
      ]
    },
    {
      category: "Blockchain",
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      technologies: [
        { name: "Ethereum", description: "Smart contracts", color: "text-blue-500" },
        { name: "Polygon", description: "Layer 2 scaling", color: "text-purple-500" },
        { name: "Hyperledger", description: "Enterprise blockchain", color: "text-blue-600" },
        { name: "Web3.js", description: "Blockchain interaction", color: "text-orange-500" },
        { name: "Solidity", description: "Smart contract language", color: "text-gray-700" }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8 text-cyan-600" />,
      technologies: [
        { name: "AWS", description: "Cloud platform", color: "text-orange-500" },
        { name: "GCP", description: "Google Cloud", color: "text-blue-500" },
        { name: "Docker", description: "Containerization", color: "text-blue-600" },
        { name: "Kubernetes", description: "Container orchestration", color: "text-blue-700" },
        { name: "GitHub Actions", description: "CI/CD pipeline", color: "text-gray-700" }
      ]
    }
  ]

  const integrations = [
    {
      name: "LinkedIn",
      description: "Professional network integration",
      icon: <Link className="w-6 h-6 text-blue-600" />,
      features: ["Profile Sync", "Career Updates", "Network Analysis"]
    },
    {
      name: "Razorpay/Stripe",
      description: "Payment processing",
      icon: <Zap className="w-6 h-6 text-green-600" />,
      features: ["Secure Payments", "Multiple Currencies", "Transaction Tracking"]
    },
    {
      name: "Twilio",
      description: "Communication services",
      icon: <Globe className="w-6 h-6 text-red-600" />,
      features: ["SMS Notifications", "Voice Calls", "Email Services"]
    },
    {
      name: "Firebase",
      description: "Real-time database",
      icon: <Database className="w-6 h-6 text-orange-600" />,
      features: ["Real-time Sync", "Offline Support", "Push Notifications"]
    }
  ]

  const architecture = [
    {
      layer: "Presentation Layer",
      description: "User interfaces and mobile apps",
      technologies: ["React", "Flutter", "Next.js"],
      color: "from-blue-500 to-blue-600"
    },
    {
      layer: "API Gateway",
      description: "Request routing and authentication",
      technologies: ["Express.js", "JWT", "Rate Limiting"],
      color: "from-green-500 to-green-600"
    },
    {
      layer: "Microservices",
      description: "Business logic and processing",
      technologies: ["Node.js", "Go", "FastAPI"],
      color: "from-purple-500 to-purple-600"
    },
    {
      layer: "AI/ML Engine",
      description: "Machine learning and analytics",
      technologies: ["TensorFlow", "PyTorch", "SageMaker"],
      color: "from-pink-500 to-pink-600"
    },
    {
      layer: "Blockchain Layer",
      description: "Smart contracts and verification",
      technologies: ["Ethereum", "Polygon", "Web3"],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      layer: "Data Layer",
      description: "Storage and caching",
      technologies: ["PostgreSQL", "MongoDB", "Redis"],
      color: "from-orange-500 to-orange-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern, scalable architecture built with cutting-edge technologies
          </p>
        </div>

        {/* Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {techStack.map((category, index) => (
            <div key={index}>
              <Card className="h-full hover:shadow-orange-lg transition-all duration-300 hover-lift">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                        <div>
                          <div className={`font-semibold ${tech.color}`}>{tech.name}</div>
                          <div className="text-sm text-gray-600">{tech.description}</div>
                        </div>
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Architecture */}
        <div className="mb-20">
          <Card className="bg-gradient-to-r from-gray-50 to-orange-50 border-orange-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900 mb-4">
                System Architecture
              </CardTitle>
              <p className="text-gray-600">
                Layered architecture ensuring scalability, security, and performance
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {architecture.map((layer, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover-lift">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${layer.color}`} />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{layer.layer}</h4>
                      <p className="text-sm text-gray-600">{layer.description}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {layer.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Integrations */}
        <div className="mb-20">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900 mb-4">
                Third-Party Integrations
              </CardTitle>
              <p className="text-gray-600">
                Seamless integration with popular platforms and services
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {integrations.map((integration, index) => (
                  <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover-lift">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      {integration.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{integration.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{integration.description}</p>
                    <div className="space-y-1">
                      {integration.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="text-xs text-gray-500">
                          • {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Security & Performance */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-green-500 hover:shadow-orange-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Lock className="w-8 h-8 text-green-600 mr-3" />
                  <CardTitle className="text-xl text-gray-900">Security Features</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">End-to-end encryption</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">Blockchain verification</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">Multi-factor authentication</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">GDPR compliance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500 hover:shadow-orange-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-blue-600 mr-3" />
                  <CardTitle className="text-xl text-gray-900">Performance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-600">99.9% uptime SLA</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-600">Sub-second response times</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-600">Auto-scaling infrastructure</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-600">Global CDN distribution</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechPage