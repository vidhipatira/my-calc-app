# my-calc-app
# My Calculator App 🧮

A simple Node.js calculator built to demonstrate **Express** endpoints and **GitHub Actions** CI/CD pipelines.

## Features
* **Addition Endpoint**: `/calculator/add?a=5&b=10`
* **Automated Testing**: Uses Jest and Supertest.
* **CI/CD**: Every push is automatically tested via GitHub Actions.

## How to Run Locally
1. Clone the repo.
2. Run `npm install`.
3. Start the server with `npm start`.
4. Visit `http://localhost:3000/calculator/add?a=5&b=10` in your browser.

## How to Test
Run the command:
```bash
npm test
