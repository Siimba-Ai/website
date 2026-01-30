'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';

import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface LiquidGlassCardProps {
  children: React.ReactNode;
  className?: string;
  draggable?: boolean;
  expandable?: boolean;
  width?: string;
  height?: string;
  expandedWidth?: string;
  expandedHeight?: string;
  blurIntensity?: 'sm' | 'md' | 'lg' | 'xl';
  shadowIntensity?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  borderRadius?: string;
  glowIntensity?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const LiquidGlassCard = ({
  children,
  className = '',
  draggable = true,
  expandable = false,
  width,
  height,
  expandedWidth,
  expandedHeight,
  blurIntensity = 'xl',
  borderRadius = '32px',
  glowIntensity = 'sm',
  shadowIntensity = 'md',
  ...props
}: LiquidGlassCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpansion = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!expandable) return;
    // Don't toggle if clicking on interactive elements
    const target = e.target as HTMLElement;
    if (target.closest('a, button, input, select, textarea')) return;
    setIsExpanded(!isExpanded);
  };

  const blurIntensities = {
    sm: { blur: '16px', saturate: '180%' },
    md: { blur: '24px', saturate: '200%' },
    lg: { blur: '32px', saturate: '220%' },
    xl: { blur: '40px', saturate: '240%' },
  };

  const shadowStyles = {
    none: 'inset 0 0 0 0 rgba(255, 255, 255, 0)',
    xs: 'inset 1px 1px 1px 0 rgba(255, 255, 255, 0.1), inset -1px -1px 1px 0 rgba(255, 255, 255, 0.1)',
    sm: 'inset 1px 1px 2px 0 rgba(255, 255, 255, 0.15), inset -1px -1px 2px 0 rgba(255, 255, 255, 0.15)',
    md: 'inset 2px 2px 3px 0 rgba(255, 255, 255, 0.2), inset -2px -2px 3px 0 rgba(255, 255, 255, 0.2)',
    lg: 'inset 3px 3px 4px 0 rgba(255, 255, 255, 0.25), inset -3px -3px 4px 0 rgba(255, 255, 255, 0.25)',
    xl: 'inset 4px 4px 5px 0 rgba(255, 255, 255, 0.3), inset -4px -4px 5px 0 rgba(255, 255, 255, 0.3)',
    '2xl':
      'inset 5px 5px 6px 0 rgba(255, 255, 255, 0.35), inset -5px -5px 6px 0 rgba(255, 255, 255, 0.35)',
  };

  const glowStyles = {
      none: '0 0 0 rgba(0,0,0,0)',
      xs: '0 0 4px rgba(255, 255, 255, 0.05), 0 0 8px rgba(255, 255, 255, 0.05)',
      sm: '0 0 8px rgba(255, 255, 255, 0.1), 0 0 12px rgba(255, 255, 255, 0.1)',
      md: '0 0 12px rgba(255, 255, 255, 0.15), 0 0 16px rgba(255, 255, 255, 0.15)',
      lg: '0 0 16px rgba(255, 255, 255, 0.2), 0 0 24px rgba(255, 255, 255, 0.2)',
      xl: '0 0 24px rgba(255, 255, 255, 0.25), 0 0 32px rgba(255, 255, 255, 0.25)',
      '2xl': '0 0 32px rgba(255, 255, 255, 0.3), 0 0 48px rgba(255, 255, 255, 0.3)',
  };

  const containerVariants = expandable
    ? {
        collapsed: {
          width: width || 'auto',
          height: height || 'auto',
          transition: {
            duration: 0.4,
            ease: [0.5, 1.5, 0.5, 1] as [number, number, number, number],
          },
        },
        expanded: {
          width: expandedWidth || 'auto',
          height: expandedHeight || 'auto',
          transition: {
            duration: 0.4,
            ease: [0.5, 1.5, 0.5, 1] as [number, number, number, number],
          },
        },
      }
    : undefined;

  const MotionComponent = motion.div;

  const motionProps = {
    variants: expandable ? containerVariants : undefined,
    animate: expandable
      ? isExpanded
        ? 'expanded'
        : 'collapsed'
      : undefined,
    onClick: expandable ? handleToggleExpansion : undefined,
    drag: draggable,
    dragConstraints: draggable
      ? { left: 0, right: 0, top: 0, bottom: 0 }
      : undefined,
    dragElastic: draggable ? 0.3 : undefined,
    dragTransition: draggable
      ? {
          bounceStiffness: 300,
          bounceDamping: 10,
          power: 0.3,
        }
      : undefined,
    whileDrag: draggable ? { scale: 1.02 } : undefined,
    whileHover: { scale: 1.01 },
    whileTap: { scale: 0.98 },
  };

  return (
    <>
      <MotionComponent
        className={cn(
          `relative ${draggable ? 'cursor-grab active:cursor-grabbing' : ''} ${expandable ? 'cursor-pointer' : ''}`,
          className
        )}
        style={{
          borderRadius,
          background: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
          ...(width && !expandable && { width }),
          ...(height && !expandable && { height }),
        }}
        {...motionProps}
        {...props}
      >
        {/* Base Glass Layer - Maximum backdrop blur */}
        <div
          className="absolute inset-0 z-0"
          style={{
            borderRadius,
            background: 'rgba(255, 255, 255, 0.03)',
            WebkitBackdropFilter: `blur(${blurIntensities[blurIntensity].blur}) saturate(${blurIntensities[blurIntensity].saturate}) brightness(1.1)`,
            backdropFilter: `blur(${blurIntensities[blurIntensity].blur}) saturate(${blurIntensities[blurIntensity].saturate}) brightness(1.1)`,
          }}
        />
        
        {/* Primary gradient overlay for depth */}
        <div
          className="absolute inset-0 z-[5] pointer-events-none"
          style={{
            borderRadius,
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.03) 40%, rgba(255, 255, 255, 0.01) 70%, rgba(255, 255, 255, 0.06) 100%)',
          }}
        />
        
        {/* Secondary light refraction layer */}
        <div
          className="absolute inset-0 z-[6] pointer-events-none"
          style={{
            borderRadius,
            background: 'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 50%)',
          }}
        />

        {/* Face Layer (Main shadow and glow) */}
        <div
          className='absolute inset-0 z-10 pointer-events-none'
          style={{
            borderRadius,
            boxShadow: glowStyles[glowIntensity],
          }}
        />

        {/* Edge Layer (Inner highlights) */}
        <div
          className='absolute inset-0 z-20 pointer-events-none'
          style={{
            borderRadius,
            boxShadow: shadowStyles[shadowIntensity],
          }}
        />
        
        {/* Enhanced border glow */}
        <div
          className='absolute inset-0 z-[22] pointer-events-none'
          style={{
            borderRadius,
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.15)',
          }}
        />
        
        {/* Top highlight for glass shine */}
        <div
          className='absolute inset-x-0 top-0 z-[25] pointer-events-none'
          style={{
            borderTopLeftRadius: borderRadius,
            borderTopRightRadius: borderRadius,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.4), transparent)',
            boxShadow: '0 1px 2px rgba(255, 255, 255, 0.2)',
          }}
        />
        
        {/* Side highlights for 3D depth */}
        <div
          className='absolute inset-y-0 left-0 z-[24] pointer-events-none'
          style={{
            borderTopLeftRadius: borderRadius,
            borderBottomLeftRadius: borderRadius,
            width: '1px',
            background: 'linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
          }}
        />
        <div
          className='absolute inset-y-0 right-0 z-[24] pointer-events-none'
          style={{
            borderTopRightRadius: borderRadius,
            borderBottomRightRadius: borderRadius,
            width: '1px',
            background: 'linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
          }}
        />

        {/* Content */}
        <div className="relative z-30">
          {children}
        </div>
      </MotionComponent>
    </>
  );
};

// Variant with preset configurations for elevated effect
export const LiquidGlassCardElevated = ({
  children,
  className = '',
  ...props
}: Omit<LiquidGlassCardProps, 'glowIntensity' | 'shadowIntensity' | 'blurIntensity'>) => {
  return (
    <LiquidGlassCard
      glowIntensity="lg"
      shadowIntensity="lg"
      blurIntensity="lg"
      borderRadius="32px"
      draggable={false}
      className={className}
      {...props}
    >
      {children}
    </LiquidGlassCard>
  );
};

// Variant with subtle preset configurations
export const LiquidGlassCardSubtle = ({
  children,
  className = '',
  ...props
}: Omit<LiquidGlassCardProps, 'glowIntensity' | 'shadowIntensity' | 'blurIntensity'>) => {
  return (
    <LiquidGlassCard
      glowIntensity="sm"
      shadowIntensity="sm"
      blurIntensity="sm"
      borderRadius="24px"
      draggable={false}
      className={className}
      {...props}
    >
      {children}
    </LiquidGlassCard>
  );
};
