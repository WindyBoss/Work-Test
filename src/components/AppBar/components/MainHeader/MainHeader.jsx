/** @format */
import { createPortal } from "react-dom";
import React from "react";

import {
  Header,
  AppBarRightPanel,
  ItemAmount,
  CartIconContainer,
} from "./MainHeader.styled";

import ModalCart from "components/ModalCart";
import Navigation from "../Navigation";
import CurrencySwitcher from "../CurrencySwitcher";
import { ReactComponent as CartIcon } from "images/cart.svg";

const modalRoot = document.querySelector("#modal-root");

export default function MainHeader({
  categories,
  isOpen,
  currencySymbol,
  toggleCart,
  cartShown,
  currencies,
  setCurrency,
  toggleCurrency,
  toggleModal,
  itemAmount,
}) {
  return createPortal(
    <Header>
      <Navigation categories={categories} />
      <AppBarRightPanel>
        <CurrencySwitcher
          onClick={toggleCurrency}
          isOpen={isOpen}
          currencySymbol={currencySymbol}
          currencies={currencies}
          toggleModal={toggleModal}
          setCurrency={setCurrency}
        />
        <CartIconContainer onClick={() => toggleCart()}>
          <CartIcon id="icon-shopping-cart" />
          {itemAmount > 0 && <ItemAmount>{itemAmount}</ItemAmount>}
        </CartIconContainer>
      </AppBarRightPanel>
      {cartShown && <ModalCart onClose={toggleCart} />}
    </Header>,
    modalRoot
  );
}
