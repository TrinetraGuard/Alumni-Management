import {
  AlertTriangle,
  ArrowRight,
  Building,
  CheckCircle,
  Clock,
  DollarSign,
  Globe,
  Heart,
  Lightbulb,
  Shield,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { getSEOData, useSEO } from '../lib/seo'

import { motion } from 'framer-motion'

const FeasibilityPage = () => {
  // SEO setup
  const seoData = getSEOData('feasibility')
  useSEO(seoData)

  const viabilityFactors = [
    {
      category: 'Technical Feasibility',
      score: 95,
      icon: <Zap className="w-6 h-6" />,
      factors: [
        'Proven technology stack with extensive documentation',
        'Open-source libraries and frameworks available',
        'Cloud infrastructure provides scalability',
        'AI/ML models can be trained with existing data',
        'Blockchain integration is well-documented'
      ],
      color: 'text-green-600'
    },
    {
      category: 'Market Viability',
      score: 88,
      icon: <TrendingUp className="w-6 h-6" />,
      factors: [
        'Growing alumni engagement market ($2.3B by 2025)',
        'High demand for mobile-first solutions (75% preference)',
        'Existing competitors show market validation',
        'Educational institutions seeking digital transformation',
        'Post-pandemic shift to digital engagement'
      ],
      color: 'text-blue-600'
    },
    {
      category: 'Financial Viability',
      score: 82,
      icon: <DollarSign className="w-6 h-6" />,
      factors: [
        'Multiple revenue streams (SaaS, transactions, premium)',
        'Scalable business model with recurring revenue',
        'Cost-effective cloud infrastructure',
        'Potential for institutional partnerships',
        'Alumni donation increase (156-209% with engagement)'
      ],
      color: 'text-purple-600'
    },
    {
      category: 'Resource Availability',
      score: 90,
      icon: <Users className="w-6 h-6" />,
      factors: [
        'Experienced development team with relevant skills',
        'Access to modern development tools and platforms',
        'Cloud services provide infrastructure without upfront costs',
        'Open-source technologies reduce licensing costs',
        'Agile development methodology ensures efficient delivery'
      ],
      color: 'text-orange-600'
    }
  ]

  const businessPotential = [
    {
      metric: 'Total Addressable Market',
      value: '$2.3B',
      description: 'Global alumni engagement software market by 2025',
      icon: <Globe className="w-8 h-8" />,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      metric: 'Serviceable Market',
      value: '$450M',
      description: 'Mid to large educational institutions globally',
      icon: <Building className="w-8 h-8" />,
      color: 'bg-green-100 text-green-600'
    },
    {
      metric: 'Revenue Potential',
      value: '$2.5M',
      description: 'Annual recurring revenue potential in Year 3',
      icon: <DollarSign className="w-8 h-8" />,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      metric: 'Customer Acquisition',
      value: '150+',
      description: 'Institutions in first 3 years',
      icon: <Target className="w-8 h-8" />,
      color: 'bg-orange-100 text-orange-600'
    }
  ]

  const useCases = [
    {
      title: 'Universities & Colleges',
      description: 'Comprehensive alumni management with engagement tracking',
      benefits: ['Increased donations', 'Better networking', 'Career support', 'Event management'],
      icon: <Building className="w-6 h-6" />,
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'Professional Schools',
      description: 'Specialized alumni networks for business, law, medical schools',
      benefits: ['Industry connections', 'Mentorship programs', 'Job placements', 'Continuing education'],
      icon: <Users className="w-6 h-6" />,
      color: 'bg-green-50 border-green-200'
    },
    {
      title: 'Corporate Alumni',
      description: 'Former employee networks for large corporations',
      benefits: ['Brand advocacy', 'Talent pipeline', 'Business development', 'Knowledge sharing'],
      icon: <Globe className="w-6 h-6" />,
      color: 'bg-purple-50 border-purple-200'
    },
    {
      title: 'Non-Profit Organizations',
      description: 'Donor and volunteer management with engagement tracking',
      benefits: ['Donor retention', 'Volunteer coordination', 'Impact measurement', 'Community building'],
      icon: <Heart className="w-6 h-6" />,
      color: 'bg-orange-50 border-orange-200'
    }
  ]

  const challenges = [
    {
      challenge: 'Data Privacy & Security',
      description: 'Handling sensitive alumni data and ensuring GDPR compliance',
      solution: 'End-to-end encryption, blockchain-based consent management, and privacy-by-design architecture',
      icon: <Shield className="w-6 h-6" />,
      severity: 'High',
      color: 'text-red-600'
    },
    {
      challenge: 'User Adoption',
      description: 'Getting alumni to actively use the platform',
      solution: 'Gamification, mobile-first design, and value-driven features that provide immediate benefits',
      icon: <Users className="w-6 h-6" />,
      severity: 'Medium',
      color: 'text-yellow-600'
    },
    {
      challenge: 'Integration Complexity',
      description: 'Connecting with existing institutional systems',
      solution: 'RESTful APIs, webhook support, and pre-built connectors for popular systems',
      icon: <Zap className="w-6 h-6" />,
      severity: 'Medium',
      color: 'text-yellow-600'
    },
    {
      challenge: 'Scalability',
      description: 'Handling millions of users and data points',
      solution: 'Microservices architecture, cloud auto-scaling, and efficient caching strategies',
      icon: <TrendingUp className="w-6 h-6" />,
      severity: 'Low',
      color: 'text-green-600'
    }
  ]

  const solutions = [
    {
      title: 'Phased Rollout',
      description: 'Start with pilot programs and gradually expand',
      timeline: '6 months',
      icon: <Clock className="w-6 h-6" />,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Partnership Strategy',
      description: 'Collaborate with existing educational technology providers',
      timeline: '3 months',
      icon: <Users className="w-6 h-6" />,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Continuous Feedback',
      description: 'Regular user testing and iterative improvements',
      timeline: 'Ongoing',
      icon: <Lightbulb className="w-6 h-6" />,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Training & Support',
      description: 'Comprehensive onboarding and ongoing support',
      timeline: '2 months',
      icon: <Star className="w-6 h-6" />,
      color: 'bg-orange-100 text-orange-600'
    }
  ]


  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
              Feasibility & Viability
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive analysis of the technical, market, and financial feasibility 
            of the Allumino platform with detailed risk assessment and mitigation strategies.
          </p>
        </motion.div>

        {/* Viability Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
              Viability Analysis
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {viabilityFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-orange-200">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-orange-100 rounded-full text-orange-600">
                          {factor.icon}
                        </div>
                        <CardTitle className="text-xl">{factor.category}</CardTitle>
                      </div>
                      <div className={`text-3xl font-bold ${factor.color}`}>
                        {factor.score}%
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {factor.factors.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Business Potential */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
              Business Potential
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessPotential.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-orange-200">
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{item.value}</h3>
                  <p className="text-lg font-semibold mb-2">{item.metric}</p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
              Target Use Cases
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`p-6 h-full hover:shadow-lg transition-all duration-300 ${useCase.color}`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-white rounded-full text-orange-600">
                      {useCase.icon}
                    </div>
                    <h3 className="text-xl font-bold">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Challenges vs Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
              Challenges & Solutions
            </span>
          </h2>
          
          <Tabs defaultValue="challenges" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="challenges">Challenges</TabsTrigger>
              <TabsTrigger value="solutions">Solutions</TabsTrigger>
            </TabsList>

            <TabsContent value="challenges">
              <div className="space-y-6">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 border-orange-200">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-red-100 rounded-full text-red-600">
                          {challenge.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold">{challenge.challenge}</h3>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              challenge.severity === 'High' ? 'bg-red-100 text-red-600' :
                              challenge.severity === 'Medium' ? 'bg-yellow-100 text-yellow-600' :
                              'bg-green-100 text-green-600'
                            }`}>
                              {challenge.severity}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-3">{challenge.description}</p>
                          <div className="flex items-center space-x-2 text-sm text-orange-600">
                            <ArrowRight className="w-4 h-4" />
                            <span className="font-medium">Solution: {challenge.solution}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="solutions">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-orange-200">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-12 h-12 ${solution.color} rounded-full flex items-center justify-center`}>
                          {solution.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{solution.title}</h3>
                          <p className="text-sm text-gray-600">Timeline: {solution.timeline}</p>
                        </div>
                      </div>
                      <p className="text-gray-600">{solution.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Risk Assessment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
              Risk Assessment
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-red-200 bg-red-50">
              <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-red-800">High Risk</h3>
              <ul className="text-left space-y-2 text-red-700">
                <li>• Data privacy regulations</li>
                <li>• Market competition</li>
                <li>• Technology adoption</li>
              </ul>
            </Card>
            
            <Card className="p-8 text-center border-yellow-200 bg-yellow-50">
              <AlertTriangle className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-yellow-800">Medium Risk</h3>
              <ul className="text-left space-y-2 text-yellow-700">
                <li>• User adoption rates</li>
                <li>• Integration complexity</li>
                <li>• Scalability challenges</li>
              </ul>
            </Card>
            
            <Card className="p-8 text-center border-green-200 bg-green-50">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-green-800">Low Risk</h3>
              <ul className="text-left space-y-2 text-green-700">
                <li>• Technical feasibility</li>
                <li>• Team capabilities</li>
                <li>• Market demand</li>
              </ul>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default FeasibilityPage
