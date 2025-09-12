import { AlertTriangle, BarChart3, Clock, DollarSign, MessageSquare, TrendingUp, Users, XCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { getSEOData, useSEO } from '../lib/seo'

const ProblemPage = () => {
  // SEO setup
  const seoData = getSEOData('problem')
  useSEO(seoData)

  const problems = [
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: "Scattered Alumni Data",
      description: "Alumni information is fragmented across multiple platforms, making it difficult to maintain comprehensive records and track engagement.",
      stats: "Only 23% of institutions have centralized alumni data",
      impact: "High"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-orange-500" />,
      title: "Limited Engagement Channels",
      description: "Current engagement relies heavily on WhatsApp groups and email lists, which are inefficient and lack structured communication.",
      stats: "67% of alumni prefer digital platforms over traditional methods",
      impact: "High"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
      title: "No Structured Donation System",
      description: "Lack of transparent, trackable donation mechanisms leads to reduced fundraising effectiveness and donor trust issues.",
      stats: "Donation rates drop by 40% without transparency",
      impact: "Critical"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: "Missed Growth Opportunities",
      description: "Absence of mentorship programs and career networking leads to missed opportunities for professional development and collaboration.",
      stats: "89% of alumni want mentorship opportunities",
      impact: "High"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Outdated Communication Methods",
      description: "Traditional communication methods fail to engage modern alumni who expect instant, mobile-first experiences.",
      stats: "78% of alumni check mobile devices first",
      impact: "Medium"
    },
    {
      icon: <XCircle className="w-8 h-8 text-pink-500" />,
      title: "Data Privacy Concerns",
      description: "Lack of secure, privacy-compliant systems prevents institutions from collecting and utilizing alumni data effectively.",
      stats: "GDPR compliance issues affect 65% of institutions",
      impact: "Critical"
    }
  ]

  const impactData = [
    { metric: "Alumni Engagement", current: "23%", target: "85%", gap: "62%" },
    { metric: "Donation Collection", current: "31%", target: "78%", gap: "47%" },
    { metric: "Mentorship Programs", current: "12%", target: "65%", gap: "53%" },
    { metric: "Career Placements", current: "18%", target: "72%", gap: "54%" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              The Problem
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional alumni management systems face significant challenges that limit their effectiveness and impact
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div key={index}>
              <Card className="h-full hover:shadow-orange-lg transition-all duration-300 hover-lift border-l-4 border-l-red-500">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {problem.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {problem.title}
                  </CardTitle>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    problem.impact === 'Critical' ? 'bg-red-100 text-red-800' :
                    problem.impact === 'High' ? 'bg-orange-100 text-orange-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {problem.impact} Impact
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed mb-4">
                    {problem.description}
                  </p>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-gray-700 text-center">
                      {problem.stats}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Impact Metrics */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900 mb-4">
                Current vs Target Performance
              </CardTitle>
              <p className="text-gray-600">
                Key metrics showing the gap between current performance and industry standards
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {impactData.map((data, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm hover-lift">
                    <h4 className="font-semibold text-gray-900 mb-2">{data.metric}</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Current:</span>
                        <span className="font-semibold text-red-600">{data.current}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Target:</span>
                        <span className="font-semibold text-green-600">{data.target}</span>
                      </div>
                      <div className="flex justify-between text-sm font-bold">
                        <span className="text-gray-700">Gap:</span>
                        <span className="text-orange-600">{data.gap}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Industry Statistics */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The Impact
              </h3>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-6">
                These challenges result in <span className="font-semibold text-red-600">reduced alumni engagement</span>, 
                <span className="font-semibold text-orange-600"> lower donation rates</span>, 
                <span className="font-semibold text-yellow-600"> missed mentorship opportunities</span>, and 
                <span className="font-semibold text-purple-600"> limited career growth</span> for both alumni and current students.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-red-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">$2.3B Lost</h4>
                  <p className="text-sm text-gray-600">Annual revenue lost due to poor alumni engagement</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-orange-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">67% Disconnect</h4>
                  <p className="text-sm text-gray-600">Alumni who lose connection with their institutions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">45% Decline</h4>
                  <p className="text-sm text-gray-600">In career advancement opportunities for students</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ProblemPage