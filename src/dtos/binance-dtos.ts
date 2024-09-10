import { z } from "zod";

export const binanceTradesResponseSchema = z.array(
  z.object({
    id: z.number(),
    price: z.string(),
    qty: z.string(),
    quoteQty: z.string(),
    time: z.number(),
    isBuyerMaker: z.boolean(),
    isBestMatch: z.boolean(),
  })
);

export type BinanceTradesResponse = z.infer<typeof binanceTradesResponseSchema>;
