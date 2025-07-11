'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Globe, MessageCircle, Twitter, FileText, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const links = [
  {
    title: "Main Website",
    description: "Explore ZiroDelta's revolutionary DeFi protocol",
    url: "https://www.zirodelta.com/",
    icon: Globe,
    primary: true
  },
  {
    title: "Documentation", 
    description: "Learn about our conditional finance technology",
    url: "https://zirodelta.com/docs",
    icon: FileText,
    primary: true
  },
  {
    title: "Telegram Community",
    description: "Join our active community discussions",
    url: "https://t.me/zirodelta",
    icon: MessageCircle,
    primary: false
  },
  {
    title: "Twitter / X",
    description: "Follow us for latest updates and insights",
    url: "https://x.com/zirodelta",
    icon: Twitter,
    primary: false
  },
  {
    title: "Discord Server",
    description: "Connect with our development community",
    url: "https://discord.gg/YHW275Vpn3",
    icon: Users,
    primary: false
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 via-transparent to-cyan-400/5" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-slate-600/5 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-teal-400/5 rounded-full blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full max-w-lg mx-auto"
        >
          {/* Header */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-12"
          >
            <div className="mb-8">
              <Image
                src="/zirodelta-logo.png"
                alt="ZiroDelta"
                width={80}
                height={80}
                className="mx-auto rounded-2xl"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extralight mb-4 leading-tight">
              <span className="text-teal-400">ZiroDelta</span>
            </h1>
            
            <p className="text-lg text-slate-300 font-light leading-relaxed max-w-md mx-auto">
              The Future of Conditional Finance
            </p>
            
            <div className="w-16 h-px bg-teal-400/50 mx-auto mt-6" />
          </motion.div>

          {/* Links */}
          <motion.div 
            variants={containerVariants}
            className="space-y-4"
          >
            {links.map((link, index) => {
              const IconComponent = link.icon
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className={`
                    group cursor-pointer transition-all duration-300 
                    ${link.primary 
                      ? 'bg-teal-400/10 border-teal-400/30 hover:bg-teal-400/20 hover:border-teal-400/50' 
                      : 'bg-slate-900/30 border-slate-800/50 hover:bg-slate-900/50 hover:border-slate-700/70'
                    }
                    backdrop-blur-sm shadow-lg hover:shadow-xl
                  `}>
                    <CardContent className="p-6">
                      <Button
                        asChild
                        variant="ghost"
                        className="w-full h-auto p-0 hover:bg-transparent justify-start"
                      >
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full"
                        >
                          <div className="flex items-center space-x-4">
                            <div className={`
                              w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300
                              ${link.primary 
                                ? 'bg-teal-400/20 border border-teal-400/30 group-hover:bg-teal-400/30' 
                                : 'bg-slate-700/30 border border-slate-600/30 group-hover:bg-slate-600/40'
                              }
                            `}>
                              <IconComponent 
                                className={`w-6 h-6 transition-all duration-300 ${
                                  link.primary 
                                    ? 'text-teal-400 group-hover:text-teal-300' 
                                    : 'text-slate-300 group-hover:text-slate-200'
                                }`} 
                              />
                            </div>
                            
                            <div className="flex-1 text-left">
                              <h3 className={`
                                font-medium text-lg mb-1 transition-colors duration-300
                                ${link.primary 
                                  ? 'text-teal-400 group-hover:text-teal-300' 
                                  : 'text-slate-200 group-hover:text-white'
                                }
                              `}>
                                {link.title}
                              </h3>
                              <p className="text-slate-400 text-sm font-light group-hover:text-slate-300 transition-colors duration-300">
                                {link.description}
                              </p>
                            </div>
                            
                            <ExternalLink 
                              className={`
                                w-5 h-5 transition-all duration-300 opacity-60 group-hover:opacity-100 
                                ${link.primary ? 'text-teal-400' : 'text-slate-400'}
                                group-hover:translate-x-1
                              `} 
                            />
                          </div>
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Footer */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-12 pt-8 border-t border-slate-800/30"
          >
            <p className="text-slate-500 text-sm font-light mb-4">
              Intelligence meets innovation
            </p>
            
            <div className="flex items-center justify-center space-x-2 bg-slate-900/30 border border-slate-800/50 rounded-lg px-4 py-2 max-w-fit mx-auto">
              <span className="text-xs text-slate-500 font-light">Contract:</span>
              <code className="text-xs text-teal-400 font-mono">4PX...VKbf</code>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText('4PX31xRA1BaAyb2Js45ZKYp92VGWGp47yWeVs5CGVKbf');
                }}
                className="text-slate-400 hover:text-teal-400 transition-colors duration-300 text-xs ml-2"
                title="Copy full contract address"
              >
                Copy
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
} 