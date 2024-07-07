
describe("На сайте есть страницы:", () => {
    it("Главная", async ({browser}) => {
        await browser.url("http://localhost:3000/hw/store");
        await expect(browser.$(".display-3")).toHaveText("Welcome to Kogtetochka store!");
    });

    it("Каталог", async ({browser}) => {
        await browser.url("http://localhost:3000/hw/store/catalog");
        await expect(browser.$$('h1')).toHaveText("Catalog");
    });

    it("Условия доставки", async ({browser}) => {
        await browser.url("http://localhost:3000/hw/store/delivery");
        await expect(browser.$$('h1')).toHaveText("Delivery");
    });

    it("Контакты", async ({browser}) => {
        await browser.url("http://localhost:3000/hw/store/contacts");
        await expect(browser.$$('h1')).toHaveText("Contacts");
    });
});
