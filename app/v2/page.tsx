"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LiquidGlass } from "@/components/ui/liquid-glass"
import { Button } from "@/components/ui/button"
import { ArrowRight, X, Zap, Layers, Brain, Cloud } from "lucide-react"
import { cn } from "@/lib/utils"
import { Navigation } from "@/components/navigation"
import { WaitlistForm } from "@/components/waitlist-form"

export default function PageV2() {
    const [activeModal, setActiveModal] = React.useState<string | null>(null)

    return (
        <main className="relative min-h-screen w-full overflow-x-hidden font-sans selection:bg-sky-200/50">

            {/* Sky Background */}
            <div className="fixed inset-0 -z-10 bg-sky-gradient overflow-hidden">
                {/* Sun Glare */}
                <div className="absolute top-[-10%] left-[20%] w-[40vw] h-[40vw] bg-white/40 rounded-full blur-[100px] opacity-60 animate-pulse" style={{ animationDuration: '10s' }} />

                {/* Floating Clouds */}
                <div className="absolute top-[10%] left-[5%] w-64 h-32 cloud-white opacity-80 animate-float" />
                <div className="absolute top-[20%] right-[10%] w-96 h-48 cloud-white opacity-60 animate-drift" style={{ animationDuration: '25s' }} />
                <div className="absolute bottom-[20%] left-[15%] w-[30rem] h-[15rem] cloud-white opacity-40 animate-drift" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />

                {/* Noise Overlay */}
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay" />
            </div>

            <Navigation />

            {/* Floating Hero Island */}
            <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20">

                <motion.div
                    initial={{ opacity: 0, y: 60, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 80, damping: 20, mass: 1.5 }}
                    className="relative z-10 max-w-6xl w-full text-center"
                >
                    {/* Massive Ultra Glass Slab */}
                    <LiquidGlass
                        variant="ultra"
                        intensity="lg"
                        className="inline-block p-12 md:p-24 backdrop-blur-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.1)] border-white/60 relative overflow-hidden group"
                    >
                        {/* Internal Glare */}
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/40 to-transparent opacity-50 pointer-events-none" />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="relative z-10"
                        >
                            <div className="flex items-center justify-center gap-2 mb-8">
                                <Cloud className="text-white w-6 h-6 animate-bounce" style={{ animationDuration: '3s' }} />
                                <span className="text-sm font-bold tracking-widest uppercase text-white/90 drop-shadow-sm">
                                    The Morning Stack
                                </span>
                            </div>

                            <h1 className="text-7xl md:text-9xl font-bold text-white tracking-tighter leading-[0.85] mb-10 drop-shadow-lg">
                                <span className="block">Fluid</span>
                                <span className="italic font-serif font-light text-sky-100 opacity-90">Decisions</span>
                            </h1>

                            <p className="text-xl md:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-14 font-medium drop-shadow-md">
                                Siimba liquefies your decision fatigue. Wake up to a perfectly staged morning, suspended in clarity.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Button
                                    size="xl"
                                    className="rounded-full h-20 px-12 text-2xl bg-white text-sky-600 hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-xl shadow-sky-900/20 font-bold"
                                    onClick={() => setActiveModal('waitlist')}
                                >
                                    Claim Access
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="xl"
                                    className="rounded-full h-20 px-12 text-2xl text-white hover:bg-white/20 hover:text-white transition-all duration-300 border-2 border-white/30"
                                    onClick={() => setActiveModal('demo')}
                                >
                                    See the flow
                                </Button>
                            </div>
                        </motion.div>
                    </LiquidGlass>
                </motion.div>

            </section>

            {/* Masonry Glass Grid */}
            <section className="px-6 pb-32 w-full max-w-[2000px] mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:mt-32"
                    >
                        <LiquidGlass variant="ultra" intensity="md" className="p-10 h-full min-h-[500px] flex flex-col justify-between hover:scale-[1.02] spring-transition cursor-pointer group bg-white/10 border-white/40">
                            <div className="w-20 h-20 rounded-3xl bg-white/20 flex items-center justify-center mb-8 backdrop-blur-md shadow-inner">
                                <Zap className="w-10 h-10 text-white" />
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-white mb-6 drop-shadow-md">Metabolic Pace</h3>
                                <p className="text-2xl text-white/80 leading-relaxed font-medium">
                                    Siimba matches your energy. It learns when you&apos;re sharpest and stacks high-cognitive decisions then.
                                </p>
                            </div>
                        </LiquidGlass>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-1"
                    >
                        <LiquidGlass variant="ultra" intensity="lg" className="p-12 min-h-[700px] flex flex-col items-center justify-center text-center relative overflow-hidden group bg-white/10 border-white/50">
                            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative z-10">
                                <div className="w-32 h-32 rounded-full bg-white/20 blur-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-1000" />
                                <Brain className="w-20 h-20 text-white mx-auto mb-10 relative z-10 drop-shadow-lg" />
                                <h3 className="text-5xl md:text-6xl font-bold text-white mb-8 relative z-10 drop-shadow-md">Bounded Autonomy</h3>
                                <p className="text-2xl text-white/80 leading-relaxed max-w-sm mx-auto relative z-10 font-medium">
                                    AI that suggests, drafts, and preps—but never acts without your &apos;Yes&apos;. You remain the pilot; Siimba is the engine.
                                </p>
                            </div>
                        </LiquidGlass>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:mt-56"
                    >
                        <LiquidGlass variant="ultra" intensity="md" className="p-10 h-full min-h-[450px] flex flex-col justify-between hover:scale-[1.02] spring-transition cursor-pointer group bg-white/10 border-white/40">
                            <div>
                                <h3 className="text-4xl font-bold text-white mb-6 drop-shadow-md">Context Fluidity</h3>
                                <p className="text-2xl text-white/80 leading-relaxed font-medium">
                                    Email, Calendar, Slack. Siimba dissolves the walls between apps. One fluid stream of approvals.
                                </p>
                            </div>
                            <div className="w-20 h-20 rounded-3xl bg-white/20 flex items-center justify-center mt-8 self-end backdrop-blur-md shadow-inner">
                                <Layers className="w-10 h-10 text-white" />
                            </div>
                        </LiquidGlass>
                    </motion.div>

                </div>
            </section>


            {/* Modals - Dynamic Interactivity */}
            <AnimatePresence>
                {activeModal === 'waitlist' && (
                    <Modal onClose={() => setActiveModal(null)}>
                        <div className="text-center mb-8">
                            <h2 className="text-4xl font-bold text-charcoal mb-2">Join the flow</h2>
                            <p className="text-charcoal/60">Secure your spot in the early access program.</p>
                        </div>
                        <WaitlistForm />
                    </Modal>
                )}
            </AnimatePresence>

        </main>
    )
}

function Modal({ children, onClose }: { children: React.ReactNode, onClose: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-sky-900/40 backdrop-blur-md"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-xl"
            >
                <LiquidGlass variant="elevated" intensity="lg" className="p-8 md:p-12 relative bg-white/80 border-white">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 transition-colors"
                    >
                        <X className="w-6 h-6 text-charcoal/50" />
                    </button>
                    {children}
                </LiquidGlass>
            </motion.div>
        </motion.div>
    )
}
