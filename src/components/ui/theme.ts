import { cn } from '@/utils'

export const tokens = {
  light: {
    text: {
      primary: 'text-black tracking-tight font-bold',
      secondary: 'text-gray-700 font-semibold',
      tertiary: 'text-gray-600 font-medium',
      muted: 'text-gray-500 font-normal',
      brand: 'text-blue-600 font-semibold',
      onPrimary: 'text-white font-medium',
      onSecondary: 'text-black font-medium',
      destructive: 'text-red-600 font-medium',
      success: 'text-emerald-600 font-medium',
      warning: 'text-amber-600 font-medium',
      info: 'text-blue-600 font-medium',
      placeholder: 'text-gray-400',
      active: 'text-blue-600 font-semibold',
      inactive: 'text-gray-500 hover:text-gray-700 transition-colors duration-200',
      link: 'text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline transition-all duration-200'
    },
    background: {
      primary: 'bg-white',
      secondary: 'bg-gray-50',
      tertiary: 'bg-gray-100',
      hover: 'hover:bg-gray-100 transition-colors duration-200',
      selected: 'bg-blue-50 border-blue-200',
      active: 'bg-blue-600 text-white',
      brand: 'bg-gradient-to-r from-blue-600 to-red-500',
      brandSubtle: 'bg-blue-50',
      destructive: 'bg-red-50 border-red-200',
      success: 'bg-emerald-50 border-emerald-200',
      warning: 'bg-amber-50 border-amber-200',
      info: 'bg-blue-50 border-blue-200',
      muted: 'bg-gray-100',
      elevated: 'bg-white shadow-sm border border-gray-200',
      sunken: 'bg-gray-50 border border-gray-200',
      overlay: 'bg-black/60 backdrop-blur-sm',
      floating: 'bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl',
      glass: 'bg-white/80 backdrop-blur-lg border border-gray-200'
    },
    border: {
      default: 'border-gray-200',
      subtle: 'border-gray-100',
      strong: 'border-gray-300',
      active: 'border-blue-500',
      hover: 'hover:border-gray-300 transition-colors duration-200',
      focus: 'focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10',
      destructive: 'border-red-300',
      success: 'border-emerald-300',
      warning: 'border-amber-300',
      info: 'border-blue-300'
    },
    ring: {
      focus: 'focus-visible:ring-4 focus-visible:ring-blue-500/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
      focusVisible: 'focus-visible:ring-4 focus-visible:ring-blue-500/20',
      destructive: 'ring-4 ring-red-500/20',
      success: 'ring-4 ring-emerald-500/20',
      warning: 'ring-4 ring-amber-500/20',
      info: 'ring-4 ring-blue-500/20'
    },
    shadow: {
      xs: 'shadow-xs shadow-gray-900/5',
      sm: 'shadow-sm shadow-gray-900/10',
      md: 'shadow-md shadow-gray-900/15',
      lg: 'shadow-lg shadow-gray-900/20',
      xl: 'shadow-xl shadow-gray-900/25',
      '2xl': 'shadow-2xl shadow-gray-900/30',
      glow: 'shadow-lg shadow-blue-500/30',
      colored: 'shadow-lg shadow-blue-600/25'
    },
    icon: {
      primary: 'text-gray-800',
      secondary: 'text-gray-600',
      tertiary: 'text-gray-500',
      brand: 'text-blue-600',
      destructive: 'text-red-600',
      success: 'text-emerald-600',
      warning: 'text-amber-600',
      info: 'text-blue-600',
      muted: 'text-gray-500'
    },
    gradient: {
      brand: 'bg-gradient-to-r from-blue-600 via-blue-700 to-red-500',
      brandSubtle: 'bg-gradient-to-r from-blue-50 to-red-50',
      warm: 'bg-gradient-to-r from-red-500 to-red-600',
      cool: 'bg-gradient-to-r from-blue-500 to-blue-600',
      success: 'bg-gradient-to-r from-emerald-500 to-teal-600',
      surface: 'bg-gradient-to-b from-white to-blue-50/30'
    }
  },
  dark: {
    text: {
      primary: 'text-white tracking-tight font-bold',
      secondary: 'text-gray-100 font-semibold',
      tertiary: 'text-gray-200 font-medium',
      muted: 'text-gray-300 font-normal',
      brand: 'text-blue-400 font-semibold',
      onPrimary: 'text-black font-medium',
      onSecondary: 'text-white font-medium',
      destructive: 'text-red-400 font-medium',
      success: 'text-emerald-400 font-medium',
      warning: 'text-amber-400 font-medium',
      info: 'text-blue-400 font-medium',
      placeholder: 'text-gray-500',
      active: 'text-blue-400 font-semibold',
      inactive: 'text-gray-400 hover:text-gray-200 transition-colors duration-200',
      link: 'text-blue-400 hover:text-blue-300 underline-offset-4 hover:underline transition-all duration-200'
    },
    background: {
      primary: 'bg-black',
      secondary: 'bg-gray-900',
      tertiary: 'bg-gray-800',
      hover: 'hover:bg-gray-800 transition-colors duration-200',
      selected: 'bg-blue-900/50 border-blue-700',
      active: 'bg-blue-600 text-white',
      brand: 'bg-gradient-to-r from-blue-600 to-red-500',
      brandSubtle: 'bg-blue-900/30',
      destructive: 'bg-red-900/30 border-red-700',
      success: 'bg-emerald-900/30 border-emerald-700',
      warning: 'bg-amber-900/30 border-amber-700',
      info: 'bg-blue-900/30 border-blue-700',
      muted: 'bg-gray-800',
      elevated: 'bg-gray-900 shadow-lg border border-gray-700',
      sunken: 'bg-gray-900 border border-gray-700',
      overlay: 'bg-black/80 backdrop-blur-sm',
      floating: 'bg-gray-900/95 backdrop-blur-md border border-gray-700 shadow-2xl',
      glass: 'bg-gray-900/80 backdrop-blur-lg border border-gray-700'
    },
    border: {
      default: 'border-gray-700',
      subtle: 'border-gray-800',
      strong: 'border-gray-600',
      active: 'border-blue-500',
      hover: 'hover:border-gray-600 transition-colors duration-200',
      focus: 'focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20',
      destructive: 'border-red-700',
      success: 'border-emerald-700',
      warning: 'border-amber-700',
      info: 'border-blue-700'
    },
    ring: {
      focus: 'focus-visible:ring-4 focus-visible:ring-blue-400/30 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900',
      focusVisible: 'focus-visible:ring-4 focus-visible:ring-blue-400/30',
      destructive: 'ring-4 ring-red-400/30',
      success: 'ring-4 ring-emerald-400/30',
      warning: 'ring-4 ring-amber-400/30',
      info: 'ring-4 ring-blue-400/30'
    },
    shadow: {
      xs: 'shadow-xs shadow-black/20',
      sm: 'shadow-sm shadow-black/30',
      md: 'shadow-md shadow-black/40',
      lg: 'shadow-lg shadow-black/50',
      xl: 'shadow-xl shadow-black/60',
      '2xl': 'shadow-2xl shadow-black/70',
      glow: 'shadow-lg shadow-orange-500/30',
      colored: 'shadow-lg shadow-orange-600/25'
    },
    icon: {
      primary: 'text-gray-100',
      secondary: 'text-gray-300',
      tertiary: 'text-gray-400',
      brand: 'text-blue-400',
      destructive: 'text-red-400',
      success: 'text-emerald-400',
      warning: 'text-amber-400',
      info: 'text-blue-400',
      muted: 'text-gray-500'
    },
    gradient: {
      brand: 'bg-gradient-to-r from-blue-600 via-blue-700 to-red-500',
      brandSubtle: 'bg-gradient-to-r from-blue-900/50 to-red-900/50',
      warm: 'bg-gradient-to-r from-red-600 to-red-700',
      cool: 'bg-gradient-to-r from-blue-600 to-blue-700',
      success: 'bg-gradient-to-r from-emerald-600 to-teal-700',
      surface: 'bg-gradient-to-b from-black to-blue-950/20'
    }
  }
}

export const compositions = {
  text: {
    display: cn('text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight'),
    heading: cn('text-2xl md:text-3xl font-bold tracking-tight leading-tight'),
    subheading: cn('text-xl md:text-2xl font-semibold tracking-tight leading-snug'),
    title: cn('text-lg font-semibold tracking-tight leading-snug'),
    body: cn('text-base leading-relaxed'),
    bodyLarge: cn('text-lg leading-relaxed'),
    bodySmall: cn('text-sm leading-relaxed'),
    caption: cn('text-xs font-medium tracking-wide uppercase leading-tight'),
    muted: cn('text-sm leading-normal opacity-80'),
    code: cn('font-mono text-sm bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded-md'),
    disabled: cn('text-slate-400 dark:text-slate-500')
  },
  layout: {
    container: cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'),
    containerSmall: cn('mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'),
    section: cn('py-12 md:py-16 lg:py-20'),
    sectionSmall: cn('py-8 md:py-12'),
    grid: cn('grid gap-6 md:gap-8'),
    stack: cn('space-y-6'),
    stackSmall: cn('space-y-4'),
    flex: cn('flex items-center gap-4'),
    flexColumn: cn('flex flex-col gap-4')
  },
  surface: {
    base: cn('rounded-xl border transition-all duration-200',
      'bg-white dark:bg-gray-800',
      'border-gray-200 dark:border-gray-700'),
    elevated: cn('shadow-lg hover:shadow-xl transition-shadow duration-300'),
    interactive: cn('cursor-pointer hover:shadow-md hover:scale-[1.02] transition-all duration-200'),
    glass: cn('backdrop-blur-lg border',
      'bg-white/80 dark:bg-gray-900/80',
      'border-gray-200/30 dark:border-gray-700/30'),
    floating: cn('shadow-2xl border',
      'bg-white/95 dark:bg-gray-800/95',
      'border-gray-200/40 dark:border-gray-700/40',
      'backdrop-blur-md')
  },
  card: {
    base: cn('rounded-xl border overflow-hidden transition-all duration-200',
      'bg-white dark:bg-gray-800',
      'border-gray-200 dark:border-gray-700'),
    interactive: cn('cursor-pointer hover:shadow-lg hover:shadow-gray-900/10 dark:hover:shadow-black/30',
      'hover:border-gray-300 dark:hover:border-gray-600',
      'hover:-translate-y-1 transition-all duration-300 ease-out'),
    elevated: cn('shadow-md hover:shadow-xl transition-shadow duration-300'),
    feature: cn('p-8 text-center hover:bg-gray-50/50 dark:hover:bg-gray-700/30',
      'transition-colors duration-200')
  },
  button: {
    base: cn('inline-flex items-center justify-center rounded-lg font-semibold',
      'transition-all duration-200 focus-visible:outline-none',
      'disabled:pointer-events-none disabled:opacity-50',
      'active:scale-[0.98] transform'),
    primary: cn('bg-gradient-to-r from-blue-600 to-red-500 text-white',
      'hover:from-blue-700 hover:to-red-600',
      'shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30',
      'focus-visible:ring-4 focus-visible:ring-blue-500/20'),
    secondary: cn('bg-white text-gray-700 border-2 border-gray-200',
      'hover:bg-gray-50 hover:border-gray-300',
      'dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700',
      'dark:hover:bg-gray-700 dark:hover:border-gray-600',
      'shadow-sm hover:shadow-md transition-all duration-200'),
    outline: cn('border-2 border-gray-300 text-gray-700 bg-transparent',
      'hover:bg-gray-50 hover:border-gray-400',
      'dark:border-gray-600 dark:text-gray-300',
      'dark:hover:bg-gray-800 dark:hover:border-gray-500',
      'transition-all duration-200'),
    ghost: cn('text-gray-700 bg-transparent',
      'hover:bg-gray-100 hover:text-gray-900',
      'dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100',
      'transition-all duration-200'),
    destructive: cn('bg-gradient-to-r from-red-600 to-red-700 text-white',
      'hover:from-red-700 hover:to-red-800',
      'shadow-lg shadow-red-600/25 hover:shadow-xl hover:shadow-red-600/30',
      'focus-visible:ring-4 focus-visible:ring-red-500/20'),
    success: cn('bg-gradient-to-r from-emerald-600 to-emerald-700 text-white',
      'hover:from-emerald-700 hover:to-emerald-800',
      'shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/30',
      'focus-visible:ring-4 focus-visible:ring-emerald-500/20')
  },
  input: {
    base: cn('w-full rounded-lg border px-4 py-3 text-base',
      'bg-white dark:bg-gray-800',
      'border-gray-300 dark:border-gray-600',
      'text-gray-900 dark:text-gray-100',
      'placeholder:text-gray-500 dark:placeholder:text-gray-400',
      'focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10',
      'dark:focus:border-blue-400 dark:focus:ring-blue-400/20',
      'transition-all duration-200'),
    error: cn('border-red-500 focus:border-red-500 focus:ring-red-500/20'),
    success: cn('border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/20')
  },
  badge: {
    base: cn('inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
      'transition-all duration-200'),
    default: cn('bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'),
    primary: cn('bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'),
    secondary: cn('bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'),
    success: cn('bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300'),
    warning: cn('bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'),
    destructive: cn('bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'),
    error: cn('bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'),
    outline: cn('border border-current bg-transparent')
  },
  dropdown: {
    container: cn('bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg'),
    item: (isDanger?: boolean) => cn(
      'px-3 py-2 text-sm cursor-pointer transition-colors',
      isDanger 
        ? 'text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20'
        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
    ),
    icon: (isDanger?: boolean) => cn(
      'w-4 h-4 mr-2',
      isDanger ? 'text-red-500' : 'text-gray-500'
    )
  },
  section: {
    elevated: cn('bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700')
  },
  field: {
    base: cn('space-y-2'),
    error: cn('text-red-600 dark:text-red-400'),
    disabled: cn('opacity-50 cursor-not-allowed')
  },
  animation: {
    fadeIn: cn('animate-in fade-in duration-200'),
    slideIn: cn('animate-in slide-in-from-bottom-4 duration-300'),
    scaleIn: cn('animate-in zoom-in-95 duration-200'),
    pulse: cn('animate-pulse'),
    bounce: cn('animate-bounce'),
    spin: cn('animate-spin')
  }
}
