'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronRight, Code2, ExternalLink, Github, Linkedin, Instagram, Mail, ArrowUpRight, Shield, Zap, Lock } from 'lucide-react'

export default function Home() {
  const techStack = [
    { name: 'Solidity', category: 'Smart Contracts' },
    { name: 'Ethereum', category: 'Blockchain' },
    { name: 'Foundry', category: 'Development' },
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'Supabase', category: 'Backend' },
    { name: 'Rust', category: 'Backend' },
    { name: 'Golang', category: 'Backend' },
    { name: 'Anchor', category: 'Solana' },
    { name: 'Wagmi', category: 'Web3' },
    { name: 'IPFS', category: 'Storage' },
    { name: 'Layer-2', category: 'Scaling' },
    { name: 'DeFi', category: 'Finance' },
    { name: 'Oracles', category: 'Data' },
    { name: 'Slither', category: 'Security' },
    { name: 'Python', category: 'Backend' },
  ]

  const projects = [
    {
      title: 'Supply Chain dApp',
      description: 'Comprehensive blockchain solution for supply chain management with product authentication, shipment tracking, fraud detection, and pharmaceutical verification. Integrated with MetaMask for cross-chain transactions.',
      tech: ['Solidity', 'MetaMask', 'React', 'Cross-Chain', 'Oracles'],
      featured: true,
    },
    {
      title: 'Voting System Smart Contract',
      description: 'Decentralized voting smart contract built with Solidity enabling secure and transparent voting mechanisms on the blockchain with role-based access control and tamper-proof results.',
      tech: ['Solidity', 'Ethereum', 'Security'],
    },
    {
      title: 'Python Voting System',
      description: 'Backend voting system implementation in Python with database integration, user authentication, and voting logic for decentralized governance applications.',
      tech: ['Python', 'Backend', 'Database'],
    },
    {
      title: 'Lottery System',
      description: 'AI-powered lottery system built with Rust and Anchor framework for Solana blockchain. Integrates OpenAI SDK for intelligent winner selection and analytics.',
      tech: ['Rust', 'Anchor', 'Solana', 'OpenAI', 'AI/ML'],
    },
  ]

  const problems = [
    { icon: Shield, title: 'Security', description: 'Building secure smart contracts with audited code and best practices' },
    { icon: Zap, title: 'Scalability', description: 'Implementing Layer-2 solutions and optimized protocols for efficiency' },
    { icon: ExternalLink, title: 'Transparency', description: 'Creating immutable records for supply chain and governance systems' },
    { icon: Lock, title: 'Automation', description: 'Developing autonomous systems through smart contracts and oracles' },
  ]

  const certificates = [
    {
      title: 'Computer Programming',
      issuer: 'Certificate of Completion',
      date: '2022',
      skills: ['Blockchain (Solidity)', 'HTML', 'CSS', 'JavaScript'],
      link: 'https://blobs.vusercontent.net/blob/Kehinde%20Olubunmi%20Browns-b6i2jFf8Kmk0wfj8aOYeOXKcJpDvEE.pdf',
    },
    {
      title: 'Advanced Solidity Bootcamp',
      issuer: 'Encode Club',
      date: 'October 2024',
      skills: ['Solidity', 'Smart Contracts', 'Ethereum'],
      link: 'https://blobs.vusercontent.net/blob/Kehinde%20Encode%20Award-UYhksUvrQ4rS1EffNVfAdC7sIe88uX.pdf',
      participantId: '#13487',
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Code2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">Kehinde</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm hover:text-accent transition-colors">About</a>
            <a href="#expertise" className="text-sm hover:text-accent transition-colors">Expertise</a>
            <a href="#projects" className="text-sm hover:text-accent transition-colors">Projects</a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">Contact</a>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Say Hello
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block mb-6 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30">
                <span className="text-secondary text-sm font-medium">Blockchain Developer</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Building <span className="text-accent">Smart Solutions</span> on the Blockchain
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                I design and develop decentralized applications, smart contracts, and blockchain infrastructure focusing on security, scalability, transparency, and automation for real-world problems.
              </p>
              
              <div className="mb-12">
                <Button className="h-12 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2">
                  View My Work <ArrowUpRight className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex gap-4">
                <a href="https://github.com/Kehinde-Crypto" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/kehinde-olubunmi-browns-410ba03a6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BsgZSSY7RSK2vp7AYflJKbg%3D%3D" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/kehinde_browns/?hl=en" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="mailto:kolubunmibrowns399@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl"></div>
                <div className="relative rounded-2xl overflow-hidden border border-accent/30 bg-card p-2">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20230331-WA0008-LPTCbVUVASFKivRVwBYsgJNQNCeZTg.jpg"
                    alt="Kehinde Olubunmi Browns"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Statement Section */}
      <section className="py-20 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What I Solve</h2>
            <p className="text-muted-foreground text-lg">Core problems addressed through blockchain innovation</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {problems.map((problem) => (
              <Card key={problem.title} className="bg-card border-border p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="expertise" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Tech Stack & Expertise</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Specialized in blockchain, smart contracts, DeFi, and full-stack Web3 development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {['Smart Contracts & Blockchain', 'Full-Stack Development', 'Infrastructure & Scaling', 'Advanced Technologies'].map((category, idx) => (
              <Card key={category} className="bg-card border-border p-8">
                <h3 className="text-xl font-bold mb-6">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack
                    .filter((tech) => {
                      if (category === 'Smart Contracts & Blockchain') {
                        return ['Solidity', 'Ethereum', 'Foundry', 'Anchor', 'Solana'].includes(tech.name) || tech.category === 'Smart Contracts' || tech.category === 'Blockchain' || tech.category === 'Development'
                      }
                      if (category === 'Full-Stack Development') {
                        return ['React', 'Next.js', 'Supabase', 'Python', 'Golang'].includes(tech.name) || tech.category === 'Frontend' || tech.category === 'Backend' || tech.category === 'Framework'
                      }
                      if (category === 'Infrastructure & Scaling') {
                        return ['Layer-2', 'IPFS', 'Oracles'].includes(tech.name) || tech.category === 'Scaling' || tech.category === 'Storage' || tech.category === 'Data'
                      }
                      if (category === 'Advanced Technologies') {
                        return ['Wagmi', 'DeFi', 'Slither', 'Rust'].includes(tech.name) || tech.category === 'Web3' || tech.category === 'Finance' || tech.category === 'Security'
                      }
                      return false
                    })
                    .map((tech) => (
                      <span key={tech.name} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-sm text-primary">
                        {tech.name}
                      </span>
                    ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My blockchain development work and innovative solutions
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, idx) => (
              <Card key={idx} className="bg-card border-border overflow-hidden hover:border-accent transition-colors">
                <div className="p-8">
                  {project.featured && (
                    <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
                      <span className="text-primary text-xs font-medium">Featured Project</span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-sm text-secondary">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2">
                      View Project <ArrowUpRight className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 bg-transparent">
                      Source Code
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Supply Chain Screenshots */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Supply Chain Dashboard</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-80 rounded-lg overflow-hidden border border-accent/30 bg-card/50">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/supplychain.PNG-nGjsY8NQJSViIAmwt3xKSfAr1Mg0wz.png"
                  alt="Supply Chain Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden border border-accent/30 bg-card/50">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/supplychainmetam.PNG-yqyydEq8s3LriRdxPLaBma7OW7AoUL.png"
                  alt="Cross-Chain Transactions"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Certifications & Achievements</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional certifications and credentials in blockchain development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, idx) => (
              <a key={idx} href={cert.link} target="_blank" rel="noopener noreferrer">
                <Card className="bg-card border-border overflow-hidden hover:border-accent transition-colors h-full cursor-pointer group">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{cert.title}</h3>
                        <p className="text-primary text-sm font-medium">{cert.issuer}</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-muted-foreground text-sm mb-4">Completed: {cert.date}</p>
                      {cert.participantId && (
                        <p className="text-muted-foreground text-sm mb-4">Participant ID: {cert.participantId}</p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-xs text-secondary">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl border border-accent/30 p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Interested in collaborating on blockchain projects, smart contracts, or Web3 solutions? Get in touch through any of these channels.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="https://github.com/Kehinde-Crypto" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2">
                  <Github className="w-4 h-4" /> GitHub
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/kehinde-olubunmi-browns-410ba03a6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BsgZSSY7RSK2vp7AYflJKbg%3D%3D" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 bg-transparent flex items-center gap-2">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </Button>
              </a>
              <a href="https://www.instagram.com/kehinde_browns/?hl=en" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 bg-transparent flex items-center gap-2">
                  <Instagram className="w-4 h-4" /> Instagram
                </Button>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Mail className="w-5 h-5 text-accent" />
              <a href="mailto:kolubunmibrowns399@gmail.com" className="text-lg font-medium text-accent hover:text-primary transition-colors">
                kolubunmibrowns399@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-bold">Kehinde</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Blockchain Developer | Web3 Builder | Smart Contract Engineer
              </p>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/Kehinde-Crypto" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/kehinde-olubunmi-browns-410ba03a6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BsgZSSY7RSK2vp7AYflJKbg%3D%3D" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/kehinde_browns/?hl=en" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:kolubunmibrowns399@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2026 Kehinde Olubunmi Browns. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
