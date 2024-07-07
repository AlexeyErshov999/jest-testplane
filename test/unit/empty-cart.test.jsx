import React from "react";
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Cart } from "../../src/client/pages/Cart";


it("Если корзина пустая - отображается ссылка на каталог товаров", async () => {
    const initState = {
      cart: {},
    };
    const store = createStore(() => initState);

    render(
      <BrowserRouter basename={"/"}>
        <Provider store={store}>
          <Cart />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.queryByRole("link", { name: "catalog" })).toHaveAttribute(
      "href",
      "/catalog"
    );
  });