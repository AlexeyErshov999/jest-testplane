import React from "react";
import { render } from "@testing-library/react";
import { Application } from "../../src/client/Application";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { ExampleApi } from "../../src/client/api";
import { CartApi } from "../../src/client/api";
import { initStore } from "../../src/client/store";
import { Provider } from "react-redux";

test("В шапке сайта отображаются ссылки", () => {
  const api = new ExampleApi("hw/store");
  const cart = new CartApi();
  cart.setState([{}]);

  const mockStore = initStore(api, cart);
  const { getByText } = render(
    <BrowserRouter>
      <Provider store={mockStore}>
        <Application />
      </Provider>
    </BrowserRouter>
  );
  const catalog = getByText(/catalog/i);
  const delivery = getByText(/delivery/i);
  const contacts = getByText(/contacts/i);
  const cart_link = getByText(/cart/i);
  expect(catalog).toBeInTheDocument();
  expect(catalog).toHaveAttribute("href", "/catalog");
  expect(delivery).toBeInTheDocument();
  expect(delivery).toHaveAttribute("href", "/delivery");
  expect(contacts).toBeInTheDocument();
  expect(contacts).toHaveAttribute("href", "/contacts");
  expect(cart_link).toBeInTheDocument();
  expect(cart_link).toHaveAttribute("href", "/cart");
});
