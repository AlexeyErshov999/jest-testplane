it("если товар уже добавлен в корзину, в каталоге и на странице товара должно отображаться сообщение об этом", async function ({
    browser,
  }) {
    await browser.url("http://localhost:3000/hw/store/cart");

    const cartSectionInNavBarText = await browser.$(".nav-link.active").getText();

    if (cartSectionInNavBarText.includes("(")) {
      const cartClearButton = await browser.$(".Cart-Clear");
      await cartClearButton.waitForDisplayed();
      await cartClearButton.click();
    }

    await browser.url("http://localhost:3000/hw/store/catalog");

    const testCard = await browser.$$(".ProductItem")[0];
    await testCard.waitForDisplayed();

    const testCardLinkEl = await testCard.$(
      ".ProductItem-DetailsLink"
    );
    await testCardLinkEl.waitForDisplayed();

    const testCardLink = await testCardLinkEl.getAttribute("href");

    await browser.url("http://localhost:3000" + testCardLink);

    const testCardButton = await browser.$(".btn-lg");
    await testCardButton.waitForDisplayed();
    await testCardButton.click();

    const testCardDetailsBadge = await browser.$(".text-success");
    await testCardDetailsBadge.waitForDisplayed();

    await browser.url("http://localhost:3000/hw/store/catalog");

    const testCardBadge = await browser.$(".text-success");
    await testCardBadge.waitForDisplayed();
  });