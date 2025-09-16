# MCP Directory Design System

> A comprehensive design system for the AI-powered MCP platform, inspired by leading Y Combinator SaaS applications

## 🎨 Brand Identity

### Vision Statement
"Democratizing AI development through intelligent MCP creation and distribution"

### Brand Personality
- **Professional**: Enterprise-ready, trustworthy, reliable
- **Innovative**: AI-first, cutting-edge, forward-thinking  
- **Accessible**: Simple, intuitive, developer-friendly
- **Community-driven**: Collaborative, open, supportive

## 🌈 Color Palette

### Primary Colors
```json
{
  "primary": {
    "50": "#f0f9ff",
    "100": "#e0f2fe", 
    "200": "#bae6fd",
    "300": "#7dd3fc",
    "400": "#38bdf8",
    "500": "#0ea5e9",
    "600": "#0284c7",
    "700": "#0369a1",
    "800": "#075985",
    "900": "#0c4a6e"
  }
}
```

### Neutral Colors
```json
{
  "neutral": {
    "0": "#ffffff",
    "50": "#fafafa",
    "100": "#f5f5f5",
    "200": "#e5e5e5",
    "300": "#d4d4d4",
    "400": "#a3a3a3",
    "500": "#737373",
    "600": "#525252",
    "700": "#404040",
    "800": "#262626",
    "900": "#171717",
    "950": "#0a0a0a"
  }
}
```

### Semantic Colors
```json
{
  "success": {
    "50": "#f0fdf4",
    "500": "#22c55e",
    "600": "#16a34a",
    "700": "#15803d"
  },
  "warning": {
    "50": "#fffbeb",
    "500": "#f59e0b",
    "600": "#d97706",
    "700": "#b45309"
  },
  "error": {
    "50": "#fef2f2",
    "500": "#ef4444",
    "600": "#dc2626",
    "700": "#b91c1c"
  },
  "info": {
    "50": "#eff6ff",
    "500": "#3b82f6",
    "600": "#2563eb",
    "700": "#1d4ed8"
  }
}
```

### AI-Specific Colors
```json
{
  "ai": {
    "gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "accent": "#8b5cf6",
    "glow": "#a855f7",
    "neural": "#06b6d4"
  }
}
```

## 🔤 Typography

### Font Stack
```css
/* Primary Font - Inter */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

/* Code Font - JetBrains Mono */
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');

:root {
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
}
```

### Type Scale
```json
{
  "typography": {
    "xs": {
      "fontSize": "0.75rem",
      "lineHeight": "1rem",
      "letterSpacing": "0.025em"
    },
    "sm": {
      "fontSize": "0.875rem", 
      "lineHeight": "1.25rem",
      "letterSpacing": "0.025em"
    },
    "base": {
      "fontSize": "1rem",
      "lineHeight": "1.5rem",
      "letterSpacing": "0"
    },
    "lg": {
      "fontSize": "1.125rem",
      "lineHeight": "1.75rem", 
      "letterSpacing": "-0.025em"
    },
    "xl": {
      "fontSize": "1.25rem",
      "lineHeight": "1.75rem",
      "letterSpacing": "-0.025em"
    },
    "2xl": {
      "fontSize": "1.5rem",
      "lineHeight": "2rem",
      "letterSpacing": "-0.025em"
    },
    "3xl": {
      "fontSize": "1.875rem",
      "lineHeight": "2.25rem",
      "letterSpacing": "-0.025em"
    },
    "4xl": {
      "fontSize": "2.25rem",
      "lineHeight": "2.5rem",
      "letterSpacing": "-0.025em"
    },
    "5xl": {
      "fontSize": "3rem",
      "lineHeight": "1",
      "letterSpacing": "-0.025em"
    },
    "6xl": {
      "fontSize": "3.75rem",
      "lineHeight": "1",
      "letterSpacing": "-0.025em"
    }
  }
}
```

## 📐 Spacing & Layout

### Spacing Scale
```json
{
  "spacing": {
    "0": "0px",
    "0.5": "0.125rem",
    "1": "0.25rem",
    "1.5": "0.375rem", 
    "2": "0.5rem",
    "2.5": "0.625rem",
    "3": "0.75rem",
    "3.5": "0.875rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
    "11": "2.75rem",
    "12": "3rem",
    "14": "3.5rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "28": "7rem",
    "32": "8rem",
    "36": "9rem",
    "40": "10rem",
    "44": "11rem",
    "48": "12rem",
    "52": "13rem",
    "56": "14rem",
    "60": "15rem",
    "64": "16rem",
    "72": "18rem",
    "80": "20rem",
    "96": "24rem"
  }
}
```

### Container Sizes
```json
{
  "containers": {
    "sm": "640px",
    "md": "768px", 
    "lg": "1024px",
    "xl": "1280px",
    "2xl": "1536px"
  }
}
```

## 🎭 Component Styles

### Buttons
```css
/* Primary Button */
.btn-primary {
  @apply inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium;
  @apply bg-primary-600 text-white shadow-sm;
  @apply hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2;
  @apply transition-all duration-200 ease-in-out;
  @apply disabled:opacity-50 disabled:cursor-not-allowed;
}

/* Secondary Button */
.btn-secondary {
  @apply inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium;
  @apply bg-white text-neutral-700 border border-neutral-300 shadow-sm;
  @apply hover:bg-neutral-50 hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2;
  @apply transition-all duration-200 ease-in-out;
}

/* AI Button (Special) */
.btn-ai {
  @apply inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium;
  @apply bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg;
  @apply hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2;
  @apply transition-all duration-200 ease-in-out transform hover:scale-105;
  position: relative;
  overflow: hidden;
}

.btn-ai::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.btn-ai:hover::before {
  left: 100%;
}
```

### Cards
```css
.card {
  @apply bg-white rounded-xl border border-neutral-200 shadow-sm;
  @apply hover:shadow-md transition-all duration-200 ease-in-out;
}

.card-hover {
  @apply hover:shadow-lg hover:-translate-y-1 hover:border-neutral-300;
}

.card-ai {
  @apply relative overflow-hidden;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%);
  border: 1px solid rgba(139, 92, 246, 0.2);
}

.card-ai::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #8b5cf6, #3b82f6);
}
```

### Inputs
```css
.input {
  @apply block w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm;
  @apply placeholder:text-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-0;
  @apply transition-all duration-200 ease-in-out;
  @apply disabled:bg-neutral-50 disabled:text-neutral-500 disabled:cursor-not-allowed;
}

.input-search {
  @apply pl-10 bg-neutral-50 border-neutral-200;
  @apply focus:bg-white focus:border-primary-300;
}
```

## ✨ Animations

### Keyframes
```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes shimmer {
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
}

@keyframes aiGlow {
  0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
  50% { box-shadow: 0 0 30px rgba(139, 92, 246, 0.6); }
}
```

### Animation Classes
```css
.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

.animate-slide-in {
  animation: slideIn 0.3s ease-out;
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-spin {
  animation: spin 1s linear infinite;
}

.animate-bounce {
  animation: bounce 1s infinite;
}

.animate-shimmer {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: shimmer 1.5s infinite;
}

.animate-ai-glow {
  animation: aiGlow 2s ease-in-out infinite;
}
```

## 🎯 Component Patterns

### Navigation
```css
.nav-primary {
  @apply sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200;
}

.nav-link {
  @apply px-3 py-2 text-sm font-medium text-neutral-600;
  @apply hover:text-neutral-900 transition-colors duration-200;
  position: relative;
}

.nav-link.active {
  @apply text-primary-600;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #0ea5e9, #8b5cf6);
}
```

### Loading States
```css
.skeleton {
  @apply animate-shimmer bg-neutral-200 rounded;
}

.loading-spinner {
  @apply animate-spin rounded-full border-2 border-neutral-200 border-t-primary-600;
}

.loading-dots {
  @apply flex space-x-1;
}

.loading-dots > div {
  @apply w-2 h-2 bg-primary-600 rounded-full animate-bounce;
  animation-delay: calc(var(--i) * 0.1s);
}
```

### Status Indicators
```css
.status-verified {
  @apply inline-flex items-center px-2 py-1 rounded-full text-xs font-medium;
  @apply bg-success-50 text-success-700 border border-success-200;
}

.status-ai-generated {
  @apply inline-flex items-center px-2 py-1 rounded-full text-xs font-medium;
  @apply bg-purple-50 text-purple-700 border border-purple-200;
}

.status-popular {
  @apply inline-flex items-center px-2 py-1 rounded-full text-xs font-medium;
  @apply bg-orange-50 text-orange-700 border border-orange-200;
}
```

## 🌙 Dark Mode

### Dark Mode Colors
```json
{
  "dark": {
    "background": "#0a0a0a",
    "surface": "#171717",
    "surface-elevated": "#262626",
    "border": "#404040",
    "text-primary": "#fafafa",
    "text-secondary": "#a3a3a3",
    "text-muted": "#737373"
  }
}
```

### Dark Mode Classes
```css
.dark .card {
  @apply bg-neutral-900 border-neutral-800;
}

.dark .input {
  @apply bg-neutral-900 border-neutral-700 text-neutral-100;
  @apply placeholder:text-neutral-500;
}

.dark .nav-primary {
  @apply bg-neutral-900/80 border-neutral-800;
}
```

## 📱 Responsive Design

### Breakpoints
```json
{
  "breakpoints": {
    "sm": "640px",
    "md": "768px", 
    "lg": "1024px",
    "xl": "1280px",
    "2xl": "1536px"
  }
}
```

### Mobile-First Approach
```css
/* Mobile First */
.responsive-grid {
  @apply grid grid-cols-1 gap-4;
  @apply md:grid-cols-2 md:gap-6;
  @apply lg:grid-cols-3 lg:gap-8;
  @apply xl:grid-cols-4;
}

.responsive-text {
  @apply text-2xl leading-8;
  @apply md:text-3xl md:leading-9;
  @apply lg:text-4xl lg:leading-10;
}
```

## 🎨 AI-Specific Design Elements

### AI Gradient Backgrounds
```css
.ai-gradient-1 {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.ai-gradient-2 {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.ai-gradient-3 {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.ai-mesh-bg {
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
}
```

### Neural Network Pattern
```css
.neural-pattern {
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
}
```

## 🔧 Implementation Guidelines

### CSS Custom Properties
```css
:root {
  /* Colors */
  --color-primary: 14 165 233;
  --color-secondary: 115 115 115;
  --color-success: 34 197 94;
  --color-warning: 245 158 11;
  --color-error: 239 68 68;
  
  /* Spacing */
  --spacing-unit: 0.25rem;
  
  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 200ms ease-in-out;
  --transition-slow: 300ms ease-in-out;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}
```

### Utility Classes
```css
/* Glassmorphism */
.glass {
  @apply bg-white/10 backdrop-blur-md border border-white/20;
}

/* Neumorphism */
.neuro {
  background: #f0f0f0;
  box-shadow: 
    8px 8px 16px #d1d1d1,
    -8px -8px 16px #ffffff;
}

/* Gradient Text */
.gradient-text {
  @apply bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent;
}

/* Hover Effects */
.hover-lift {
  @apply transition-transform duration-200 hover:-translate-y-1;
}

.hover-glow {
  @apply transition-shadow duration-200 hover:shadow-lg hover:shadow-primary-500/25;
}
```

## 📊 Performance Considerations

### Optimization Guidelines
- Use `transform` and `opacity` for animations (GPU accelerated)
- Implement `will-change` property for elements that will animate
- Use `contain` property for layout optimization
- Implement lazy loading for images and components
- Use CSS containment for better performance

### Critical CSS
```css
/* Above-the-fold critical styles */
.critical {
  font-display: swap;
  contain: layout style paint;
}
```

## 🎭 Brand Applications

### Logo Usage
- Minimum size: 24px height
- Clear space: 2x logo height on all sides
- Use on light backgrounds: Primary color version
- Use on dark backgrounds: White version
- Use on images: White version with subtle shadow

### Voice & Tone
- **Professional**: Clear, concise, authoritative
- **Helpful**: Supportive, educational, encouraging  
- **Innovative**: Forward-thinking, cutting-edge, exciting
- **Accessible**: Simple, jargon-free, inclusive

---

*This design system is living document that evolves with the product. Last updated: September 2025*