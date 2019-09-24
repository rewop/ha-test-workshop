import { newListingFactory } from "../testutils/fixtures/api/Listing";

import { newApi } from "./api";
import { NewListingPayload, Currency } from "./types";

describe("api", () => {
  const newListing = newListingFactory();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getListings", () => {
    it("should load listings", async () => {
      let listings = [
        newListing().build(),
        newListing().build(),
        newListing().build()
      ];

      // In real cases we would mock fetch
      //
      // const fetchMock = jest.fn();
      // fetchMock.mockResolvedValue({
      //   json: () =>
      //     Promise.resolve({
      //       data: listings
      //     }),
      //   status: 200
      // });

      const api = newApi();
      api.__set_listings__(listings);

      const result = await api.getListings();

      expect(result).toEqual(listings);
    });
  });

  describe("postListing", async () => {
    const payload: NewListingPayload = {
      currency: Currency.EUR,
      description: "My description",
      price: 30000,
      title: "My Listing"
    };

    const api = newApi();
    const response = await api.postListing(payload);
    expect(response).toEqual(expect.objectContaining(payload));
    expect(response.id).toBeDefined();
  });
});
