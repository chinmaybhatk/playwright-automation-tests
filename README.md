# Playwright Automation Tests

A comprehensive Playwright testing framework with Docker support for cross-browser automation testing.

## 🚀 Features

- 🎭 Multi-browser testing (Chrome, Firefox, Safari)
- 📱 Mobile viewport testing
- 🐳 Docker containerization for consistent environments
- 🔄 GitHub Actions CI/CD integration
- 📊 HTML test reports with screenshots and videos
- 🛠️ Page Object Model architecture
- 🔍 Test debugging capabilities

## Prerequisites

- Node.js 18+ 
- Docker and Docker Compose
- Git

## Quick Start

### Clone and Setup

```bash
git clone https://github.com/chinmaybhatk/playwright-automation-tests.git
cd playwright-automation-tests
npm install
npx playwright install --with-deps
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in headed mode
npm run test:headed

# Run tests with UI mode
npm run test:ui

# Generate test code
npm run codegen https://example.com

# Run tests in Docker
npm run test:docker
```

## Using with Claude

This project is set up to be controlled via Claude. You can:

1. **Write new tests**: Ask me to create test files for specific scenarios
2. **Debug failures**: Share test output and I'll help fix issues  
3. **Run tests**: I can execute tests and show you the results
4. **Update configurations**: Modify test settings, add new browsers, etc.

### Example Commands via Claude:

- "Create a test for login functionality"
- "Debug why my test is failing with timeout errors"
- "Add mobile device testing for iPhone 13"
- "Run all tests and show me the results"
- "Update the base URL to test staging environment"

## Project Structure

```
├── tests/
│   ├── example.spec.ts      # Example test file
│   ├── fixtures/           # Test data and fixtures
│   └── pages/             # Page Object Models
├── playwright.config.ts    # Playwright configuration
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose services
└── .github/
    └── workflows/
        └── playwright.yml # GitHub Actions workflow
```

## Writing Tests

### Basic Test Example

```typescript
import { test, expect } from '@playwright/test';

test('homepage has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Welcome/);
});
```

## Docker Usage

### Build and Run

```bash
# Build Docker image
docker-compose build

# Run tests in Docker
docker-compose up playwright

# Run with UI mode
docker-compose up playwright-ui
# Then open http://localhost:9323
```

## CI/CD

Tests automatically run on:
- Push to main branch
- Pull requests
- Manual workflow dispatch

View results in GitHub Actions tab.

## Environment Variables

- `BASE_URL`: The base URL for your application (default: http://localhost:3000)
- `CI`: Set to true in CI environments

## Need Help?

Ask Claude to:
- Write specific test scenarios
- Debug test failures
- Modify configurations
- Run tests and analyze results
- Set up new testing features

## License

MIT License