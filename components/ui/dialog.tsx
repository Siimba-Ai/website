"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const DialogContext = React.createContext<{ open: boolean; onOpenChange: (open: boolean) => void } | undefined>(undefined)

function useDialog() {
  const context = React.useContext(DialogContext)
  if (!context) throw new Error("Dialog components must be used within Dialog")
  return context
}

const Dialog = ({ open: controlledOpen, defaultOpen = false, onOpenChange, children }: {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}) => {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen)
  const open = controlledOpen ?? internalOpen

  const handleOpenChange = (newOpen: boolean) => {
    if (controlledOpen === undefined) setInternalOpen(newOpen)
    onOpenChange?.(newOpen)
  }

  return (
    <DialogContext.Provider value={{ open, onOpenChange: handleOpenChange }}>
      {children}
    </DialogContext.Provider>
  )
}
Dialog.displayName = "Dialog"

const DialogTrigger = React.forwardRef<HTMLButtonElement, { asChild?: boolean; children: React.ReactNode; className?: string }>(
  ({ asChild, children, className }, ref) => {
    const { onOpenChange } = useDialog()

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, { onClick: () => onOpenChange(true) } as any)
    }

    return <button ref={ref} onClick={() => onOpenChange(true)} className={className}>{children}</button>
  }
)
DialogTrigger.displayName = "DialogTrigger"

const DialogContent = React.forwardRef<HTMLDivElement, { children: React.ReactNode; className?: string; onClose?: () => void }>(
  ({ children, className, onClose }, ref) => {
    const { open, onOpenChange } = useDialog()

    React.useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape" && open) {
          onOpenChange(false)
          onClose?.()
        }
      }
      document.addEventListener("keydown", handleEscape)
      return () => document.removeEventListener("keydown", handleEscape)
    }, [open, onOpenChange, onClose])

    if (!open) return null

    const handleClose = () => {
      onOpenChange(false)
      onClose?.()
    }

    return (
      <>
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={handleClose} />
        <div ref={ref} className={cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg", className)}>
          {children}
          <button onClick={handleClose} className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </div>
      </>
    )
  }
)
DialogContent.displayName = "DialogContent"

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
)
DialogHeader.displayName = "DialogHeader"

const DialogTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2 ref={ref} className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props} />
  )
)
DialogTitle.displayName = "DialogTitle"

const DialogDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  )
)
DialogDescription.displayName = "DialogDescription"

export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription }
