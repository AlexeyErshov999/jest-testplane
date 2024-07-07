import React from "react";
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { fireEvent } from "@testing-library/react";
import { CartApi, ExampleApi } from '../../src/client/api'
import { initStore } from '../../src/client/store'
import { Application } from '../../src/client/Application'


it("По нажатию на кнопку очистки корзины все товары удаляются", async () => {
  const initState = {
    0: { name: "name1", count: 1, price: 100 },
    1: { name: "name2", count: 2, price: 200 },
    2: { name: "name3", count: 3, price: 300 },
  };

  const api = new ExampleApi("/hw/store");
  const cart = new CartApi();
  cart.setState(initState);
  const store = initStore(api, cart);

  render(
    <MemoryRouter initialEntries={['/cart']}>
      <Provider store={store}>
        <Application />
      </Provider>
    </MemoryRouter>
  );

  const button = screen.getByRole("button", { name: /Clear shopping cart/i });
  expect(button).toBeInTheDocument();
  expect(screen.queryByText("name1")).toBeInTheDocument();
  expect(screen.queryByText("name2")).toBeInTheDocument();
  expect(screen.queryByText("name3")).toBeInTheDocument();
  await fireEvent.click(button);
  expect(screen.queryByText("name1")).not.toBeInTheDocument();
  expect(screen.queryByText("name2")).not.toBeInTheDocument();
  expect(screen.queryByText("name3")).not.toBeInTheDocument();
});