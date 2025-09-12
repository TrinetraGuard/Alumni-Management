import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Github, Linkedin, Mail, Users } from 'lucide-react'

import { Button } from '../components/ui/button'
import { motion } from 'framer-motion'

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Ram Lokhande",
      role: "Full Stack Developer & AI Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Expert in React, Node.js, and machine learning with 3+ years of experience in building scalable web applications.",
      github: "https://github.com/ramlokhande",
      linkedin: "https://linkedin.com/in/ramlokhande",
      email: "ram@trinetra.com"
    },
    {
      name: "Priya Sharma",
      role: "Blockchain Developer & Security Expert",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      description: "Specialized in blockchain development, smart contracts, and cybersecurity with expertise in Ethereum and Hyperledger.",
      github: "https://github.com/priyasharma",
      linkedin: "https://linkedin.com/in/priyasharma",
      email: "priya@trinetra.com"
    },
    {
      name: "Arjun Patel",
      role: "Mobile Developer & UX Designer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Flutter and React Native expert with a passion for creating intuitive user experiences and mobile-first design.",
      github: "https://github.com/arjunpatel",
      linkedin: "https://linkedin.com/in/arjunpatel",
      email: "arjun@trinetra.com"
    },
    {
      name: "Sneha Reddy",
      role: "Data Scientist & ML Engineer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Machine learning specialist with expertise in recommendation systems, natural language processing, and data analytics.",
      github: "https://github.com/snehareddy",
      linkedin: "https://linkedin.com/in/snehareddy",
      email: "sneha@trinetra.com"
    },
    {
      name: "Vikram Singh",
      role: "DevOps Engineer & Cloud Architect",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      description: "Cloud infrastructure expert specializing in AWS, Kubernetes, and CI/CD pipelines for scalable deployments.",
      github: "https://github.com/vikramsingh",
      linkedin: "https://linkedin.com/in/vikramsingh",
      email: "vikram@trinetra.com"
    },
    {
      name: "Ananya Gupta",
      role: "Product Manager & Business Analyst",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      description: "Product strategy expert with experience in user research, market analysis, and agile project management.",
      github: "https://github.com/ananyagupta",
      linkedin: "https://linkedin.com/in/ananyagupta",
      email: "ananya@trinetra.com"
    }
  ]

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Team
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the talented individuals behind Allumino - Team Trinetra
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <CardHeader className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative mb-4"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </motion.div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {member.name}
                  </CardTitle>
                  <p className="text-sm text-blue-600 font-medium">
                    {member.role}
                  </p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    {member.description}
                  </p>
                  
                  <div className="flex justify-center space-x-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-blue-50 hover:border-blue-300 transition-colors duration-200"
                      onClick={() => window.open(member.github, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-blue-50 hover:border-blue-300 transition-colors duration-200"
                      onClick={() => window.open(member.linkedin, '_blank')}
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-blue-50 hover:border-blue-300 transition-colors duration-200"
                      onClick={() => window.open(`mailto:${member.email}`, '_blank')}
                    >
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="py-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Team Trinetra Values
                </h3>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                  We believe in innovation, collaboration, and creating meaningful impact through technology
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h4>
                  <p className="text-gray-600">Working together to build something greater than the sum of its parts</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Github className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h4>
                  <p className="text-gray-600">Pushing boundaries and exploring new possibilities in technology</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Impact</h4>
                  <p className="text-gray-600">Creating solutions that make a real difference in people's lives</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
