import React from "react";
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Application } from "../../src/client/Application";
import exp from "constants";

test('для каждого товара должны отображаться название, цена, количество , стоимость, а также должна отображаться общая сумма заказа', () => {
  const initState = {
    cart: [
      { id: 1, name: "name1", price: 10, count: 2 },
      { id: 2, name: "name2", price: 20, count: 4 },
    ],
    products: [
      { id: 1, name: "name1", price: 10 },
      { id: 2, name: "name2", price: 20 },
      { id: 3, name: "name3", price: 30 },
    ],
  };
      const store = createStore(() => initState);

      render(
        <BrowserRouter basename={"/"}>
          <Provider store={store}>
            <Application />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByRole('link', {name: 'Cart (2)'})).toBeInTheDocument();
})