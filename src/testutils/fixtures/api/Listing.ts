import { newFixture, newIdGenerator } from "../fixture";
import { Listing, Currency, NewListingPayload } from "../../../api/types";

export function newListingFactory() {
  const generateId = newIdGenerator();

  return () =>
    newFixture<Listing>({
      id: generateId(),
      price: 20000,
      currency: Currency.EUR,
      image: "https://picsum.photos/id/668/200/300",
      title: "A title",
      description: "A description"
    });
}
