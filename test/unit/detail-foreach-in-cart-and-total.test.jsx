import React from "react";
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Cart } from "../../src/client/pages/Cart";

test('для каждого товара должны отображаться название, цена, количество , стоимость, а также должна отображаться общая сумма заказа', () => {
  const initState = {
    cart: [
      { id: 1, name: "name1", price: 3000, count: 2 },
      { id: 2, name: "name2", price: 6000, count: 3 },
    ]
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
      expect(screen.getByRole('rowheader', { name: '1' })).toBeInTheDocument();
      expect(screen.getByRole('rowheader', { name: '2' })).toBeInTheDocument();
      expect(screen.getByTestId('0')).toBeInTheDocument();
      expect(screen.getByTestId('0')).toHaveTextContent(/name1/i)
      expect(screen.getByTestId('1')).toBeInTheDocument()
      expect(screen.getByTestId('1')).toHaveTextContent(/name2/i)
      expect(screen.getByTestId('0')).toHaveTextContent('$3000')
      expect(screen.getByTestId('1')).toHaveTextContent('$6000')
      expect(screen.getByTestId('0')).toHaveTextContent('$6000')
      expect(screen.getByTestId('1')).toHaveTextContent('$18000')
      expect(screen.getByTestId('0')).toHaveTextContent('1')
      expect(screen.getByTestId('1')).toHaveTextContent('3')
      const total = screen.getByText(/order price/i);
      expect(total).toBeInTheDocument();
      expect(total).toHaveTextContent(/order price/i);
      expect(screen.getByText('$24000')).toBeInTheDocument();
})