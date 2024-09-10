import { useGetCurrentTransactions } from "../hooks/useGetCurrentTransactions";
import { Chart } from "./Chart";

type Props = {
  primarySymbol: string;
  secondarySymbol: string;
};

export function TransactionChart({ primarySymbol, secondarySymbol }: Props) {
  const { currentTransactions, error, isLoading } = useGetCurrentTransactions({
    limit: 1000,
    symbol: primarySymbol + secondarySymbol,
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

  return (
    <div className="w-full h-96">
      <Chart
        data={{
          title: {
            text: `Binance Transaction Chart (${primarySymbol} in ${secondarySymbol})`,
          },
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            data: currentTransactions.map((value) =>
              formatDate(new Date(value.time))
            ),
          },
          yAxis: {
            min: Math.min(
              ...currentTransactions.map((value) => Number(value.price))
            ),
            name: `Price (in ${secondarySymbol})`,
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
    timeStyle: "short",
    dateStyle: "short",
  }).format(date);
}
