import { Warning, ArrowClockwise, House } from '@phosphor-icons/react'
import { Button } from './ui/Button'
import { Card, CardContent, CardHeader } from './ui/Card'

interface ErrorFallbackProps {
  error: Error
  resetErrorBoundary: () => void
}

export function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
            <Warning className="w-6 h-6 text-destructive" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Something went wrong</h1>
          <p className="text-muted-foreground">
            We encountered an unexpected error. Please try refreshing the page.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <details className="group">
            <summary className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Error details
            </summary>
            <div className="mt-2 p-3 bg-muted rounded-md">
              <code className="text-xs text-muted-foreground break-all">
                {error.message}
              </code>
            </div>
          </details>
          
          <div className="flex gap-2">
            <Button 
              onClick={resetErrorBoundary}
              className="flex-1"
              variant="primary"
            >
              <ArrowClockwise className="w-4 h-4 mr-2" />
              Try again
            </Button>
            <Button 
              onClick={() => window.location.href = '/'}
              variant="outline"
              className="flex-1"
            >
              <House className="w-4 h-4 mr-2" />
              Go home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
