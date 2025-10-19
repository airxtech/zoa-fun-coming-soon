# Contributing to ZOA.fun

Thank you for your interest in contributing to ZOA.fun! This document provides guidelines and instructions for contributing.

## Code of Conduct

We are committed to providing a welcoming and inspiring community for all. Please be respectful of others and follow these principles:

- Use welcoming and inclusive language
- Be respectful of differing opinions, viewpoints, and experiences
- Give and gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps which reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed after following the steps**
- **Explain which behavior you expected to see instead and why**
- **Include screenshots and animated GIFs if possible**
- **Include your environment details** (OS, browser, Node version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior and explain the expected behavior**
- **Include screenshots and animated GIFs if applicable**
- **Explain why this enhancement would be useful**

### Pull Requests

Please follow these steps when submitting a pull request:

1. **Fork the repository** and create your branch from `main`
2. **Clone the forked repository** to your local machine
   ```bash
   git clone https://github.com/your-username/zoa-fun-coming-soon.git
   cd zoa-fun-coming-soon
   ```
3. **Create a new branch** for your feature or bugfix
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```
4. **Install dependencies**
   ```bash
   npm install
   ```
5. **Make your changes**
   - Follow the coding standards (see below)
   - Write clear, descriptive commit messages
   - Add comments for complex logic
6. **Test your changes**
   ```bash
   npm run dev
   # Test in browser
   npm run build
   npm run lint
   ```
7. **Commit your changes**
   ```bash
   git add .
   git commit -m "Description of changes"
   ```
8. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
9. **Open a Pull Request**
   - Fill in the required template
   - Link any related issues
   - Describe your changes clearly
   - Wait for maintainers to review

## Coding Standards

### TypeScript

- All new code must be written in TypeScript
- Use proper type annotations
- Avoid `any` type when possible
- Use strict mode (`strict: true` in tsconfig)

### Component Structure

```typescript
'use client'; // For client components

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from 'lucide-react';

interface ComponentProps {
  // Define props with proper types
  title: string;
  description?: string;
}

export const MyComponent = ({ title, description }: ComponentProps) => {
  const [state, setState] = useState<string>('');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </motion.div>
  );
};
```

### Styling

- Use Tailwind CSS utility classes
- Use `className` for conditional styling
- Avoid inline styles except for dynamic values
- Keep color values consistent with the design system

### File Naming

- Components: `PascalCase` (e.g., `PulsingOrb.tsx`)
- Utilities: `camelCase` (e.g., `formatDate.ts`)
- Folders: `kebab-case` (e.g., `ui-components/`)

### Commit Messages

Write clear, descriptive commit messages:

```
# Good
feat: Add countdown timer component
fix: Correct animation timing in PulsingOrb
docs: Update deployment instructions

# Bad
update
fixed stuff
wip
```

## Project Structure

Please maintain the existing project structure:

```
src/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main page component
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── ui/               # Reusable UI components
│   ├── FloatingShapes.tsx
│   ├── FloatingParticles.tsx
│   └── ...
└── lib/                  # Utility functions (future)
```

## Development Workflow

### Setup Development Environment

```bash
# Install Node.js 18+ and npm

# Clone repository
git clone https://github.com/airxtech/zoa-fun-coming-soon.git
cd zoa-fun-coming-soon

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser to http://localhost:3000
```

### Before Submitting PR

```bash
# Run linter
npm run lint

# Build project
npm run build

# Test locally
npm run dev
```

## Performance Guidelines

- Minimize re-renders with proper memoization
- Use code splitting with `React.lazy`
- Optimize animations with Framer Motion
- Keep component sizes manageable
- Lazy load heavy components

## Accessibility

- Use semantic HTML elements
- Include proper ARIA labels
- Ensure color contrast meets WCAG standards
- Test keyboard navigation
- Use descriptive alt text for images

## Documentation

- Update README.md if you add new features
- Add JSDoc comments to complex functions
- Update this CONTRIBUTING.md if needed
- Keep comments clear and concise

## Pull Request Review Process

1. Maintainers will review your PR
2. Address any feedback or requested changes
3. Keep commits clean and organized
4. Once approved, your PR will be merged

## Questions?

Feel free to open an issue with the `question` label or reach out:

- **Discord**: Join our [Discord community](https://discord.gg/zoafun)
- **Email**: hello@zoa.fun
- **Twitter**: [@ZOAFun](https://twitter.com/zoafun)

---

Thank you for contributing to ZOA.fun! 🚀
