import { Brain, DollarSign, Download, ExternalLink, Monitor, Play, Shield, Smartphone, Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { getSEOData, useSEO } from '../lib/seo'

import { Button } from '../components/ui/button'

const DemoPage = () => {
  // SEO setup
  const seoData = getSEOData('demo')
  useSEO(seoData)

  const demoFeatures = [
    {
      title: "AI Mentor Matching",
      description: "Watch how our AI algorithm matches mentors with mentees based on skills, interests, and career goals",
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      video: "/demo/mentor-matching.mp4",
      duration: "2:30"
    },
    {
      title: "Blockchain Verification",
      description: "See how credentials are verified and stored securely on the blockchain",
      icon: <Shield className="w-8 h-8 text-green-600" />,
      video: "/demo/blockchain-verification.mp4",
      duration: "1:45"
    },
    {
      title: "Donation Tracking",
      description: "Experience transparent donation tracking with real-time impact reporting",
      icon: <DollarSign className="w-8 h-8 text-yellow-600" />,
      video: "/demo/donation-tracking.mp4",
      duration: "2:15"
    },
    {
      title: "Alumni Network",
      description: "Explore the interactive alumni network visualization and connection features",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      video: "/demo/alumni-network.mp4",
      duration: "3:00"
    }
  ]

  const platforms = [
    {
      name: "Web Portal",
      icon: <Monitor className="w-8 h-8 text-blue-600" />,
      description: "Full-featured web application for administrators and desktop users",
      features: ["Admin Dashboard", "Analytics", "User Management", "Content Moderation"],
      demoUrl: "https://demo.allumino.com/web"
    },
    {
      name: "Mobile App",
      icon: <Smartphone className="w-8 h-8 text-green-600" />,
      description: "Native mobile app for iOS and Android with offline capabilities",
      features: ["Push Notifications", "Offline Mode", "Biometric Auth", "Mobile-First UI"],
      demoUrl: "https://demo.allumino.com/mobile"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Live Demo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience Allumino's powerful features through interactive demonstrations
          </p>
        </div>

        {/* Demo Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {demoFeatures.map((feature, index) => (
            <div key={index}>
              <Card className="h-full hover:shadow-orange-lg transition-all duration-300 hover-lift group">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                        {feature.title}
                      </CardTitle>
                      <p className="text-sm text-gray-500">Duration: {feature.duration}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Video Placeholder */}
                  <div className="relative bg-gray-900 rounded-lg overflow-hidden mb-4 group">
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                        <p className="text-white text-sm">Click to play demo</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
                      {feature.duration}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                    onClick={() => window.open(feature.video, '_blank')}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Demo
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Platform Demos */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Platform Demos
            </h3>
            <p className="text-lg text-gray-600">
              Try out our web portal and mobile app demos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <div key={index}>
                <Card className="h-full hover:shadow-orange-lg transition-all duration-300 hover-lift">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      {platform.icon}
                    </div>
                    <CardTitle className="text-2xl text-gray-900 mb-2">
                      {platform.name}
                    </CardTitle>
                    <p className="text-gray-600">
                      {platform.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-6">
                      {platform.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-orange-500 rounded-full" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                      onClick={() => window.open(platform.demoUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Try {platform.name} Demo
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div>
          <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
            <CardContent className="py-12 text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Download our comprehensive demo package or request a personalized demonstration
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-3"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Demo Package
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Request Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default DemoPage