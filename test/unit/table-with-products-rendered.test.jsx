import React from "react";
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Cart } from "../../src/client/pages/Cart";

test('В корзине должна отображаться таблица с добавленными в нее товарами', () => {
    const initState = {
        cart: {
            0: {name: 'name', price: 3000, count: 3}
        },
      };
      const store = createStore(() => initState);

      render(
        <BrowserRouter basename={"/"}>
          <Provider store={store}>
            <Cart />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByRole('heading', { name: 'Shopping cart' })).toBeInTheDocument();
      expect(screen.getByRole('columnheader', { name: 'Product' })).toBeInTheDocument();
      expect(screen.getByRole('rowheader', { name: '1' })).toBeInTheDocument();
})