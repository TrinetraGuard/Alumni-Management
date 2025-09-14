import {
    Award,
    Download,
    ExternalLink,
    Github,
    Heart,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Users
} from 'lucide-react'

import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Problem', href: '/problem' },
    { name: 'Solution', href: '/solution' },
    { name: 'Team', href: '/team' }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/trinetra/allumino',
      color: 'hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/company/trinetra',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:itszram@gmail.com',
      color: 'hover:text-orange-600'
    }
  ]

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-orange-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold">Allumino</span>
              </div>
              <p className="text-gray-300 mb-4">
                Smart Alumni Ecosystem powered by AI, Blockchain & Cloud
              </p>
              <p className="text-sm text-gray-400">
                by Team Trinetra
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-orange-400" />
                  <span className="text-gray-300">itszram@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span className="text-gray-300">India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span className="text-gray-300">+91 82757 49101</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social & Actions */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="space-y-4">
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white"
                      onClick={() => window.open(social.href, '_blank')}
                    >
                      {social.icon}
                    </Button>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white"
                    onClick={() => window.open('/sih-report.pdf', '_blank')}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    SIH Report
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white"
                    onClick={() => window.open('https://github.com/trinetra/allumino', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Source
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-orange-800 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>© {currentYear} Team Trinetra. Made with</span>
              <Heart className="w-4 h-4 text-orange-400" />
              <span>for SIH 2025</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-orange-400" />
                <span>Smart India Hackathon 2025</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-orange-400" />
                <span>AI + Blockchain Solution</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer