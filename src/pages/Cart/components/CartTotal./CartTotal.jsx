/** @format */

import findTotalAmount from "helpers/findTotalAmount";

import {
    TotalContainer,
    TotalEl,
    TotalAmount,
    Symbol,
  } from "./CartTotal.styled";

export default function CartTotal({ symbol, cart, currency }) {
  return (
    <div>
      <TotalContainer>
          <TotalEl>
            Tax 21%
            <TotalAmount>
              <Symbol>{symbol}</Symbol>
              {Math.round(findTotalAmount(cart, currency) * 0.21 * 100) / 100}
            </TotalAmount>
          </TotalEl>
          <TotalEl>
            Quantity
            <TotalAmount>
              {cart.reduce((acc, item) => acc + item.amount, 0)}
            </TotalAmount>
          </TotalEl>
          <TotalEl>
            Total
            <TotalAmount>
              <Symbol> {symbol}</Symbol>
              {findTotalAmount(cart, currency)}
            </TotalAmount>
          </TotalEl>
      </TotalContainer>
    </div>
  );
}
