const { expect } = require("@playwright/test");

export class CheckoutPage {
    constructor(page) {
        this.page = page;

        this.firstNameInput = "#firstNameInput";
        this.lastNameInput = "#lastNameInput";
        this.addressInput = "#addressLine1Input";
        this.provinceInput = "#provinceInput";
        this.postCodeInput = "#postCodeInput";
        this.continueBtn = "#checkout-shipping-continue";
        this.confirmationMessage = "#confirmation-message";
    }

    async fillShippingForm(shippingData) {
        await this.page.fill(this.firstNameInput, shippingData.firstName);
        await this.page.fill(this.lastNameInput, shippingData.lastName);
        await this.page.fill(this.addressInput, shippingData.address);
        await this.page.fill(this.provinceInput, shippingData.province);
        await this.page.fill(this.postCodeInput, shippingData.postCode);
    }

    async submitShipping() {
        await this.page.click(this.continueBtn);
    }

    async expectOrderSuccess() {
        await expect(this.page.locator(this.confirmationMessage)).toBeVisible();
    }
}
