'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Globe, MessageCircle, Twitter, FileText, Users, Crown } from 'lucide-react'
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
    title: "Whale Verification",
    description: "Verify your ZDLT holdings and join the elite whale community",
    url: "https://whale.zirodelta.com/",
    icon: Crown,
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
      duration: 0.5
    }
  }
}

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 via-transparent to-cyan-400/5" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-teal-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-slate-600/5 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 sm:w-64 sm:h-64 bg-teal-400/5 rounded-full blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto"
        >
          {/* Header */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="mb-6 sm:mb-8">
              <Image
                src="/zirodelta-logo.png"
                alt="ZiroDelta"
                width={64}
                height={64}
                className="mx-auto rounded-xl sm:rounded-2xl w-16 h-16 sm:w-20 sm:h-20"
              />
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extralight mb-3 sm:mb-4 leading-tight px-2">
              <span className="text-teal-400">ZiroDelta</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-xs sm:max-w-md mx-auto px-4">
              The Future of Conditional Finance
            </p>
            
            <div className="w-12 sm:w-16 h-px bg-teal-400/50 mx-auto mt-4 sm:mt-6" />
          </motion.div>

          {/* Links */}
          <motion.div 
            variants={containerVariants}
            className="space-y-3 sm:space-y-4 w-full"
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
                  className="will-change-transform"
                >
                  <Card className={`
                    group cursor-pointer transition-all duration-300 
                    ${link.primary 
                      ? 'bg-teal-400/10 border-teal-400/30 hover:bg-teal-400/20 hover:border-teal-400/50' 
                      : 'bg-slate-900/30 border-slate-800/50 hover:bg-slate-900/50 hover:border-slate-700/70'
                    }
                    backdrop-blur-sm shadow-lg hover:shadow-xl
                  `}>
                    <CardContent className="p-4 sm:p-6">
                      <Button
                        asChild
                        variant="ghost"
                        className="w-full h-auto p-0 hover:bg-transparent justify-start min-h-[56px] sm:min-h-[64px]"
                      >
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full"
                        >
                          <div className="flex items-center space-x-3 sm:space-x-4">
                            <div className={`
                              w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 flex-shrink-0
                              ${link.primary 
                                ? 'bg-teal-400/20 border border-teal-400/30 group-hover:bg-teal-400/30' 
                                : 'bg-slate-700/30 border border-slate-600/30 group-hover:bg-slate-600/40'
                              }
                            `}>
                              <IconComponent 
                                className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${
                                  link.primary 
                                    ? 'text-teal-400 group-hover:text-teal-300' 
                                    : 'text-slate-300 group-hover:text-slate-200'
                                }`} 
                              />
                            </div>
                            
                            <div className="flex-1 text-left min-w-0">
                              <h3 className={`
                                font-medium text-base sm:text-lg mb-0.5 sm:mb-1 transition-colors duration-300 truncate
                                ${link.primary 
                                  ? 'text-teal-400 group-hover:text-teal-300' 
                                  : 'text-slate-200 group-hover:text-white'
                                }
                              `}>
                                {link.title}
                              </h3>
                              <p className="text-slate-400 text-xs sm:text-sm font-light group-hover:text-slate-300 transition-colors duration-300 line-clamp-2">
                                {link.description}
                              </p>
                            </div>
                            
                            <ExternalLink 
                              className={`
                                w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 opacity-60 group-hover:opacity-100 flex-shrink-0
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
            className="text-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-800/30 w-full"
          >
            <p className="text-slate-500 text-xs sm:text-sm font-light mb-3 sm:mb-4 px-4">
              Intelligence meets innovation
            </p>
            
            <div className="flex items-center justify-center space-x-1.5 sm:space-x-2 bg-slate-900/30 border border-slate-800/50 rounded-lg px-3 sm:px-4 py-2 max-w-fit mx-auto">
              <span className="text-xs text-slate-500 font-light">Contract:</span>
              <code className="text-xs text-teal-400 font-mono">4PX...VKbf</code>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText('4PX31xRA1BaAyb2Js45ZKYp92VGWGp47yWeVs5CGVKbf');
                }}
                className="text-slate-400 hover:text-teal-400 transition-colors duration-300 text-xs ml-1 sm:ml-2 px-1 sm:px-2 py-1 rounded touch-manipulation"
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