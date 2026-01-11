import { expect } from "@playwright/test";

export class HomePage {
    constructor(page) {
        this.page = page;
        this.checkoutBtn = this.page.locator("div.buy-btn", { hasText: "Checkout" });
    }

    async open() {
        await this.page.goto("https://bstackdemo.com/", { waitUntil: "domcontentloaded" });
    }

    addToCartButtonById(id) {
        return this.page.locator(`[id="${id}"] .shelf-item__buy-btn`);
    }

    async addItemToCartById(id) {
        await this.addToCartButtonById(id).click();
    }

    async goToCheckout() {
        await expect(this.checkoutBtn).toBeVisible({ timeout: 5000 });
        await this.checkoutBtn.scrollIntoViewIfNeeded();
        await this.checkoutBtn.click();
    }
}
