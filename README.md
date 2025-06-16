# Modern UI React Component Library

A comprehensive, modern React component library built with TypeScript, Tailwind CSS, and Framer Motion. This template provides a complete foundation for building scalable web applications with beautiful, accessible UI components.

![React](https://img.shields.io/badge/React-18.0+-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5.0+-purple.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Features

### 🎨 **50+ UI Components**
- **Form Components**: Button, Input, Checkbox, Switch, Select, Radio, Textarea
- **Data Display**: Table, Badge, Avatar, Progress, Accordion, Card
- **Navigation**: Breadcrumb, Tabs, Pagination, Menu
- **Feedback**: Alert, Modal, Tooltip, Toast, Loading states
- **Layout**: Container, Grid, Flex utilities, Separators

### 🌙 **Advanced Theme System**
- **Multi-theme Support**: Light, Dark, and System preference detection
- **Real-time Theme Switching**: Seamless transitions between themes
- **Custom Theme Tokens**: Comprehensive design token system
- **Consistent Styling**: All components automatically adapt to the selected theme

### 🎮 **Interactive Playground**
- **Live Component Testing**: Real-time component customization
- **Code Generation**: Automatic JSX code generation for each configuration
- **Property Controls**: Interactive controls for all component properties
- **Theme Preview**: See how components look in different themes

### ♿ **Accessibility First**
- **WCAG 2.1 Compliant**: All components meet accessibility standards
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Support**: Proper ARIA attributes and semantic HTML
- **Focus Management**: Visible focus indicators and logical tab order

### 🚀 **Developer Experience**
- **TypeScript**: Full type safety with comprehensive type definitions
- **Hot Reload**: Instant feedback during development
- **ESLint + Prettier**: Code quality and formatting enforcement
- **Component Documentation**: Built-in showcase and documentation pages

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with hooks and modern patterns
- **Language**: TypeScript 5+ with strict type checking
- **Styling**: Tailwind CSS 3+ with custom design system
- **Animations**: Framer Motion for smooth, performant animations
- **Build Tool**: Vite for fast development and optimized builds
- **State Management**: React hooks with context providers
- **Testing**: Vitest for unit and integration testing
- **Code Quality**: ESLint, Prettier, and Commitlint

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd React_template

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint
```

## 🎯 Usage Examples

### Basic Button Usage
```tsx
import { Button } from '@/components/ui/Button'

function MyComponent() {
  return (
    <div>
      <Button variant="primary" size="lg">
        Click me!
      </Button>
      <Button variant="outline" disabled>
        Disabled
      </Button>
    </div>
  )
}
```

### Form Components
```tsx
import { Input, Checkbox, Switch } from '@/components/ui'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [notifications, setNotifications] = useState(true)

  return (
    <form>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <Checkbox
        checked={rememberMe}
        onChange={(e) => setRememberMe(e.target.checked)}
        label="Remember me"
      />
      
      <Switch
        checked={notifications}
        onCheckedChange={setNotifications}
        label="Enable notifications"
      />
    </form>
  )
}
```

### Data Table
```tsx
import { Table } from '@/components/ui/Table'

const columns = [
  { header: 'Name', accessor: 'name', sortable: true },
  { header: 'Email', accessor: 'email', sortable: true },
  { 
    header: 'Status', 
    accessor: 'status',
    cell: (row) => (
      <Badge variant={row.status === 'active' ? 'success' : 'secondary'}>
        {row.status}
      </Badge>
    )
  }
]

function UserTable({ users }) {
  return (
    <Table
      columns={columns}
      data={users}
      selectable
      sortable
      caption="User management table"
    />
  )
}
```

### Theme Integration
```tsx
import { useTheme } from '@/hooks/useTheme'

function ThemeToggle() {
  const { theme, setTheme, actualTheme } = useTheme()

  return (
    <div>
      <p>Current theme: {actualTheme}</p>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('system')}>System</button>
    </div>
  )
}
```

## 📱 Pages & Features

### 🏠 **Home Page**
- Hero section with animated elements
- Feature highlights with interactive cards
- Statistics and company information
- Call-to-action sections

### 🎨 **Components Page**
- Comprehensive component gallery
- Organized by categories (Form, Data, Navigation, Feedback)
- Live examples with code snippets
- Search and filter functionality

### 📚 **Documentation Page**
- Getting started guide
- API references for all components
- Best practices and guidelines
- Integration examples

### 🎮 **Interactive Playground**
- **Button Playground**: Customize variants, sizes, states
- **Checkbox Playground**: Test sizes, states, labels
- **Switch Playground**: Interactive toggle controls
- **Progress Playground**: Value sliders and variants
- **Table Playground**: Sorting, selection, pagination
- **Theme Playground**: Real-time theme switching with component previews

### 🌟 **Showcase Page**
- Live component demonstrations
- Interactive examples
- State management examples
- Responsive design showcase

## 🎨 Component Variants

### Button Variants
- `primary` - Main action button
- `secondary` - Secondary actions  
- `outline` - Outlined style
- `ghost` - Minimal style
- `destructive` - Dangerous actions

### Button Sizes
- `sm` - Small (compact interfaces)
- `md` - Medium (default)
- `lg` - Large (prominent actions)
- `xl` - Extra large (hero sections)

### Theme Variants
- `light` - Light mode
- `dark` - Dark mode  
- `system` - Follows system preference

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/                    # Core UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Table.tsx
│   │   └── theme.ts          # Theme tokens and compositions
│   ├── common/               # Shared layout components
│   │   ├── PageWrapper.tsx
│   │   ├── PageHeader.tsx
│   │   └── animations.ts
│   └── ErrorFallback.tsx
├── pages/                    # Application pages
│   ├── Home.tsx
│   ├── Components.tsx
│   ├── Documentation.tsx
│   ├── Playground.tsx
│   └── Showcase.tsx
├── hooks/                    # Custom React hooks
│   ├── useTheme.ts
│   └── useMounted.ts
├── providers/                # Context providers
│   ├── ThemeProvider.tsx
│   └── AnimationProvider.tsx
├── layouts/                  # Layout components
│   └── Layout.tsx
├── utils/                    # Utility functions
│   └── index.ts
└── types/                    # TypeScript type definitions
    └── global.d.ts
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention
This project uses [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test additions/modifications
- `chore:` - Maintenance tasks

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Phosphor Icons](https://phosphoricons.com/) - Icon library
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the documentation in the `/docs` folder
- Visit the interactive playground for live examples

---

Built with ❤️ using modern web technologies
