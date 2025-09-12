import {
  Brain,
  CheckCircle,
  DollarSign,
  Globe,
  Network,
  Rss,
  Shield,
  Store,
  Trophy,
  Users,
  Zap
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { getSEOData, useSEO } from '../lib/seo'

const SolutionPage = () => {
  // SEO setup
  const seoData = getSEOData('solution')
  useSEO(seoData)

  const solutions = [
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Centralized Alumni Hub",
      description: "Single platform for all alumni data, profiles, and interactions",
      features: ["Unified Database", "Profile Management", "Real-time Updates", "Cross-platform Sync"]
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: "AI-Powered Mentor Matching",
      description: "Intelligent matching system connecting mentors with mentees",
      features: ["ML Algorithms", "Skill-based Matching", "Preference Learning", "Success Tracking"]
    },
    {
      icon: <Network className="w-8 h-8 text-green-600" />,
      title: "Career Graph Visualization",
      description: "Interactive network maps showing career progression paths",
      features: ["Interactive Maps", "Career Paths", "Success Stories", "Industry Insights"]
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      title: "Blockchain Credential Verification",
      description: "Secure, tamper-proof verification of achievements and credentials",
      features: ["Immutable Records", "Smart Contracts", "Instant Verification", "Fraud Prevention"]
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-600" />,
      title: "Transparent Donation System",
      description: "Trackable, transparent fundraising with real-time impact reporting",
      features: ["Real-time Tracking", "Impact Reports", "Donor Recognition", "Tax Benefits"]
    },
    {
      icon: <Rss className="w-8 h-8 text-pink-600" />,
      title: "Personalized Alumni Feed",
      description: "AI-curated content and updates based on individual interests",
      features: ["AI Curation", "Personalized Content", "Event Notifications", "Relevant Updates"]
    },
    {
      icon: <Store className="w-8 h-8 text-orange-600" />,
      title: "Alumni Marketplace & Collaboration Hub",
      description: "Platform for business opportunities, partnerships, and collaboration",
      features: ["Job Listings", "Business Opportunities", "Partnerships", "Collaboration Tools"]
    },
    {
      icon: <Trophy className="w-8 h-8 text-red-600" />,
      title: "Gamification & Recognition",
      description: "Engagement rewards, achievements, and recognition systems",
      features: ["Achievement Badges", "Leaderboards", "Rewards System", "Recognition Programs"]
    }
  ]

  const keyBenefits = [
    {
      title: "Comprehensive",
      description: "Covers all aspects of alumni engagement and management",
      icon: <CheckCircle className="w-6 h-6 text-green-500" />
    },
    {
      title: "Intelligent",
      description: "AI-powered features for personalized experiences",
      icon: <Brain className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Secure",
      description: "Blockchain-based security and data integrity",
      icon: <Shield className="w-6 h-6 text-purple-500" />
    },
    {
      title: "Scalable",
      description: "Cloud-native architecture for global reach",
      icon: <Globe className="w-6 h-6 text-orange-500" />
    }
  ]

  const solutionFlow = [
    { step: "Data Collection", description: "Gather alumni information from multiple sources" },
    { step: "AI Processing", description: "Analyze and categorize data using machine learning" },
    { step: "Smart Matching", description: "Connect alumni based on interests and goals" },
    { step: "Engagement", description: "Facilitate meaningful interactions and collaborations" },
    { step: "Impact Tracking", description: "Measure and report on engagement outcomes" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Solution
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Allumino leverages cutting-edge AI, Blockchain, and Cloud technologies to create a comprehensive alumni ecosystem
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index}>
              <Card className="h-full hover:shadow-orange-lg transition-all duration-300 hover-lift group border-l-4 border-l-green-500">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed mb-4">
                    {solution.description}
                  </p>
                  <div className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Solution Flow */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-orange-50 to-green-50 border-orange-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900 mb-4">
                How It Works
              </CardTitle>
              <p className="text-gray-600">
                Our 5-step process ensures maximum engagement and impact
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {solutionFlow.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                      {index + 1}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{step.step}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Benefits */}
        <div className="mb-16">
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {keyBenefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-orange">
                      {benefit.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technology Integration */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-purple-50 to-orange-50 border-purple-200">
            <CardContent className="py-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Technology Integration
                </h3>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                  Seamless integration of cutting-edge technologies for maximum impact
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">AI & Machine Learning</h4>
                  <p className="text-gray-600">Intelligent matching, predictive analytics, and personalized experiences</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Blockchain Security</h4>
                  <p className="text-gray-600">Immutable records, smart contracts, and secure transactions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Cloud Infrastructure</h4>
                  <p className="text-gray-600">Scalable, reliable, and globally accessible platform</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default SolutionPage