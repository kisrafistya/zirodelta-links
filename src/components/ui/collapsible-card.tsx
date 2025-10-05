"use client"

import * as React from "react"
import { ChevronRight } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

type CollapsibleCardProps = {
  title: string
  defaultOpen?: boolean
  children: React.ReactNode
}

export function CollapsibleCard({ title, defaultOpen = false, children }: CollapsibleCardProps) {
  const [open, setOpen] = React.useState<boolean>(defaultOpen)

  return (
    <Card className="bg-white/10 border-white/20 backdrop-blur-md py-0 gap-0">
      <CardHeader className="flex flex-row items-center justify-between cursor-pointer select-none py-3" onClick={() => setOpen((v) => !v)}>
        <CardTitle className="text-white/90 text-base sm:text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>{title}</CardTitle>
        <ChevronRight className={`transition-transform duration-200 text-white/80 ${open ? 'rotate-90' : ''}`} />
      </CardHeader>
      {open && (
        <CardContent className="pt-0 pb-4">
          {children}
        </CardContent>
      )}
    </Card>
  )
}


