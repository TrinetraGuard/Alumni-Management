import { Award, Code, Github, Linkedin, Mail, Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { getSEOData, useSEO } from '../lib/seo'

import { Button } from '../components/ui/button'

const TeamPage = () => {
  // SEO setup
  const seoData = getSEOData('team')
  useSEO(seoData)

  const teamMembers = [
    {
      name: "Nisarga Lokhande",
      role: "Full Stack Developer & AI/ML Engineer",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFf0LUpm6vKGg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723629889029?e=1760572800&v=beta&t=OA6Ov1NauiDCR-o5X2X8DJTLxoLIjSn7pP8wDYVpHhc",
      description: "Expert in full-stack backend development and AI/ML with comprehensive technical skills. Specializes in building robust server-side applications, machine learning models, and scalable backend architectures.",
      github: "https://github.com/nikobuddy",
      linkedin: "https://www.linkedin.com/in/nslokhande/",
      email: "itzsram@gmail.com",
      skills: ["Python", "Node.js", "TensorFlow", "PyTorch", "MongoDB", "PostgreSQL", "AWS", "Docker", "Machine Learning", "API Development"]
    },
    {
      name: "Rushikesh Landge",
      role: "Frontend Developer & UI Specialist",
      image: "https://media.licdn.com/dms/image/v2/D5635AQGroe21fQanrA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1735480011094?e=1758297600&v=beta&t=dyVtYJgMMtwmXAX6e0v6Wm5HDFaHxl4tNG5k7sobKPM",
      description: "Specialized in frontend development with expertise in React, Node.js, and Tailwind CSS for UI design. Creates responsive, interactive, and visually appealing user interfaces with modern web technologies.",
      github: "https://github.com/rushikesh",
      linkedin: "https://linkedin.com/in/rushikesh-landge",
      email: "rushikesh@trinetra.com",
      skills: ["React", "Node.js", "Tailwind CSS", "JavaScript", "TypeScript", "HTML5", "CSS3", "Responsive Design", "UI/UX", "Frontend Architecture"]
    },
    {
      name: "Dhanashri Sonawane",
      role: "UI/UX Designer & Design Strategist",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQGJwowFc76IwA/profile-displayphoto-shrink_400_400/B4EZQnr875HEAg-/0/1735832622303?e=1760572800&v=beta&t=7L87MxjstDzNGMnpEahyvWMU4_932hhZUZIC2XNs0O0",
      description: "Expert in Figma for designing comprehensive UI/UX solutions with strategic thinking for project-specific design requirements. Creates intuitive and user-centered design systems.",
      github: "https://github.com/dhanashri",
      linkedin: "https://linkedin.com/in/dhanashri-sonawane",
      email: "dhanashri@trinetra.com",
      skills: ["Figma", "UI/UX Design", "Design Systems", "Wireframing", "Prototyping", "User Research", "Visual Design", "Design Thinking", "Adobe Creative Suite", "Design Strategy"]
    },
    {
      name: "Gayatri Vadge",
      role: "DevOps Engineer & CI/CD Specialist",
      image: "https://media.licdn.com/dms/image/v2/D5635AQG9Eh2ZJwFibQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1719404676846?e=1758297600&v=beta&t=0hDCXjJpSsu2NDNvXxsbgXkkgPPr5Pv4ctr-Vk-B4I0",
      description: "Specialized in CI/CD tools and deployment automation with expertise in streamlining development workflows and ensuring reliable software delivery pipelines.",
      github: "https://github.com/gayatri",
      linkedin: "https://linkedin.com/in/gayatri-malegao",
      email: "gayatri@trinetra.com",
      skills: ["Jenkins", "GitHub Actions", "Docker", "Kubernetes", "AWS", "CI/CD", "DevOps", "Automation", "Infrastructure", "Deployment"]
    },
    {
      name: "Chaitali Sancheti",
      role: "Non-Technical Specialist & Communication Lead",
      image: "../imgs/cs.png",
      description: "Specialized in non-technical aspects including presentation design, documentation, and stakeholder communication. Expert in translating complex technical concepts into clear, accessible content for all audiences.",
      github: "https://github.com/chaitali",
      linkedin: "https://linkedin.com/in/chaitali-sancheti",
      email: "chaitali@trinetra.com",
      skills: ["Presentation Design", "Documentation", "Communication", "Stakeholder Management", "Content Strategy", "Visual Communication", "Research", "Analysis", "Project Coordination", "Business Writing"]
    },
    {
      name: "Kalyani Varpe",
      role: "Product Strategist & Feature Analyst",
      image: "https://media.licdn.com/dms/image/v2/D4D35AQHIlOL_s2pcPg/profile-framedphoto-shrink_400_400/B4DZkK1tuRGQAs-/0/1756823477545?e=1758297600&v=beta&t=mfwJR4EQeL-r4niX0AMr707aXAWQppy6gMbcWIDrXg4",
      description: "Strategic thinker specializing in overall feature planning and product development. Expert in analyzing requirements, defining product roadmaps, and ensuring comprehensive feature coverage.",
      github: "https://github.com/kalyani",
      linkedin: "https://www.linkedin.com/in/kalyani-varpe-7724a6319/",
      email: "kalyani@trinetra.com",
      skills: ["Product Strategy", "Feature Planning", "Requirements Analysis", "Product Roadmap", "Strategic Thinking", "Market Research", "User Stories", "Agile Methodology", "Product Vision", "Stakeholder Alignment"]
    }
  ]


  const achievements = [
    "Smart India Hackathon 2025 Finalists",
    "Best AI Innovation Award 2025",
    "Top 10 Blockchain Projects 2025",
    "Excellence in Alumni Engagement Solutions"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Team
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the talented individuals behind Allumino - Team Trinetra
          </p>
        </div>


        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index}>
              <Card className="h-full hover:shadow-orange-lg transition-all duration-300 hover-lift group">
                <CardHeader className="text-center">
                  <div className="relative mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-orange"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {member.name}
                  </CardTitle>
                  <p className="text-sm text-orange-600 font-medium">
                    {member.role}
                  </p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-center space-x-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-orange-50 hover:border-orange-300 transition-colors duration-200"
                      onClick={() => window.open(member.github, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-orange-50 hover:border-orange-300 transition-colors duration-200"
                      onClick={() => window.open(member.linkedin, '_blank')}
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-orange-50 hover:border-orange-300 transition-colors duration-200"
                      onClick={() => window.open(`mailto:${member.email}`, '_blank')}
                    >
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Team Achievements */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900 mb-4">
                Team Achievements
              </CardTitle>
              <p className="text-gray-600">
                Recognition and awards for our innovative solutions
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm hover-lift">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm">{achievement}</h4>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Values */}
        <div>
          <Card className="bg-gradient-to-r from-blue-50 to-orange-50 border-blue-200">
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
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-orange-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h4>
                  <p className="text-gray-600">Working together to build something greater than the sum of its parts</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h4>
                  <p className="text-gray-600">Pushing boundaries and exploring new possibilities in technology</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Impact</h4>
                  <p className="text-gray-600">Creating solutions that make a real difference in people's lives</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default TeamPage