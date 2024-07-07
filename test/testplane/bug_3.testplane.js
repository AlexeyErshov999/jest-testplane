it("Каталог не отображается", async function ({ browser }) {
    await browser.url('http://localhost:3000/hw/store/catalog/1')
    const productImage = await browser.$(".Image");
    await productImage.waitForExist();
    expect(productImage).not.toBe("LOADING");
});