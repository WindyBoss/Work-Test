/** @format */

import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";
import withRouter from "helpers/withRouter";

import { getCategory } from "service/apolloClient";

import MainContainer from "components/MainContainer";
import { CategoryTitle } from "./CategoryPage.styled";
import ProductList from "./components/ProductList";
class CategoryPage extends PureComponent {
  state = {
    chosenCategory: null,
  };

  async componentDidUpdate(prevProps) {
    const { params } = this.props;

    if (prevProps.params.categoryId !== params.categoryId) {
      await this.makeFetch();
    }
  }

  async componentDidMount() {
    await this.makeFetch();
  }

  async makeFetch() {
    const { params } = this.props;

    const data = await getCategory(params.categoryId);
    this.setState({
      chosenCategory: data.category,
    });
  }

  render() {
    const { currency, setProduct } = this.props;
    const { chosenCategory } = this.state;

    return (
      <MainContainer>
        {chosenCategory && (
          <>
            <CategoryTitle>{chosenCategory.name}</CategoryTitle>
            <ProductList
              category={chosenCategory}
              currency={currency}
              setProduct={setProduct}
            />
          </>
        )}
        <Outlet />
      </MainContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency.currency,
  };
};

export default connect(mapStateToProps)(withRouter(CategoryPage));
