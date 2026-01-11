const { test } = require("@playwright/test");
const { HomePage } = require("../pages/HomePage");
const { LoginPage } = require("../pages/LoginPage");
const { CheckoutPage } = require("../pages/CheckoutPage");
const { users } = require("../test-data/users");
const { shippingData } = require("../test-data/shippingData");

test("Successful product purchase flow", async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const checkoutPage = new CheckoutPage(page);

  await homePage.open();
  await homePage.addItemToCartById('1');
  await homePage.goToCheckout();
  await loginPage.login(users[0].username, users[0].password);

  await checkoutPage.fillShippingForm(shippingData);
  await checkoutPage.submitShipping();
  await checkoutPage.expectOrderSuccess();
});
