/** @format */

import { QuantityBtn, CounterContainer } from "./Counter.styled";

export default function Counter({
  handleIncrement,
  handleDecrement,
  product,
  value,
  idx,
  size,
}) {
  return (
    <CounterContainer size={size}>
      <QuantityBtn
        size={size}
        onClick={() => handleIncrement({ ...product, idx: idx })}
      >
        +
      </QuantityBtn>
      <p>{value}</p>
      <QuantityBtn
        size={size}
        onClick={() => handleDecrement({ ...product, idx: idx })}
      >
        -
      </QuantityBtn>
    </CounterContainer>
  );
}
