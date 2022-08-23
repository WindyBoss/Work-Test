/** @format */

import {
  DropDownContainer,
  Switcher,
  SwitcherContainer,
} from "./CurrencySwitcher.styled";

import CurrencyContainer from "../CurrencyContainer";
import DropDownHeader from "../DropDownHeader";

export default function CurrencySwitcher({
  onClick,
  isOpen,
  currencySymbol,
  currencies,
  setCurrency,
}) {
  return (
    <SwitcherContainer>
      <Switcher onClick={() => onClick()}>
        <DropDownContainer>
          <DropDownHeader
            isOpen={isOpen}
            chosenCurrencySymbol={currencySymbol}
          />
          {isOpen && (
            <CurrencyContainer currencies={currencies} onClick={setCurrency} />
          )}
        </DropDownContainer>
      </Switcher>
    </SwitcherContainer>
  );
}
