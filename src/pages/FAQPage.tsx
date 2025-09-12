import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { getSEOData, useSEO } from '../lib/seo'

import { useState } from 'react'

const FAQPage = () => {
  // SEO setup
  const seoData = getSEOData('faq')
  useSEO(seoData)

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is Allumino and how does it work?",
      answer: "Allumino is a comprehensive AI-powered alumni engagement platform that uses blockchain technology to create a secure, transparent ecosystem for alumni management. It connects alumni through intelligent matching, facilitates mentorship programs, enables transparent donations, and provides career development opportunities through a centralized hub."
    },
    {
      question: "How does the AI mentor matching system work?",
      answer: "Our AI system analyzes alumni profiles, career paths, skills, interests, and goals to create intelligent matches between mentors and mentees. It uses machine learning algorithms to continuously improve matching accuracy based on successful mentorship outcomes and user feedback."
    },
    {
      question: "Is my data secure on the Allumino platform?",
      answer: "Yes, Allumino employs multiple layers of security including end-to-end encryption, blockchain-based credential verification, multi-factor authentication, and GDPR compliance. All sensitive data is encrypted and stored securely with regular security audits and updates."
    },
    {
      question: "How does the blockchain integration work?",
      answer: "Blockchain is used for credential verification, donation tracking, and maintaining immutable records of achievements and transactions. This ensures transparency, prevents fraud, and provides verifiable proof of credentials and donations."
    },
    {
      question: "Can I use Allumino on mobile devices?",
      answer: "Yes, Allumino offers both web and mobile applications. The mobile app is available for iOS and Android with features like push notifications, offline mode, biometric authentication, and a mobile-first user interface designed for optimal alumni engagement."
    },
    {
      question: "How much does Allumino cost?",
      answer: "Allumino offers flexible pricing plans based on institution size and requirements. We provide free trials, basic plans for small institutions, and enterprise solutions for large universities. Contact us for a personalized quote based on your specific needs."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide comprehensive support including 24/7 technical assistance, onboarding training, regular updates, documentation, and dedicated account managers for enterprise clients. Our support team is available via email, phone, and live chat."
    },
    {
      question: "How do I get started with Allumino?",
      answer: "Getting started is easy! Simply contact our team at itszram@gmail.com to schedule a demo, discuss your requirements, and begin the onboarding process. We'll help you set up your institution's profile and guide you through the initial configuration."
    },
    {
      question: "Can Allumino integrate with existing systems?",
      answer: "Yes, Allumino offers robust integration capabilities with popular platforms like LinkedIn, payment processors (Razorpay/Stripe), communication services (Twilio), and various CRM systems. We also provide APIs for custom integrations."
    },
    {
      question: "What makes Allumino different from other alumni platforms?",
      answer: "Allumino stands out with its AI-powered matching, blockchain security, transparent donation tracking, comprehensive mobile experience, and focus on creating meaningful connections. Unlike traditional platforms, we provide intelligent insights and automated processes that enhance engagement and outcomes."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about Allumino and how it can benefit your institution
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index}>
              <Card className="hover:shadow-orange-lg transition-all duration-300">
                <CardHeader 
                  className="cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-900 pr-4">
                      {faq.question}
                    </CardTitle>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </div>
                </CardHeader>
                {openIndex === index && (
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                )}
              </Card>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
            <CardContent className="py-12 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Our team is here to help you understand how Allumino can transform your alumni engagement
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="mailto:itszram@gmail.com"
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 hover-lift"
                >
                  Contact Support
                </a>
                <a 
                  href="/demo"
                  className="px-6 py-3 border border-orange-500 text-orange-600 rounded-lg hover:bg-orange-50 transition-all duration-200 hover-lift"
                >
                  Schedule Demo
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default FAQPage