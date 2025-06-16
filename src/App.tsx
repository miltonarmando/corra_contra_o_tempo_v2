import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { ErrorBoundary } from 'react-error-boundary'
import { ThemeProvider } from './providers/ThemeProvider'
import { AnimationProvider } from './providers/AnimationProvider'
import { Layout } from './layouts/Layout'
import { Home } from './pages/Home'
import { Components } from './pages/Components'
import { Documentation } from './pages/Documentation'
import { Playground } from './pages/Playground'
import { Showcase } from './pages/Showcase'
import { ShowcasePage } from './pages/showcase/index'
import { ErrorFallback } from './components/ErrorFallback'
import './index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes (formerly cacheTime)
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <AnimationProvider>            <Router>              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/components" element={<Components />} />
                  <Route path="/documentation" element={<Documentation />} />
                  <Route path="/playground" element={<Playground />} />
                  <Route path="/showcase" element={<Showcase />} />
                  <Route path="/showcase-detailed" element={<ShowcasePage />} />
                </Routes>
              </Layout>
              <Toaster 
                position="top-right"
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: 'hsl(var(--card))',
                    color: 'hsl(var(--card-foreground))',
                    border: '1px solid hsl(var(--border))',
                  },
                }}
              />
            </Router>
          </AnimationProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  )
}

export default App
