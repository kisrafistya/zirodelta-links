"use client"

import * as React from "react"
import { ChevronRight } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

type CollapsibleCardProps = {
  title: string
  open: boolean
  onToggle: () => void
  children: React.ReactNode
}

export function CollapsibleCard({ title, open, onToggle, children }: CollapsibleCardProps) {
  return (
    <Card className="bg-white/10 border-white/20 backdrop-blur-md py-0 gap-0">
      <CardHeader className="flex flex-row items-center justify-between cursor-pointer select-none py-3" onClick={onToggle}>
        <CardTitle className="text-brand-emerald text-base sm:text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>{title}</CardTitle>
        <ChevronRight className={`transition-transform duration-200 text-brand-emerald/80 ${open ? 'rotate-90' : ''}`} />
      </CardHeader>
      {open && (
        <CardContent className="pt-0 pb-4">
          {children}
        </CardContent>
      )}
    </Card>
  )
}


