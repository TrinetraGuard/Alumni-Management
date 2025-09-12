import {
  Award,
  BarChart3,
  BookOpen,
  Brain,
  CheckCircle,
  ExternalLink,
  FileText,
  Globe,
  Shield,
  Target,
  TrendingUp,
  XCircle,
  Zap
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { getSEOData, useSEO } from '../lib/seo'

import { motion } from 'framer-motion'

const ResearchPage = () => {
  // SEO setup
  const seoData = getSEOData('research')
  useSEO(seoData)

  const competitorComparison = [
    {
      feature: 'AI-Powered Matching',
      graduway: true,
      almabase: false,
      hivebrite: false,
      allumino: true
    },
    {
      feature: 'Blockchain Credentials',
      graduway: false,
      almabase: false,
      hivebrite: false,
      allumino: true
    },
    {
      feature: 'Mobile-First Design',
      graduway: true,
      almabase: true,
      hivebrite: true,
      allumino: true
    },
    {
      feature: 'Career Visualization',
      graduway: false,
      almabase: false,
      hivebrite: false,
      allumino: true
    },
    {
      feature: 'Real-time Analytics',
      graduway: true,
      almabase: true,
      hivebrite: true,
      allumino: true
    },
    {
      feature: 'Event Management',
      graduway: true,
      almabase: true,
      hivebrite: true,
      allumino: true
    },
    {
      feature: 'Donation Platform',
      graduway: true,
      almabase: true,
      hivebrite: false,
      allumino: true
    },
    {
      feature: 'Mentorship System',
      graduway: false,
      almabase: true,
      hivebrite: true,
      allumino: true
    },
    {
      feature: 'Alumni Marketplace',
      graduway: false,
      almabase: false,
      hivebrite: false,
      allumino: true
    },
    {
      feature: 'Gamification',
      graduway: false,
      almabase: false,
      hivebrite: true,
      allumino: true
    },
    {
      feature: 'Cloud Scalability',
      graduway: true,
      almabase: true,
      hivebrite: true,
      allumino: true
    },
    {
      feature: 'Open Source',
      graduway: false,
      almabase: false,
      hivebrite: false,
      allumino: true
    }
  ]

  const researchPapers = [
    {
      title: 'Blockchain-Based Digital Credentials in Higher Education',
      authors: 'MIT Media Lab, 2023',
      description: 'Comprehensive study on implementing blockchain technology for verifiable academic credentials',
      link: 'https://example.com/mit-blockchain-credentials',
      icon: <Shield className="w-5 h-5" />,
      category: 'Blockchain'
    },
    {
      title: 'AI-Powered Mentorship Matching in Educational Networks',
      authors: 'Stanford AI Research, 2023',
      description: 'Machine learning algorithms for optimal mentor-mentee pairing in alumni networks',
      link: 'https://example.com/stanford-ai-mentorship',
      icon: <Brain className="w-5 h-5" />,
      category: 'AI/ML'
    },
    {
      title: 'Alumni Engagement and Donation Patterns: A Longitudinal Study',
      authors: 'Council for Advancement and Support of Education, 2023',
      description: 'Analysis of alumni giving behavior and engagement strategies across 500+ institutions',
      link: 'https://example.com/case-alumni-study',
      icon: <TrendingUp className="w-5 h-5" />,
      category: 'Engagement'
    },
    {
      title: 'Mobile-First Design in Educational Technology',
      authors: 'Harvard Graduate School of Education, 2023',
      description: 'Impact of mobile-first design on user engagement in educational platforms',
      link: 'https://example.com/harvard-mobile-design',
      icon: <Globe className="w-5 h-5" />,
      category: 'UX/UI'
    },
    {
      title: 'Blockcerts: An Open Standard for Blockchain Credentials',
      authors: 'MIT Media Lab & Learning Machine, 2022',
      description: 'Technical specification for creating, issuing, and verifying blockchain-based certificates',
      link: 'https://example.com/blockcerts-spec',
      icon: <FileText className="w-5 h-5" />,
      category: 'Standards'
    },
    {
      title: 'Gamification in Educational Platforms: A Meta-Analysis',
      authors: 'University of California, Berkeley, 2023',
      description: 'Systematic review of gamification effects on learning and engagement outcomes',
      link: 'https://example.com/berkeley-gamification',
      icon: <Award className="w-5 h-5" />,
      category: 'Gamification'
    }
  ]

  const marketResearch = [
    {
      metric: 'Global Alumni Software Market',
      value: '$2.3B',
      year: '2025',
      description: 'Projected market size for alumni engagement software',
      source: 'Grand View Research',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      metric: 'Mobile Usage in Alumni Platforms',
      value: '75%',
      year: '2023',
      description: 'Percentage of alumni preferring mobile-first solutions',
      source: 'Alumni Engagement Survey',
      icon: <Globe className="w-6 h-6" />
    },
    {
      metric: 'Average Donation Increase',
      value: '156-209%',
      year: '2023',
      description: 'Increase in alumni giving with engagement platforms',
      source: 'Stanford University Study',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      metric: 'Institution Adoption Rate',
      value: '68%',
      year: '2023',
      description: 'Percentage of universities using digital alumni platforms',
      source: 'Higher Education Technology Report',
      icon: <Target className="w-6 h-6" />
    }
  ]

  const technologyTrends = [
    {
      trend: 'AI Integration',
      description: 'Machine learning and natural language processing in educational platforms',
      impact: 'High',
      timeline: '2024-2025',
      icon: <Brain className="w-6 h-6" />,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      trend: 'Blockchain Adoption',
      description: 'Decentralized credentials and verifiable records in education',
      impact: 'Medium',
      timeline: '2025-2026',
      icon: <Shield className="w-6 h-6" />,
      color: 'bg-green-100 text-green-600'
    },
    {
      trend: 'Mobile-First Design',
      description: 'Responsive and native mobile applications for better engagement',
      impact: 'High',
      timeline: '2024',
      icon: <Globe className="w-6 h-6" />,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      trend: 'Cloud Migration',
      description: 'Scalable cloud infrastructure for global accessibility',
      impact: 'High',
      timeline: '2024',
      icon: <Zap className="w-6 h-6" />,
      color: 'bg-orange-100 text-orange-600'
    }
  ]

  const systemComparison = {
    traditional: {
      title: 'Traditional Alumni System',
      features: [
        'Basic contact management',
        'Email newsletters',
        'Event registration',
        'Simple donation forms',
        'Static website',
        'Limited analytics'
      ],
      limitations: [
        'Poor user experience',
        'Low engagement rates',
        'Fragmented data',
        'No personalization',
        'Limited mobile support',
        'Manual processes'
      ]
    },
    allumino: {
      title: 'Allumino Platform',
      features: [
        'AI-powered recommendations',
        'Blockchain credentials',
        'Real-time chat & messaging',
        'Career visualization',
        'Mobile-first design',
        'Advanced analytics'
      ],
      advantages: [
        'Personalized experience',
        'High engagement rates',
        'Unified data platform',
        'Intelligent matching',
        'Native mobile apps',
        'Automated workflows'
      ]
    }
  }


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
              Research & References
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive research foundation supporting the Allumino platform, 
            including market analysis, competitor comparison, and academic references.
          </p>
        </motion.div>

        {/* Competitor Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
              Competitor Comparison
            </span>
          </h2>
          
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-orange-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold">Graduway</th>
                    <th className="px-6 py-4 text-center font-semibold">Almabase</th>
                    <th className="px-6 py-4 text-center font-semibold">Hivebrite</th>
                    <th className="px-6 py-4 text-center font-semibold text-orange-600">Allumino</th>
                  </tr>
                </thead>
                <tbody>
                  {competitorComparison.map((row, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {row.graduway ? (
                          <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.almabase ? (
                          <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.hivebrite ? (
                          <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.allumino ? (
                          <CheckCircle className="w-5 h-5 text-orange-500 mx-auto" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>

        {/* Research Papers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
              Key Research Papers
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchPapers.map((paper, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-orange-200">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="p-1 bg-orange-100 rounded text-orange-600">
                        {paper.icon}
                      </div>
                      <span className="text-sm font-medium text-orange-600">{paper.category}</span>
                    </div>
                    <CardTitle className="text-lg">{paper.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-600">{paper.authors}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{paper.description}</p>
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-orange-600 hover:text-orange-700 text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Read Paper
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Market Research */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
              Market Research
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketResearch.map((research, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-orange-200">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600">
                    {research.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{research.value}</h3>
                  <p className="text-lg font-semibold mb-2">{research.metric}</p>
                  <p className="text-sm text-gray-600 mb-2">{research.description}</p>
                  <p className="text-xs text-gray-500">Source: {research.source}</p>
                  <p className="text-xs text-gray-500">Year: {research.year}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Trends */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
              Technology Trends
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologyTrends.map((trend, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 border-orange-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 ${trend.color} rounded-full flex items-center justify-center`}>
                      {trend.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{trend.trend}</h3>
                      <p className="text-sm text-gray-600">Timeline: {trend.timeline}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3">{trend.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Impact Level:</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      trend.impact === 'High' ? 'bg-green-100 text-green-600' :
                      trend.impact === 'Medium' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-red-100 text-red-600'
                    }`}>
                      {trend.impact}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* System Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
              System Comparison
            </span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 border-red-200 bg-red-50">
              <h3 className="text-2xl font-bold mb-6 text-red-800">{systemComparison.traditional.title}</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-red-700">Features</h4>
                <ul className="space-y-2">
                  {systemComparison.traditional.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-red-600">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3 text-red-700">Limitations</h4>
                <ul className="space-y-2">
                  {systemComparison.traditional.limitations.map((limitation, index) => (
                    <li key={index} className="flex items-center text-red-600">
                      <XCircle className="w-4 h-4 mr-2 text-red-500" />
                      {limitation}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card className="p-8 border-orange-200 bg-orange-50">
              <h3 className="text-2xl font-bold mb-6 text-orange-800">{systemComparison.allumino.title}</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-orange-700">Features</h4>
                <ul className="space-y-2">
                  {systemComparison.allumino.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-orange-600">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3 text-orange-700">Advantages</h4>
                <ul className="space-y-2">
                  {systemComparison.allumino.advantages.map((advantage, index) => (
                    <li key={index} className="flex items-center text-orange-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-orange-500" />
                      {advantage}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* References */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0">
            <h2 className="text-3xl font-bold mb-4">Complete Research Bibliography</h2>
            <p className="text-xl mb-6 opacity-90">
              Access our comprehensive research foundation with 50+ academic papers, 
              market studies, and industry reports.
            </p>
            <button className="px-8 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              <BookOpen className="w-5 h-5 inline mr-2" />
              Download Full Bibliography
            </button>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default ResearchPage
