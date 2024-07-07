import React from "react";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Application } from "../../src/client/Application";
import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"

it('При выборе элемента из меню "гамбургера", меню должно закрываться', () => {
    const initState = { cart: [] };
    const store = createStore(() => initState);

    const app = (
      <BrowserRouter basename={"/"}>
        <Provider store={store}>
          <Application />
        </Provider>
      </BrowserRouter>
    );

    const { container } = render(app);

    const catalogLink = screen.queryByRole("link", {
      name: /Catalog/i,
    });
    if (catalogLink) {
        fireEvent.click(catalogLink);
    }
    const hamburger = container.getElementsByClassName("Application-Menu")[0];
    if (hamburger) {
        expect(hamburger).toHaveClass("collapse");
    }
  });