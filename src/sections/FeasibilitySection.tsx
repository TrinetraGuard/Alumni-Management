import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import {
    CheckCircle,
    Database,
    DollarSign,
    Lightbulb,
    Shield,
    Target,
    TrendingUp,
    Users,
    Zap
} from 'lucide-react'

import { motion } from 'framer-motion'

const FeasibilitySection = () => {
  const viabilityCards = [
    {
      title: "Technical Viability",
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      points: [
        "Proven technology stack with mature frameworks",
        "Cloud-native architecture for scalability",
        "AI/ML models with established libraries",
        "Blockchain integration using standard protocols"
      ]
    },
    {
      title: "Economic Viability",
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      points: [
        "Reduced operational costs through automation",
        "Revenue streams from premium features",
        "Cost-effective cloud infrastructure",
        "ROI through increased alumni engagement"
      ]
    },
    {
      title: "Social Viability",
      icon: <Users className="w-8 h-8 text-purple-600" />,
      points: [
        "High demand for alumni networking platforms",
        "Existing user base in educational institutions",
        "Strong community engagement potential",
        "Alignment with digital transformation trends"
      ]
    }
  ]

  const businessPotential = [
    {
      title: "Fundraising",
      icon: <DollarSign className="w-6 h-6 text-green-600" />,
      description: "Transparent donation tracking increases donor confidence and participation rates"
    },
    {
      title: "Recruiter Partnerships",
      icon: <Target className="w-6 h-6 text-blue-600" />,
      description: "Premium access for recruiters to connect with qualified alumni talent"
    },
    {
      title: "Alumni Marketplace",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      description: "Commission-based revenue from business collaborations and job placements"
    }
  ]

  const useCases = [
    {
      title: "Alumni",
      description: "Career networking, mentorship opportunities, and professional development"
    },
    {
      title: "Students",
      description: "Access to alumni mentors, career guidance, and internship opportunities"
    },
    {
      title: "Faculty",
      description: "Research collaborations, industry connections, and project partnerships"
    },
    {
      title: "Employers",
      description: "Talent acquisition, industry insights, and recruitment opportunities"
    }
  ]

  const challenges = [
    {
      challenge: "Data Privacy & Security",
      solution: "End-to-end encryption, GDPR compliance, and blockchain-based verification",
      icon: <Shield className="w-6 h-6 text-red-500" />
    },
    {
      challenge: "Adoption Resistance",
      solution: "Gamification, incentives, and gradual migration from existing systems",
      icon: <Lightbulb className="w-6 h-6 text-yellow-500" />
    },
    {
      challenge: "Scalability Concerns",
      solution: "Cloud-native architecture, microservices, and auto-scaling infrastructure",
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      challenge: "Blockchain Costs",
      solution: "Layer-2 solutions, hybrid approach, and cost-optimized transaction batching",
      icon: <Database className="w-6 h-6 text-green-500" />
    }
  ]

  return (
    <section id="feasibility" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Feasibility & Viability
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive analysis of technical, economic, and social feasibility with clear mitigation strategies
          </p>
        </motion.div>

        {/* Viability Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {viabilityCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {card.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {card.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Business Potential */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900 mb-4">
                Business Potential
              </CardTitle>
              <p className="text-gray-600">
                Multiple revenue streams and growth opportunities
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {businessPotential.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 bg-white rounded-lg shadow-sm"
                  >
                    <div className="flex justify-center mb-4">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Target Use Cases
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {useCase.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Challenges & Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Challenges & Solutions
          </h3>
          <div className="space-y-6">
            {challenges.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm"
              >
                <div className="flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.challenge}
                  </h4>
                  <p className="text-gray-600">
                    <span className="font-medium text-green-600">Solution: </span>
                    {item.solution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeasibilitySection
