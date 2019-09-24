import faker from "faker";
import { newFixture, newIdGenerator } from "../fixture";
import { Listing, Currency } from "../../../api/types";

export function newListingFactory() {
  const generateId = newIdGenerator();

  return () =>
    newFixture<Listing>({
      id: generateId(),
      price: faker.finance.amount(),
      currency: Currency.EUR,
      image: faker.image.cats(),
      title: faker.lorem.text(),
      description: faker.lorem.sentences()
    });
}
