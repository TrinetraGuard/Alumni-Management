import {
  Brain,
  CheckCircle,
  Database,
  DollarSign,
  Lock,
  Monitor,
  Network,
  Rss,
  Shield,
  Smartphone,
  Store,
  Target,
  Trophy,
  Users,
  Zap
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { getSEOData, useSEO } from '../lib/seo'

const FeaturesPage = () => {
  // SEO setup
  const seoData = getSEOData('features')
  useSEO(seoData)

  const webFeatures = [
    {
      icon: <Monitor className="w-8 h-8 text-blue-600" />,
      title: "Admin Dashboard",
      description: "Comprehensive analytics and management tools for administrators",
      features: ["Real-time Analytics", "User Management", "Content Moderation", "System Monitoring"]
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      title: "Fundraising Transparency",
      description: "Complete visibility into donation flows and impact tracking",
      features: ["Donation Tracking", "Impact Reports", "Financial Analytics", "Transparency Tools"]
    },
    {
      icon: <Network className="w-8 h-8 text-purple-600" />,
      title: "Alumni Network Map",
      description: "Interactive visualization of alumni connections and relationships",
      features: ["Network Visualization", "Connection Mapping", "Relationship Analytics", "Interactive Graphs"]
    },
    {
      icon: <Lock className="w-8 h-8 text-red-600" />,
      title: "Role-based Access",
      description: "Secure access control with customizable permission levels",
      features: ["Permission Management", "Security Controls", "Access Logs", "Multi-level Auth"]
    },
    {
      icon: <Database className="w-8 h-8 text-orange-600" />,
      title: "LinkedIn Sync",
      description: "Seamless integration with LinkedIn for professional data",
      features: ["Profile Sync", "Career Updates", "Professional Data", "Auto-updates"]
    }
  ]

  const mobileFeatures = [
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: "Smart AI Mentor Match",
      description: "AI-powered matching system for finding the perfect mentor",
      features: ["ML Algorithms", "Preference Learning", "Smart Matching", "Success Tracking"]
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "Career Graphs",
      description: "Visual career progression paths and success stories",
      features: ["Career Visualization", "Success Stories", "Path Analysis", "Goal Tracking"]
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-600" />,
      title: "Gamified Engagement",
      description: "Fun and engaging features to boost participation",
      features: ["Achievement Badges", "Leaderboards", "Rewards System", "Progress Tracking"]
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Event Hub & Virtual Reunions",
      description: "Organize and participate in alumni events and reunions",
      features: ["Event Management", "Virtual Meetings", "RSVP System", "Event History"]
    },
    {
      icon: <Store className="w-8 h-8 text-orange-600" />,
      title: "Startup/Job Marketplace",
      description: "Platform for job opportunities and startup collaborations",
      features: ["Job Listings", "Startup Opportunities", "Application Tracking", "Matching System"]
    }
  ]

  const coreFeatures = [
    {
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      title: "Blockchain Security",
      description: "Immutable credential verification and secure transactions",
      impact: "100% Secure"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Real-time Updates",
      description: "Instant notifications and live data synchronization",
      impact: "Instant Sync"
    },
    {
      icon: <Rss className="w-8 h-8 text-pink-600" />,
      title: "Personalized Feed",
      description: "AI-curated content based on individual interests",
      impact: "95% Relevance"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: "Quality Assurance",
      description: "Verified profiles and authenticated information",
      impact: "99.9% Accuracy"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unique Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive platform with specialized features for web and mobile users
          </p>
        </div>

        {/* Web Portal Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Monitor className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-3xl font-bold text-gray-900">Web Portal Features</h3>
            </div>
            <p className="text-lg text-gray-600">
              Powerful administrative and management tools for institutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webFeatures.map((feature, index) => (
              <div key={index}>
                <Card className="h-full hover:shadow-orange-lg transition-all duration-300 hover-lift group border-l-4 border-l-blue-500">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.features.map((item, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile App Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Smartphone className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-3xl font-bold text-gray-900">Mobile App Features</h3>
            </div>
            <p className="text-lg text-gray-600">
              User-friendly mobile experience for alumni engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileFeatures.map((feature, index) => (
              <div key={index}>
                <Card className="h-full hover:shadow-orange-lg transition-all duration-300 hover-lift group border-l-4 border-l-green-500">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.features.map((item, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Core Features */}
        <div>
          <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900 mb-4">
                Core Platform Features
              </CardTitle>
              <p className="text-gray-600">
                Foundational features that power the entire Allumino ecosystem
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {coreFeatures.map((feature, index) => (
                  <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover-lift">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 mb-3">{feature.description}</p>
                    <div className="text-sm font-bold text-orange-600">{feature.impact}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default FeaturesPage