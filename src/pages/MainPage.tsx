import { TransactionChart } from "../components/TransactionChart";

export function MainPage() {
  return (
    <>
      <TransactionChart primarySymbol="BTC" secondarySymbol="USDT" />
      <TransactionChart primarySymbol="ETH" secondarySymbol="USDT" />
    </>
  );
}
