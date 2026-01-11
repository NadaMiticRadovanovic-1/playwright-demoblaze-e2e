export class LoginPage {
    constructor(page) {
        this.page = page;

        this.usernameInput = "#react-select-2-input";
        this.passwordInput = "#react-select-3-input";
        this.loginBtn = "#login-btn";
    }

    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.keyboard.press("Enter");

        await this.page.fill(this.passwordInput, password);
        await this.page.keyboard.press("Enter");

        await this.page.click(this.loginBtn);
    }
}
