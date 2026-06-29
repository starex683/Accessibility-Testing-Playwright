# Playwright Accessibility Testing

This project demonstrates how to perform **web accessibility testing** using **Playwright**, **TypeScript**, and **Axe-Core**. It follows Playwright best practices and scans web pages for accessibility violations based on WCAG guidelines.

---

## Tech Stack

* Playwright
* TypeScript
* Axe-Core Playwright
* Node.js

---

## Prerequisites

Before running this project, ensure you have the following installed:

* Node.js (v18.16.0 or later)
* npm (v9.5.1 or later)

You can verify your installed versions by running:

```bash
node -v
npm -v
```

---

## Installation

### 1. Create a new Playwright project

```bash
npm init playwright@latest
```

### 2. Install project dependencies

```bash
npm install
```

or

```bash
npm i
```

---

## Running the Tests

### Run all tests

```bash
npx playwright test
```

### Run a specific test file

```bash
npx playwright test landing-page.spec.ts
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### View the HTML report

```bash
npx playwright show-report
```

---

## Accessibility Testing Workflow

This project performs accessibility testing using **@axe-core/playwright**.

Each test follows these steps:

1. Import the **@axe-core/playwright** package.
2. Use the standard Playwright Test syntax to define the test.
3. Navigate to the target web page.
4. Execute the accessibility scan using:

```typescript
await new AxeBuilder({ page }).analyze();
```

5. Validate that no accessibility violations are detected using Playwright assertions.

This approach helps identify issues related to:

* Missing alternative text
* Incorrect heading hierarchy
* Color contrast problems
* Missing form labels
* ARIA attribute violations
* Keyboard accessibility issues
* Other WCAG compliance violations

---

## Project Structure

```text
Playwright-Accessibility/
│
├── tests/
│   └── landing-page.spec.ts
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## Git Commands

Initialize a Git repository:

```bash
git init
```

Check repository status:

```bash
git status
```

Stage all files:

```bash
git add .
```

Commit the changes:

```bash
git commit -m "Initial commit - Playwright Accessibility Testing"
```

Add the remote repository:

```bash
git remote add origin https://github.com/starex683/Accessibility-Testing-Playwright.git
```

Rename the default branch:

```bash
git branch -M main
```

Push the project to GitHub:

```bash
git push -u origin main
```

---

## Dependencies

Install Axe-Core for Playwright:

```bash
npm install --save-dev @axe-core/playwright
```

---

## Author

**Akhila Gandikota**

QA Automation Engineer

Specialized in Playwright, TypeScript, API Testing, Accessibility Testing, and CI/CD Automation.
