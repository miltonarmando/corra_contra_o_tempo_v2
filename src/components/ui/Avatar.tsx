import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { cn } from '@/utils'

interface AvatarProps {
  src?: string
  alt?: string
  fallback?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  className?: string
}

const sizes = {
  xs: 'h-6 w-6 text-xs',
  sm: 'h-8 w-8 text-sm',
  md: 'h-10 w-10 text-sm',
  lg: 'h-12 w-12 text-base',
  xl: 'h-14 w-14 text-lg',
  '2xl': 'h-16 w-16 text-xl'
}

export function Avatar({ src, alt, fallback, size = 'md', className }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      className={cn(
        'relative flex shrink-0 overflow-hidden rounded-full ring-2 ring-slate-200/60 dark:ring-slate-700/60',
        sizes[size],
        className
      )}
    >
      <AvatarPrimitive.Image
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
      />
      <AvatarPrimitive.Fallback
        className={cn(
          'flex h-full w-full items-center justify-center rounded-full font-medium',
          'bg-gradient-to-br from-indigo-500 to-purple-600 text-white',
          'dark:from-indigo-600 dark:to-purple-700'
        )}
      >
        {fallback || '?'}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  )
}