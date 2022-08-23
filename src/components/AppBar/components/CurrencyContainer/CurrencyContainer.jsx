/** @format */

import {
  DropDownListContainer,
  DropDownList,
  ListItem,
  CurrencySymbol,
} from "./CurrencyContainer.styled";

export default function CurrencyContainer({ currencies, onClick }) {
  return (
    <>
      <DropDownListContainer>
        <DropDownList>
          {currencies.map((currency) => {
            return (
              <ListItem
                key={currency.label}
                value={currency.label}
                onClick={() => onClick(currency)}
              >
                <CurrencySymbol>{currency.symbol}</CurrencySymbol>
                {currency.label}
              </ListItem>
            );
          })}
        </DropDownList>
      </DropDownListContainer>
    </>
  );
}
