it("На странице с подробной информацией отображаются: название товара, его описание, цена, цвет, материал и кнопка 'добавить в корзину'", async ({
  browser,
}) => {
  await browser.url("http://localhost:3000/hw/store/catalog/0");
  expect(browser.$(".ProductDetails-Name")).toHaveText(/\w+/);
  expect(browser.$(".ProductDetails-Description")).toHaveText(/\w+/);
  expect(browser.$(".ProductDetails-Price")).toHaveText(/\d+/);
  expect(browser.$(".ProductDetails-Color")).toHaveText(/\w+/);
  expect(browser.$(".ProductDetails-Material")).toHaveText(/\w+/);
  expect(browser.$(".btn")).toHaveText(/add to cart/i);
});
