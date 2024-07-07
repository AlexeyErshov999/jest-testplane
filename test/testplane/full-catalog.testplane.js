
describe("В каталоге отображается список товаров, который приходит с сервера", () => {
    it("Главная", async ({browser}) => {
        await browser.url("http://localhost:3000/hw/store/catalog");
        const products = await Promise.all(
            await browser.$$('.card').map(prod => prod)
        )
        expect(products).toHaveLength(27)
    });
});
