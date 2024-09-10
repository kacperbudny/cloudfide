import { useGetCurrentTransactions } from "../hooks/useGetCurrentTransactions";
import { Chart } from "./Chart";

export function TransactionChart() {
  const { currentTransactions, error, isLoading } = useGetCurrentTransactions({
    limit: 100,
    symbol: "BTCUSDT",
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Something went wrong, please try again</span>;
  }

  if (!currentTransactions || currentTransactions.length === 0) {
    return <span>No data to be displayed</span>;
  }

  console.log(currentTransactions);

  return (
    <div className="w-full h-96">
      <Chart
        data={{
          title: {
            text: "Binance Transaction Chart",
          },
          tooltip: {},
          xAxis: {
            data: currentTransactions.map((value) =>
              formatDate(new Date(value.time))
            ),
          },
          yAxis: {
            min: Math.min(
              ...currentTransactions.map((value) => Number(value.price))
            ),
          },
          series: [
            {
              name: "Price",
              type: "line",
              data: currentTransactions.map((value) => value.price),
            },
          ],
        }}
      />
    </div>
  );
}

function formatDate(date: Date) {
  return Intl.DateTimeFormat(undefined, {
    timeStyle: "full",
    dateStyle: "short",
  }).format(date);
}
