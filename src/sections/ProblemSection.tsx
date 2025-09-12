import { AlertTriangle, DollarSign, MessageSquare, TrendingUp, Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

import { motion } from 'framer-motion'

const ProblemSection = () => {
  const problems = [
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: "Scattered Alumni Data",
      description: "Alumni information is fragmented across multiple platforms, making it difficult to maintain comprehensive records and track engagement."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-orange-500" />,
      title: "Limited Engagement Channels",
      description: "Current engagement relies heavily on WhatsApp groups and email lists, which are inefficient and lack structured communication."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
      title: "No Structured Donation System",
      description: "Lack of transparent, trackable donation mechanisms leads to reduced fundraising effectiveness and donor trust issues."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: "Missed Growth Opportunities",
      description: "Absence of mentorship programs and career networking leads to missed opportunities for professional development and collaboration."
    }
  ]

  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              The Problem
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional alumni management systems face significant challenges that limit their effectiveness and impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-red-500">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {problem.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {problem.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Impact statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The Impact
              </h3>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                These challenges result in <span className="font-semibold text-red-600">reduced alumni engagement</span>, 
                <span className="font-semibold text-orange-600"> lower donation rates</span>, 
                <span className="font-semibold text-yellow-600"> missed mentorship opportunities</span>, and 
                <span className="font-semibold text-purple-600"> limited career growth</span> for both alumni and current students.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemSection
