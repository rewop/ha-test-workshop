import { newApi } from "./api";

export type Api = ReturnType<typeof newApi>;

export enum Currency {
  EUR = "EUR",
  USD = "USD"
}

export interface Listing {
  id: number;
  title: string;
  description: string;
  image: string;
  price: numnber;
  currency: Currency;
}

export interface NewListingPayload {
  title: string;
  description: string;
  price: number;
  currency: Currency;
}
