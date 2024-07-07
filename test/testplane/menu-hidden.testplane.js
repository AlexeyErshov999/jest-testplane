it("на ширине меньше 576px навигационное меню должно скрываться за 'гамбургер'", async function ({ browser }) {
    await browser.setWindowSize(500, 900);
    await browser.url("http://localhost:3000/hw/store/contacts");
    const menu = await browser.$(".navbar-collapse");
    await menu.waitForExist();
    const menuIsDisp = await menu.isDisplayed();
    expect(menuIsDisp).toBe(false);
  });