import { LiquidGlass as LiquidGlassCard } from '@/components/ui/liquid-glass';
import { cn } from '@/lib/utils';

import {
  Bell,
  Search,
  BarChart2,
  Settings,
  Home,
} from 'lucide-react';

const SidebarMenuGlassy = ({className}:{className?:string}) => {
  return (
    <>
      <div
        className={cn('p-8 flex w-full py-20 rounded-xl items-center justify-center',className)}
        style={{
          background:
            'url("https://images.unsplash.com/photo-1752440093057-1c188e7137e9?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") center / cover no-repeat',
        }}
      >
        <LiquidGlassCard
          draggable
          className="w-[280px] rounded-3xl"
        >
          <nav className="space-y-2 w-full relative z-30 p-4">
            <button
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors border border-white/40 bg-white/30 text-white backdrop-blur-md"
              aria-current="page"
            >
              <Home className="w-5 h-5" />
              <span>Dashboard</span>
            </button>

            <button
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors border border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-md"
            >
              <Search className="w-5 h-5" />
              <span>Search</span>
            </button>

            <button
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors border border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-md"
            >
              <BarChart2 className="w-5 h-5" />
              <span>Sales Analytics</span>
            </button>

            <button
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors border border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-md"
            >
              <Bell className="w-5 h-5" />
              <span>Notification</span>
            </button>

            <button
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors border border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-md"
            >
              <Settings className="w-5 h-5" />
              <span>Account Settings</span>
            </button>
          </nav>
        </LiquidGlassCard>
      </div>
    </>
  );
};

export default SidebarMenuGlassy;