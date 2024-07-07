it("содержимое корзины должно сохраняться между перезагрузками страницы", async function ({
    browser,
  }) {
    await browser.url("http://localhost:3000/hw/store/cart");

    const cartSectionInNavBarText = await browser.$(".nav-link.active").getText();

    if (cartSectionInNavBarText.includes("(")) {
      const cartClearButton = await browser.$(".Cart-Clear");
      await cartClearButton.waitForDisplayed();
      await cartClearButton.click();
    }

    await browser.url("http://localhost:3000/hw/store/catalog/0");

    const testCardButton = await browser.$(".ProductDetails-AddToCart");
    await testCardButton.waitForDisplayed();
    await testCardButton.click();

    await browser.url("http://localhost:3000/hw/store/cart");

    expect(browser.$('.h1')).toHaveText('Shopping cart');
    expect(browser.$('.th')).toHaveText('Product');

   await browser.refresh();

    expect(browser.$('.h1')).toHaveText('Shopping cart');
    expect(browser.$('.th')).toHaveText('Product');
  });