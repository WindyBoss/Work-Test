/** @format */
import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import { getAllCategories } from "service/apolloClient";

import { setCurrency } from "redux/currency/currencySlice";
import { connect } from "react-redux";

import MainHeader from "./components/MainHeader";

class AppBar extends Component {
  state = {
    categories: [],
    currencies: [],
    isOpen: false,
    chosenCurrency: this.props.currency.currency,
    cartShown: false,
  };

  async componentDidMount() {
    const data = await getAllCategories();
    this.setState({ categories: data.categories, currencies: data.currencies });
  }

  componentDidUpdate(prevProps) {
    const currentCurrency = this.props.currency.currency;
    const prevCurrency = prevProps.currency.currency;

    if (prevCurrency.symbol !== currentCurrency.symbol) {
      this.setState({ chosenCurrency: currentCurrency });
    }
  }

  toggleCurrency() {
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen };
    });
  }

  toggleCart() {
    const { cartShown } = this.state;
    this.setState((prevState) => {
      return { cartShown: !prevState.cartShown, isOpen: cartShown && false };
    });
  }

  chooseCurrency(currency) {
    this.setState({ chosenCurrency: currency });
  }

  render() {
    const { categories, currencies, isOpen, chosenCurrency, cartShown } =
      this.state;
    const { setCurrency, cart } = this.props;
    const itemAmount = cart.reduce((acc, item) => acc + item.amount, 0);

    return (
      <div>
        <MainHeader
          categories={categories}
          isOpen={isOpen}
          currencySymbol={chosenCurrency.symbol}
          toggleCart={this.toggleCart.bind(this)}
          cartShown={cartShown}
          currencies={currencies}
          setCurrency={setCurrency}
          toggleCurrency={this.toggleCurrency.bind(this)}
          itemAmount={itemAmount}
        />
        <Outlet />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currency,
  cart: state.cart.cart,
});

const mapDispatchToProps = { setCurrency };

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
