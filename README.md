# Playwright Accessibility Test

Sample project to demonstrate a playwrite custom command.

## Pre-Requirements
It is required to have Node.js and npm installed to run this project.

I used versions v18.16.0 and 9.5.1 of Node.js and npm, respectively. I suggest you use the same or later versions.

## Installation
Installing playwright - npm init playwright@latest
Run npm install (or npm i for the short version) to install the dev dependencies.

## Running Tests
Running all tests;
Npx playwright test;
Running a single test file;
Npx playwright test landing-page.spec.ts;

## Accessibility Test 
1) Imports the @axe-core/playwright package
2) Uses normal Playwright Test syntax to define a test case
3) Uses normal Playwright syntax to navigate to the page under test
4) Awaits AxeBuilder.analyze() to run the accessibility scan against the page
5) Uses normal Playwright Test assertions to verify that there are no violations in the returned scan results
___

## GIT Commands

git init
git status
git add .
git commit -m "Initial commit - Playwright TypeScript POM DemoQA Framework"
create repository
git remote add origin (https://github.com/starex683/Accessibility-Testing-Playwright)
git branch -M main
git push -u origin main

---####----
This project was created by Akhila

