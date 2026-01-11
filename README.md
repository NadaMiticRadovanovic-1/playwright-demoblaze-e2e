# Playwright E2E – BrowserStack Demo (bstackdemo.com)

End-to-end (E2E) automation testing project built with **Playwright** in **JavaScript**, using the public e-commerce demo site **bstackdemo.com**.

This project demonstrates a complete “happy path” purchase flow:
**Add product to cart → Checkout → Login → Fill shipping → Order confirmation**

---

## Tech Stack
- Playwright (`@playwright/test`)
- JavaScript (Node.js)

---

## Project Structure

```
playwright-bstackdemo-e2e/
├─ e2e/
│ └─ purchase-flow.spec.js
├─ pages/
│ ├─ HomePage.js
│ ├─ LoginPage.js
│ └─ CheckoutPage.js
├─ test-data/
│ ├─ users.js # Array of user objects
│ └─ shippingData.js # Single shipping address object
├─ playwright.config.js
├─ package.json
└─ README.md
```

## Test Data
    username: demouser
    password: testingisfun99

---

## Setup & Installation

**Install dependencies:**  
```npm install```

**Install Playwright browsers:**  
```npx playwright install```

**Run all tests:**  
```npx playwright test```

**Run tests with visible browser:**  
```npx playwright test --headed```
