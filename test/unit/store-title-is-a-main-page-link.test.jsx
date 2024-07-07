import React from "react";
import { render } from "@testing-library/react";
import { Application } from "../../src/client/Application";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

test("Название магазина в шапке - ссылка на главную страницу", () => {
  const initState = {
    cart: {},
  };
  const store = createStore(() => initState);
  const { getByText } = render(
    <BrowserRouter>
      <Provider store={store}>
        <Application />
      </Provider>
    </BrowserRouter>
  );
  const linkElement = getByText("Kogtetochka store");
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute("href", "/");
});
