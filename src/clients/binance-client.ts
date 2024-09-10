import ky from "ky";
import { binanceTradesResponseSchema } from "../dtos/binance-dtos";

const BASE_URL = "https://data-api.binance.vision";

export const binanceClient = {
  getCurrentTransactions: async ({
    symbol,
    limit,
  }: {
    symbol: string;
    limit: number;
  }) => {
    const data = await ky
      .get("api/v3/trades", {
        prefixUrl: BASE_URL,
        searchParams: {
          symbol,
          limit,
        },
      })
      .json();

    return binanceTradesResponseSchema.parse(data);
  },
};
