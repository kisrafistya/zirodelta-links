
'use client'

import { ChevronRight, Globe, FileText } from 'lucide-react'
import Image from 'next/image'
import { CollapsibleCard } from '@/components/ui/collapsible-card'

type LinkItem = {
  title: string
  url: string
  isLucideIcon: boolean
  icon?: any
  iconUrl?: string
}

type LinkCategory = {
  title: string
  defaultOpen?: boolean
  items: LinkItem[]
}

const linkCategories: LinkCategory[] = [
  {
    title: 'Official Website',
    defaultOpen: true,
    items: [
      {
        title: 'Main Website',
        url: 'https://www.zirodelta.com/',
        icon: Globe,
        isLucideIcon: true,
      },
    ],
  },
  {
    title: 'Community',
    items: [
      {
        title: 'Telegram',
        url: 'https://t.me/zirodelta',
        iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/telegram.svg',
        isLucideIcon: false,
      },
      {
        title: 'Discord',
        url: 'https://discord.gg/YHW275Vpn3',
        iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/discord.svg',
        isLucideIcon: false,
      },
    ],
  },
  {
    title: 'Publicity',
    items: [
      {
        title: 'Twitter / X',
        url: 'https://x.com/zirodelta',
        iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/x.svg',
        isLucideIcon: false,
      },
    ],
  },
  {
    title: 'Technical',
    items: [
      {
        title: 'Medium',
        url: 'https://medium.com/@Zirodelta',
        iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/medium.svg',
        isLucideIcon: false,
      },
    ],
  },
]

export default function LinksPage() {
  return (
    <div className="h-screen overflow-hidden" style={{ background: 'white', fontFamily: 'Montserrat, sans-serif' }}>
      {/* Background */}
      <div className="fixed inset-0">
        <Image
          src="/banner/bg-dark.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-screen flex flex-col justify-center container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <Image 
            src="/zirolight.svg" 
            alt="Zirodelta" 
            width={80}
            height={60}
            className="w-20 h-15 sm:w-24 sm:h-18 mx-auto mb-3 sm:mb-4"
          />
          <h1 className="text-xl sm:text-2xl font-bold text-brand-emerald mb-2 sm:mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Official Links
          </h1>
          <p className="text-xs sm:text-sm text-brand-emerald/80 mb-2 sm:mb-3 max-w-xs sm:max-w-md mx-auto px-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Your gateway to Zirodelta&apos;s ecosystem - verified links to our platform, documentation, and community channels.
          </p>
          <div className="w-16 sm:w-20 h-px bg-brand-emerald/50 mx-auto"></div>
        </div>

        {/* Links grouped in collapsible cards */}
        <div className="max-w-sm sm:max-w-2xl mx-auto space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-1 flex flex-col justify-center px-2 sm:px-0">
          {linkCategories.map((category, cIdx) => (
            <CollapsibleCard key={cIdx} title={category.title} defaultOpen={category.defaultOpen}>
              <div className="space-y-3 sm:space-y-3">
                {category.items.map((link, index) => {
                  const IconComponent = link.isLucideIcon ? link.icon : null
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-5 sm:p-3 bg-brand-emerald border border-brand-emerald rounded-xl hover:bg-brand-emerald hover:border-brand-teal transition-all duration-200 hover:scale-[1.02] min-h-[60px] sm:min-h-auto"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      <div className="flex items-center">
                        {link.isLucideIcon && IconComponent ? (
                          <IconComponent className="w-6 h-6 sm:w-4 sm:h-4 text-white mr-5 sm:mr-3 flex-shrink-0" />
                        ) : (
                          link.iconUrl && (
                            <Image
                              src={link.iconUrl}
                              alt={`${link.title} icon`}
                              width={24}
                              height={24}
                              className="w-6 h-6 sm:w-4 sm:h-4 mr-5 sm:mr-3 flex-shrink-0"
                              style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
                            />
                          )
                        )}
                        <span className="text-lg sm:text-base text-white font-medium truncate">{link.title}</span>
                      </div>
                      <ChevronRight className="w-6 h-6 sm:w-4 sm:h-4 text-white/80 group-hover:text-white transition-colors flex-shrink-0" />
                    </a>
                  )
                })}
              </div>
            </CollapsibleCard>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-white/20 pt-3 sm:pt-4 bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl px-3 sm:px-6 py-3 sm:py-4 mx-2 sm:mx-0" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <div className="flex flex-col space-y-3 sm:space-y-2 md:space-y-0 md:flex-row md:justify-between md:items-center">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <span className="text-xs text-brand-emerald font-light">Contract:</span>
              <div className="flex items-center space-x-1 sm:space-x-2 border border-brand-emerald/30 bg-white/20 backdrop-blur-sm rounded-md sm:rounded-lg px-2 py-1 overflow-hidden">
                <code className="text-xs text-brand-emerald font-mono truncate max-w-[280px] sm:max-w-none">
                  4PX31xRA1BaAyb2Js45ZKYp92VGWGp47yWeVs5CGVKbf
                </code>
                <button
                  onClick={async (e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    
                    const contractAddress = '4PX31xRA1BaAyb2Js45ZKYp92VGWGp47yWeVs5CGVKbf'
                    const button = e.currentTarget
                    const originalText = button.textContent
                    
                    try {
                      // Check if we're on mobile devices (iOS or Android)
                      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
                      const isAndroid = /Android/.test(navigator.userAgent)
                      const isMobile = isIOS || isAndroid
                      
                      if (isMobile) {
                        // Mobile-specific clipboard handling (iOS and Android)
                        const textArea = document.createElement('textarea')
                        textArea.value = contractAddress
                        textArea.style.position = 'absolute'
                        textArea.style.left = '-9999px'
                        textArea.style.top = '0'
                        textArea.setAttribute('readonly', '')
                        textArea.style.opacity = '0'
                        textArea.style.pointerEvents = 'none'
                        document.body.appendChild(textArea)
                        
                        // Focus and select for mobile browsers
                        textArea.focus()
                        textArea.setSelectionRange(0, 999999)
                        
                        // For better Android support
                        if (isAndroid) {
                          textArea.select()
                        }
                        
                        // For better iOS support  
                        if (isIOS) {
                          const range = document.createRange()
                          range.selectNodeContents(textArea)
                          const selection = window.getSelection()
                          selection?.removeAllRanges()
                          selection?.addRange(range)
                        }
                        
                        document.execCommand('copy')
                        document.body.removeChild(textArea)
                      } else {
                        // Modern clipboard API for desktop browsers
                        await navigator.clipboard.writeText(contractAddress)
                      }
                      
                      // Visual feedback
                      button.textContent = 'Copied!'
                      setTimeout(() => {
                        button.textContent = originalText
                      }, 2000)
                      
                    } catch {
                      // Final fallback
                      const textArea = document.createElement('textarea')
                      textArea.value = contractAddress
                      textArea.style.position = 'fixed'
                      textArea.style.left = '-999999px'
                      textArea.style.top = '-999999px'
                      document.body.appendChild(textArea)
                      textArea.focus()
                      textArea.select()
                      document.execCommand('copy')
                      textArea.remove()
                      
                      // Visual feedback for fallback
                      button.textContent = 'Copied!'
                      setTimeout(() => {
                        button.textContent = originalText
                      }, 2000)
                    }
                  }}
                  className="text-brand-teal hover:text-brand-teal/80 transition-colors text-xs flex-shrink-0"
                >
                  Copy
                </button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <span className="text-sm text-brand-teal font-medium italic">
                Intelligence Meets Innovation
              </span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
} 