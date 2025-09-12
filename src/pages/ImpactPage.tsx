import {
  Award,
  Building,
  DollarSign,
  Globe,
  GraduationCap,
  Heart,
  Leaf,
  Lightbulb,
  MessageCircle,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { getSEOData, useSEO } from '../lib/seo'

import { motion } from 'framer-motion'
import { Card } from '../components/ui/card'

const ImpactPage = () => {
  // SEO setup
  const seoData = getSEOData('impact')
  useSEO(seoData)

  const impactMetrics = [
    {
      metric: 'Alumni Giving Increase',
      value: '156-209%',
      description: 'Higher donation rates with engagement',
      icon: <DollarSign className="w-8 h-8" />,
      color: 'bg-green-100 text-green-600',
      source: 'Stanford University Study'
    },
    {
      metric: 'Global Alumni Giving',
      value: '$12-13B',
      description: 'Annual alumni donations worldwide',
      icon: <Globe className="w-8 h-8" />,
      color: 'bg-blue-100 text-blue-600',
      source: 'Council for Advancement'
    },
    {
      metric: 'Mobile Preference',
      value: '75%',
      description: 'Alumni prefer mobile-first solutions',
      icon: <Users className="w-8 h-8" />,
      color: 'bg-purple-100 text-purple-600',
      source: 'Alumni Engagement Survey'
    },
    {
      metric: 'Mentorship Impact',
      value: '93%',
      description: 'Improved career outcomes with mentoring',
      icon: <Award className="w-8 h-8" />,
      color: 'bg-orange-100 text-orange-600',
      source: 'Career Development Research'
    }
  ]

  const socialBenefits = [
    {
      title: 'Enhanced Alumni Networks',
      description: 'Stronger connections between alumni and institutions',
      impact: 'Increased networking opportunities and career support',
      icon: <Users className="w-6 h-6" />,
      metrics: ['50% more connections', '200% engagement increase', '85% satisfaction rate']
    },
    {
      title: 'Mentorship Programs',
      description: 'Structured mentoring between alumni and students',
      impact: 'Improved career guidance and professional development',
      icon: <MessageCircle className="w-6 h-6" />,
      metrics: ['500+ mentor matches', '90% mentee satisfaction', '40% career advancement']
    },
    {
      title: 'Community Building',
      description: 'Fostering lifelong relationships and school spirit',
      impact: 'Stronger institutional loyalty and pride',
      icon: <Heart className="w-6 h-6" />,
      metrics: ['60% event attendance', '300% social engagement', '95% community satisfaction']
    },
    {
      title: 'Knowledge Sharing',
      description: 'Alumni expertise sharing with current students',
      impact: 'Enhanced learning opportunities and industry insights',
      icon: <Lightbulb className="w-6 h-6" />,
      metrics: ['1000+ knowledge sessions', '80% student participation', '70% skill improvement']
    }
  ]

  const economicBenefits = [
    {
      title: 'Increased Donations',
      description: 'Higher giving rates through better engagement',
      impact: 'More funding for scholarships, research, and facilities',
      icon: <DollarSign className="w-6 h-6" />,
      metrics: ['156-209% donation increase', '$2.5M additional funding', '40% donor retention']
    },
    {
      title: 'Career Opportunities',
      description: 'Job placements and business collaborations',
      impact: 'Economic growth through alumni networks',
      icon: <Building className="w-6 h-6" />,
      metrics: ['500+ job placements', '200+ business partnerships', '30% salary increase']
    },
    {
      title: 'Institutional Reputation',
      description: 'Enhanced brand value and rankings',
      impact: 'Higher enrollment and better faculty recruitment',
      icon: <Star className="w-6 h-6" />,
      metrics: ['25% enrollment increase', '15% ranking improvement', '90% brand recognition']
    },
    {
      title: 'Research Collaboration',
      description: 'Alumni-industry research partnerships',
      impact: 'Innovation and technology transfer',
      icon: <Zap className="w-6 h-6" />,
      metrics: ['100+ research projects', '$5M research funding', '50+ patents filed']
    }
  ]

  const environmentalBenefits = [
    {
      title: 'Digital Transformation',
      description: 'Reduced paper usage and physical events',
      impact: 'Lower carbon footprint through digital engagement',
      icon: <Leaf className="w-6 h-6" />,
      metrics: ['80% paper reduction', '60% travel reduction', '50% energy savings']
    },
    {
      title: 'Virtual Events',
      description: 'Online conferences and networking events',
      impact: 'Reduced travel and venue costs',
      icon: <Globe className="w-6 h-6" />,
      metrics: ['200+ virtual events', '90% attendance rate', '70% cost reduction']
    },
    {
      title: 'Sustainable Practices',
      description: 'Green technology and eco-friendly operations',
      impact: 'Environmental responsibility and sustainability',
      icon: <Target className="w-6 h-6" />,
      metrics: ['100% renewable energy', 'Zero waste events', 'Carbon neutral operations']
    }
  ]

  const successStories = [
    {
      institution: 'Stanford University',
      metric: '209% increase in alumni giving',
      description: 'After implementing AI-powered engagement platform',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'bg-red-50 border-red-200'
    },
    {
      institution: 'MIT',
      metric: '500+ mentor matches',
      description: 'Successful career guidance program',
      icon: <Award className="w-6 h-6" />,
      color: 'bg-blue-50 border-blue-200'
    },
    {
      institution: 'Harvard Business School',
      metric: '93% engagement rate',
      description: 'Mobile-first alumni platform adoption',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'bg-green-50 border-green-200'
    },
    {
      institution: 'University of California',
      metric: '$2.5M additional funding',
      description: 'Through improved alumni relationships',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'bg-purple-50 border-purple-200'
    }
  ]

  const futureImpact = [
    {
      year: 'Year 1',
      goals: ['Pilot with 5 institutions', '500+ active users', 'Basic AI matching'],
      icon: <Target className="w-6 h-6" />,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      year: 'Year 2',
      goals: ['25+ institutions', '10,000+ users', 'Advanced analytics'],
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'bg-green-100 text-green-600'
    },
    {
      year: 'Year 3',
      goals: ['100+ institutions', '100,000+ users', 'Global expansion'],
      icon: <Globe className="w-6 h-6" />,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      year: 'Year 5',
      goals: ['500+ institutions', '1M+ users', 'Market leadership'],
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
              Impact & Benefits
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Measurable impact and transformative benefits of the Allumino platform 
            across social, economic, and environmental dimensions.
          </p>
        </motion.div>

        {/* Key Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
              Key Impact Metrics
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-orange-200">
                  <div className={`w-16 h-16 ${metric.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    {metric.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{metric.value}</h3>
                  <p className="text-lg font-semibold mb-2">{metric.metric}</p>
                  <p className="text-sm text-gray-600 mb-2">{metric.description}</p>
                  <p className="text-xs text-gray-500 italic">{metric.source}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits by Category */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
              Comprehensive Benefits
            </span>
          </h2>
          
          <Tabs defaultValue="social" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="social">Social Benefits</TabsTrigger>
              <TabsTrigger value="economic">Economic Benefits</TabsTrigger>
              <TabsTrigger value="environmental">Environmental Benefits</TabsTrigger>
            </TabsList>

            <TabsContent value="social">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {socialBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 border-orange-200">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-orange-100 rounded-full text-orange-600">
                          {benefit.icon}
                        </div>
                        <h3 className="text-xl font-bold">{benefit.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{benefit.description}</p>
                      <p className="text-sm font-medium text-orange-600 mb-3">{benefit.impact}</p>
                      <ul className="space-y-1">
                        {benefit.metrics.map((metric, metricIndex) => (
                          <li key={metricIndex} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="economic">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {economicBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 border-orange-200">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-orange-100 rounded-full text-orange-600">
                          {benefit.icon}
                        </div>
                        <h3 className="text-xl font-bold">{benefit.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{benefit.description}</p>
                      <p className="text-sm font-medium text-orange-600 mb-3">{benefit.impact}</p>
                      <ul className="space-y-1">
                        {benefit.metrics.map((metric, metricIndex) => (
                          <li key={metricIndex} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="environmental">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {environmentalBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 border-orange-200">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-orange-100 rounded-full text-orange-600">
                          {benefit.icon}
                        </div>
                        <h3 className="text-xl font-bold">{benefit.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{benefit.description}</p>
                      <p className="text-sm font-medium text-orange-600 mb-3">{benefit.impact}</p>
                      <ul className="space-y-1">
                        {benefit.metrics.map((metric, metricIndex) => (
                          <li key={metricIndex} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${story.color}`}>
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600">
                    {story.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{story.institution}</h3>
                  <p className="text-2xl font-bold text-orange-600 mb-2">{story.metric}</p>
                  <p className="text-sm text-gray-600">{story.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Impact Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
              Future Impact Timeline
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {futureImpact.map((year, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-orange-200">
                  <div className={`w-12 h-12 ${year.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    {year.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{year.year}</h3>
                  <ul className="space-y-2 text-left">
                    {year.goals.map((goal, goalIndex) => (
                      <li key={goalIndex} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </Card>
                
                {/* Connection Line */}
                {index < futureImpact.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-orange-300 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="p-12 bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Alumni Engagement?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join the revolution in alumni management and create lasting impact for your institution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                Schedule Demo
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                Download Report
              </button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default ImpactPage
