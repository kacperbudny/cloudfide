import { useQuery } from "@tanstack/react-query";
import { binanceClient } from "../clients/binance-client";

type Props = {
  symbol: string;
  limit: number;
};

const ONE_MINUTE_IN_MILLISECONDS = 1000 * 60; // this could come as a argument

export function useGetCurrentTransactions({ symbol, limit }: Props) {
  const { getCurrentTransactions } = binanceClient;

  const { data, isLoading, error } = useQuery({
    queryKey: [getCurrentTransactions.name],
    queryFn: async () => {
      return await getCurrentTransactions({ symbol, limit });
    },
    refetchInterval: ONE_MINUTE_IN_MILLISECONDS,
  });

  return { currentTransactions: data, isLoading, error };
}
