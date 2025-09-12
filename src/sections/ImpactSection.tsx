import {
    Award,
    Briefcase,
    CheckCircle,
    DollarSign,
    Globe,
    Heart,
    Leaf,
    TrendingUp,
    Users
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { useEffect, useState } from 'react'

import { motion } from 'framer-motion'

const ImpactSection = () => {
  const [counters, setCounters] = useState({
    engagement: 0,
    donations: 0,
    globalGiving: 0,
    mobilePreference: 0
  })

  useEffect(() => {
    const targetCounters = {
      engagement: 93,
      donations: 156,
      globalGiving: 13.5,
      mobilePreference: 75
    }
    const animateCounters = () => {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps
        const easeOut = 1 - Math.pow(1 - progress, 3)

        setCounters({
          engagement: Math.floor(targetCounters.engagement * easeOut),
          donations: Math.floor(targetCounters.donations * easeOut),
          globalGiving: Math.floor(targetCounters.globalGiving * easeOut * 10) / 10,
          mobilePreference: Math.floor(targetCounters.mobilePreference * easeOut)
        })

        if (step >= steps) {
          clearInterval(timer)
          setCounters(targetCounters)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }

    const timer = setTimeout(animateCounters, 500)
    return () => clearTimeout(timer)
  }, [])

  const impactStats = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      value: `${counters.engagement}%`,
      label: "Alumni Engagement",
      description: "Increase in active alumni participation"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      value: `${counters.donations}%`,
      label: "Higher Donations",
      description: "Increase in donation likelihood via mentorship"
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      value: `$${counters.globalGiving}B`,
      label: "Global Giving",
      description: "Total alumni giving worldwide (2022)"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
      value: `${counters.mobilePreference}%`,
      label: "Mobile Preference",
      description: "Alumni prefer mobile-friendly platforms"
    }
  ]

  const benefits = [
    {
      category: "Social Impact",
      icon: <Heart className="w-8 h-8 text-red-500" />,
      items: [
        "Strengthened alumni-student connections",
        "Enhanced mentorship opportunities",
        "Improved career guidance and networking",
        "Stronger institutional community bonds"
      ]
    },
    {
      category: "Economic Impact",
      icon: <Briefcase className="w-8 h-8 text-blue-500" />,
      items: [
        "Increased fundraising efficiency",
        "Higher donation rates and amounts",
        "New revenue streams for institutions",
        "Cost reduction through automation"
      ]
    },
    {
      category: "Environmental Impact",
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      items: [
        "Reduced paper-based communications",
        "Digital-first approach to events",
        "Lower carbon footprint for networking",
        "Sustainable engagement practices"
      ]
    }
  ]

  const achievements = [
    {
      title: "Engagement Boost",
      description: "Significant increase in alumni participation rates",
      icon: <Award className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Fundraising Success",
      description: "Higher donation rates through transparent tracking",
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: "Digital Transformation",
      description: "Modern, mobile-first alumni experience",
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Global Reach",
      description: "Connect alumni worldwide seamlessly",
      icon: <Globe className="w-6 h-6 text-purple-500" />
    }
  ]

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Impact & Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Measurable impact across social, economic, and environmental dimensions
          </p>
        </motion.div>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <motion.div
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-gray-900 mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {stat.label}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits by Category */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
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
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {benefit.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900 mb-4">
                Key Achievements
              </CardTitle>
              <p className="text-gray-600">
                Measurable outcomes and success metrics
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 bg-white rounded-lg shadow-sm"
                  >
                    <div className="flex justify-center mb-3">
                      {achievement.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {achievement.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default ImpactSection
