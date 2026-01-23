"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionContextValue {
  openItems: Set<string>
  toggleItem: (value: string) => void
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(undefined)

function useAccordion() {
  const context = React.useContext(AccordionContext)
  if (!context) throw new Error("Accordion components must be used within Accordion")
  return context
}

interface AccordionProps {
  type?: "single" | "multiple"
  children: React.ReactNode
  className?: string
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ type = "single", children, className }, ref) => {
    const [openItems, setOpenItems] = React.useState<Set<string>>(new Set())

    const toggleItem = (value: string) => {
      setOpenItems((prev) => {
        const newSet = new Set(prev)
        if (newSet.has(value)) {
          newSet.delete(value)
        } else {
          if (type === "single") newSet.clear()
          newSet.add(value)
        }
        return newSet
      })
    }

    return (
      <AccordionContext.Provider value={{ openItems, toggleItem }}>
        <div ref={ref} className={className}>{children}</div>
      </AccordionContext.Provider>
    )
  }
)
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<HTMLDivElement, { value: string; children: React.ReactNode; className?: string }>(
  ({ value, children, className }, ref) => (
    <div ref={ref} className={cn("border-b", className)} data-value={value}>
      {children}
    </div>
  )
)
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<HTMLButtonElement, { children: React.ReactNode; className?: string }>(
  ({ children, className }, ref) => {
    const { openItems, toggleItem } = useAccordion()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const itemValue = e.currentTarget.closest("[data-value]")?.getAttribute("data-value")
      if (itemValue) toggleItem(itemValue)
    }

    return (
      <button
        ref={ref}
        className={cn("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline w-full text-left", className)}
        onClick={handleClick}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </button>
    )
  }
)
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<HTMLDivElement, { children: React.ReactNode; className?: string }>(
  ({ children, className }, ref) => {
    const { openItems } = useAccordion()
    const [value, setValue] = React.useState("")

    React.useEffect(() => {
      const element = (ref as any)?.current
      if (element) {
        const itemValue = element.closest("[data-value]")?.dataset?.value
        if (itemValue) setValue(itemValue)
      }
    }, [ref])

    const isOpen = openItems.has(value)

    return (
      <div ref={ref} className={cn("overflow-hidden text-sm transition-all", isOpen ? "animate-accordion-down" : "animate-accordion-up hidden")}>
        <div className={cn("pb-4 pt-0", className)}>{children}</div>
      </div>
    )
  }
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
