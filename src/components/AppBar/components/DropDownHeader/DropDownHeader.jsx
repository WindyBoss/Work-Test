/** @format */

import { ReactComponent as Arrow } from "images/arrowUp.svg";
import { DropDownHeaderContainer } from "./DropDownHeader.styled";

export default function DropDownHeader({
  isOpen,
  chosenCurrencySymbol,
}) {
  return (
    <DropDownHeaderContainer>
      <p>{chosenCurrencySymbol}</p>
      <Arrow
        style={{
          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
        }}
      />
    </DropDownHeaderContainer>
  );
}
