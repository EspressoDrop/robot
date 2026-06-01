# TypeScript & Playwright Studies

A learning repository for mastering TypeScript and Playwright test automation.

## 📚 About This Project

This repository contains exercises, examples, and projects for learning:
- **TypeScript**: Modern JavaScript with static typing
- **Playwright**: End-to-end testing framework for web applications

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm or yarn package manager
- A code editor (VS Code recommended)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd robot

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

## 📖 Learning Topics

### TypeScript Fundamentals
- Basic types and type annotations
- Interfaces and type aliases
- Classes and inheritance
- Generics
- Modules and namespaces
- Advanced types (union, intersection, conditional)
- Decorators

### Playwright Testing
- Writing end-to-end tests
- Page Object Model (POM) pattern
- Selectors and locators
- Test assertions
- Test configuration
- Running tests in different browsers
- Debugging tests
- API testing
- Visual comparisons

## 🗂️ Project Structure

```
robot/
├── src/              # TypeScript source files
├── tests/            # Playwright test files
├── pages/            # Page Object Models
├── fixtures/         # Test fixtures and data
├── playwright.config.ts  # Playwright configuration
├── tsconfig.json     # TypeScript configuration
└── package.json      # Project dependencies
```

## 🧪 Running Tests

```bash
# Run all tests
npm test

# Run tests in headed mode (see browser)
npm run test:headed

# Run tests in a specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

# Run a specific test file
npx playwright test tests/example.spec.ts

# Run tests in debug mode
npx playwright test --debug

# View test report
npx playwright show-report
```

## 📝 TypeScript Commands

```bash
# Compile TypeScript
npm run build

# Watch mode for development
npm run dev

# Type checking
npm run type-check
```

## 🔧 Configuration

### TypeScript Configuration (`tsconfig.json`)
- Target: ES2020 or higher
- Module: ESNext or CommonJS
- Strict type checking enabled

### Playwright Configuration (`playwright.config.ts`)
- Multiple browser support
- Screenshot on failure
- Video recording options
- Parallel test execution

## 📚 Resources

### TypeScript
- [Official TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

### Playwright
- [Official Playwright Documentation](https://playwright.dev/)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Best Practices](https://playwright.dev/docs/best-practices)

## 🎯 Learning Goals

- [ ] Master TypeScript type system
- [ ] Write clean, type-safe code
- [ ] Create maintainable E2E tests
- [ ] Implement Page Object Model pattern
- [ ] Handle asynchronous operations
- [ ] Debug and troubleshoot tests
- [ ] Configure CI/CD pipelines

## 🤝 Contributing

This is a personal learning repository, but suggestions and improvements are welcome!

## 📄 License

This project is for educational purposes.

## 📧 Contact

For questions or feedback, feel free to reach out or open an issue.
