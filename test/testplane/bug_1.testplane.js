it("Имя товара не отображается в каталоге", async function ({ browser }) {
    await browser.url("http://localhost:3000/hw/store/catalog");
    const titleOfProduct = await browser.$(".card-title");
    await titleOfProduct.waitForDisplayed();
    const displayedName = await titleOfProduct.getText();
    expect(displayedName).not.toBeFalsy()
});