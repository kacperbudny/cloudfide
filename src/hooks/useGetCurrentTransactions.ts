import { useQuery } from "@tanstack/react-query";
import { binanceClient } from "../clients/binance-client";

type Props = {
  symbol: string;
  limit: number;
};

export function useGetCurrentTransactions({ symbol, limit }: Props) {
  const { getCurrentTransactions } = binanceClient;

  const { data, isLoading, error } = useQuery({
    queryKey: [getCurrentTransactions.name],
    queryFn: async () => {
      return await getCurrentTransactions({ symbol, limit });
    },
  });

  return { currentTransactions: data, isLoading, error };
}
