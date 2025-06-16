import { cn } from '@/utils'

export const tokens = {
  light: {
    text: {
      primary: 'text-slate-950 tracking-tight font-bold',
      secondary: 'text-slate-800 font-semibold',
      tertiary: 'text-slate-700 font-medium',
      muted: 'text-slate-600 font-normal',
      brand: 'text-indigo-700 font-semibold',
      onPrimary: 'text-white font-medium',
      onSecondary: 'text-slate-950 font-medium',
      destructive: 'text-red-700 font-medium',
      success: 'text-emerald-700 font-medium',
      warning: 'text-amber-700 font-medium',
      info: 'text-blue-700 font-medium',
      placeholder: 'text-slate-500',
      active: 'text-indigo-700 font-semibold',
      inactive: 'text-slate-600 hover:text-slate-800 transition-colors duration-200',
      link: 'text-indigo-700 hover:text-indigo-800 underline-offset-4 hover:underline transition-all duration-200'
    },
    background: {
      primary: 'bg-white',
      secondary: 'bg-slate-50/80',
      tertiary: 'bg-slate-100/50',
      hover: 'hover:bg-slate-100/80 transition-colors duration-200',
      selected: 'bg-indigo-50 border-indigo-200',
      active: 'bg-indigo-600 text-white',
      brand: 'bg-gradient-to-r from-indigo-600 to-purple-600',
      brandSubtle: 'bg-indigo-50',
      destructive: 'bg-red-50 border-red-200',
      success: 'bg-emerald-50 border-emerald-200',
      warning: 'bg-amber-50 border-amber-200',
      info: 'bg-blue-50 border-blue-200',
      muted: 'bg-slate-100/60',
      elevated: 'bg-white shadow-sm border border-slate-200/60',
      sunken: 'bg-slate-50 border border-slate-200/40 inset-shadow',
      overlay: 'bg-slate-900/60 backdrop-blur-sm',
      floating: 'bg-white/95 backdrop-blur-md border border-slate-200/40 shadow-xl',
      glass: 'bg-white/80 backdrop-blur-lg border border-slate-200/30'
    },
    border: {
      default: 'border-slate-200/80',
      subtle: 'border-slate-100',
      strong: 'border-slate-300',
      active: 'border-indigo-500',
      hover: 'hover:border-slate-300 transition-colors duration-200',
      focus: 'focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10',
      destructive: 'border-red-300',
      success: 'border-emerald-300',
      warning: 'border-amber-300',
      info: 'border-blue-300'
    },
    ring: {
      focus: 'focus-visible:ring-4 focus-visible:ring-indigo-500/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
      focusVisible: 'focus-visible:ring-4 focus-visible:ring-indigo-500/20',
      destructive: 'ring-4 ring-red-500/20',
      success: 'ring-4 ring-emerald-500/20',
      warning: 'ring-4 ring-amber-500/20',
      info: 'ring-4 ring-blue-500/20'
    },
    shadow: {
      xs: 'shadow-xs shadow-slate-900/5',
      sm: 'shadow-sm shadow-slate-900/10',
      md: 'shadow-md shadow-slate-900/15',
      lg: 'shadow-lg shadow-slate-900/20',
      xl: 'shadow-xl shadow-slate-900/25',
      '2xl': 'shadow-2xl shadow-slate-900/30',
      glow: 'shadow-lg shadow-indigo-500/25',
      colored: 'shadow-lg shadow-indigo-600/20'
    },
    icon: {
      primary: 'text-slate-800',
      secondary: 'text-slate-600',
      tertiary: 'text-slate-500',
      brand: 'text-indigo-700',
      destructive: 'text-red-600',
      success: 'text-emerald-600',
      warning: 'text-amber-600',
      info: 'text-blue-600',
      muted: 'text-slate-500'
    },
    gradient: {
      brand: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600',
      brandSubtle: 'bg-gradient-to-r from-indigo-50 to-purple-50',
      warm: 'bg-gradient-to-r from-orange-400 to-pink-500',
      cool: 'bg-gradient-to-r from-blue-500 to-indigo-600',
      success: 'bg-gradient-to-r from-emerald-500 to-teal-600',
      surface: 'bg-gradient-to-b from-white to-slate-50/50'
    }
  },
  dark: {
    text: {
      primary: 'text-slate-50 tracking-tight font-bold',
      secondary: 'text-slate-100 font-semibold',
      tertiary: 'text-slate-200 font-medium',
      muted: 'text-slate-300 font-normal',
      brand: 'text-indigo-300 font-semibold',
      onPrimary: 'text-slate-950 font-medium',
      onSecondary: 'text-slate-50 font-medium',
      destructive: 'text-red-300 font-medium',
      success: 'text-emerald-300 font-medium',
      warning: 'text-amber-300 font-medium',
      info: 'text-blue-300 font-medium',
      placeholder: 'text-slate-400',
      active: 'text-indigo-300 font-semibold',
      inactive: 'text-slate-300 hover:text-slate-100 transition-colors duration-200',
      link: 'text-indigo-300 hover:text-indigo-200 underline-offset-4 hover:underline transition-all duration-200'
    },
    background: {
      primary: 'bg-slate-900',
      secondary: 'bg-slate-800/80',
      tertiary: 'bg-slate-700/50',
      hover: 'hover:bg-slate-800/80 transition-colors duration-200',
      selected: 'bg-indigo-950/50 border-indigo-800/50',
      active: 'bg-indigo-600 text-white',
      brand: 'bg-gradient-to-r from-indigo-600 to-purple-600',
      brandSubtle: 'bg-indigo-950/30',
      destructive: 'bg-red-950/30 border-red-800/30',
      success: 'bg-emerald-950/30 border-emerald-800/30',
      warning: 'bg-amber-950/30 border-amber-800/30',
      info: 'bg-blue-950/30 border-blue-800/30',
      muted: 'bg-slate-800/60',
      elevated: 'bg-slate-800/90 shadow-lg border border-slate-700/60',
      sunken: 'bg-slate-900/80 border border-slate-700/40',
      overlay: 'bg-slate-950/80 backdrop-blur-sm',
      floating: 'bg-slate-800/95 backdrop-blur-md border border-slate-700/40 shadow-2xl',
      glass: 'bg-slate-900/80 backdrop-blur-lg border border-slate-700/30'
    },
    border: {
      default: 'border-slate-700/80',
      subtle: 'border-slate-800/60',
      strong: 'border-slate-600',
      active: 'border-indigo-500',
      hover: 'hover:border-slate-600 transition-colors duration-200',
      focus: 'focus:border-indigo-400 focus:ring-4 focus:ring-indigo-400/20',
      destructive: 'border-red-700/60',
      success: 'border-emerald-700/60',
      warning: 'border-amber-700/60',
      info: 'border-blue-700/60'
    },
    ring: {
      focus: 'focus-visible:ring-4 focus-visible:ring-indigo-400/30 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900',
      focusVisible: 'focus-visible:ring-4 focus-visible:ring-indigo-400/30',
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
      glow: 'shadow-lg shadow-indigo-500/30',
      colored: 'shadow-lg shadow-indigo-600/25'
    },
    icon: {
      primary: 'text-slate-100',
      secondary: 'text-slate-300',
      tertiary: 'text-slate-400',
      brand: 'text-indigo-300',
      destructive: 'text-red-300',
      success: 'text-emerald-300',
      warning: 'text-amber-300',
      info: 'text-blue-300',
      muted: 'text-slate-400'
    },
    gradient: {
      brand: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600',
      brandSubtle: 'bg-gradient-to-r from-indigo-950/50 to-purple-950/50',
      warm: 'bg-gradient-to-r from-orange-600 to-pink-600',
      cool: 'bg-gradient-to-r from-blue-600 to-indigo-700',
      success: 'bg-gradient-to-r from-emerald-600 to-teal-700',
      surface: 'bg-gradient-to-b from-slate-900 to-slate-800/50'
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
      'bg-white dark:bg-slate-800/90',
      'border-slate-200/80 dark:border-slate-700/60'),
    elevated: cn('shadow-lg hover:shadow-xl transition-shadow duration-300'),
    interactive: cn('cursor-pointer hover:shadow-md hover:scale-[1.02] transition-all duration-200'),
    glass: cn('backdrop-blur-lg border',
      'bg-white/80 dark:bg-slate-900/80',
      'border-slate-200/30 dark:border-slate-700/30'),
    floating: cn('shadow-2xl border',
      'bg-white/95 dark:bg-slate-800/95',
      'border-slate-200/40 dark:border-slate-700/40',
      'backdrop-blur-md')
  },
  card: {
    base: cn('rounded-xl border overflow-hidden transition-all duration-200',
      'bg-white dark:bg-slate-800/90',
      'border-slate-200/80 dark:border-slate-700/60'),
    interactive: cn('cursor-pointer hover:shadow-lg hover:shadow-slate-900/10 dark:hover:shadow-black/30',
      'hover:border-slate-300 dark:hover:border-slate-600',
      'hover:-translate-y-1 transition-all duration-300 ease-out'),
    elevated: cn('shadow-md hover:shadow-xl transition-shadow duration-300'),
    feature: cn('p-8 text-center hover:bg-slate-50/50 dark:hover:bg-slate-700/30',
      'transition-colors duration-200')
  },
  button: {
    base: cn('inline-flex items-center justify-center rounded-lg font-semibold',
      'transition-all duration-200 focus-visible:outline-none',
      'disabled:pointer-events-none disabled:opacity-50',
      'active:scale-[0.98] transform'),
    primary: cn('bg-gradient-to-r from-indigo-600 to-purple-600 text-white',
      'hover:from-indigo-700 hover:to-purple-700',
      'shadow-lg shadow-indigo-600/25 hover:shadow-xl hover:shadow-indigo-600/30',
      'focus-visible:ring-4 focus-visible:ring-indigo-500/20'),
    secondary: cn('bg-white text-slate-700 border-2 border-slate-200',
      'hover:bg-slate-50 hover:border-slate-300',
      'dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700',
      'dark:hover:bg-slate-700 dark:hover:border-slate-600',
      'shadow-sm hover:shadow-md transition-all duration-200'),
    outline: cn('border-2 border-slate-300 text-slate-700 bg-transparent',
      'hover:bg-slate-50 hover:border-slate-400',
      'dark:border-slate-600 dark:text-slate-300',
      'dark:hover:bg-slate-800 dark:hover:border-slate-500',
      'transition-all duration-200'),
    ghost: cn('text-slate-700 bg-transparent',
      'hover:bg-slate-100 hover:text-slate-900',
      'dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100',
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
      'bg-white dark:bg-slate-800',
      'border-slate-300 dark:border-slate-600',
      'text-slate-900 dark:text-slate-100',
      'placeholder:text-slate-500 dark:placeholder:text-slate-400',
      'focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10',
      'dark:focus:border-indigo-400 dark:focus:ring-indigo-400/20',
      'transition-all duration-200'),
    error: cn('border-red-500 focus:border-red-500 focus:ring-red-500/20'),
    success: cn('border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/20')
  },
  badge: {
    base: cn('inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
      'transition-all duration-200'),
    default: cn('bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300'),
    primary: cn('bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300'),
    secondary: cn('bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300'),
    success: cn('bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300'),
    warning: cn('bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'),
    destructive: cn('bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'),
    error: cn('bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'),
    outline: cn('border border-current bg-transparent')
  },
  dropdown: {
    container: cn('bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg'),
    item: (isDanger?: boolean) => cn(
      'px-3 py-2 text-sm cursor-pointer transition-colors',
      isDanger 
        ? 'text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20'
        : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700'
    ),
    icon: (isDanger?: boolean) => cn(
      'w-4 h-4 mr-2',
      isDanger ? 'text-red-500' : 'text-slate-500'
    )
  },
  section: {
    elevated: cn('bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700')
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
