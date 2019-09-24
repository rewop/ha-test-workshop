import { NewListingPayload, Listing, Currency } from "./types";

export function newApi() {
  let nextId = 1;
  let listings: Listing[] = [
    {
      id: 1,
      title: "Ijsclubstraat 60A, Rotterdam",
      description: "Furnished 60 sqm apartment",
      image: "https://picsum.photos/id/177/400/200?blur=5",
      currency: Currency.EUR,
      price: 60000
    },
    {
      id: 2,
      title: "Kleiweg 58, Rotterdam",
      description: "Furnished 170 sqm apartment",
      image: "https://picsum.photos/id/160/400/200?blur=5",
      currency: Currency.EUR,
      price: 40000
    }
  ];

  return {
    getListings: () => {
      return Promise.resolve(listings);
    },

    postListing: (listingPayload: NewListingPayload) => {
      const newListing: Listing = {
        id: nextId,
        image: "https://picsum.photos/id/668/200/300",
        ...listingPayload
      };

      listings = [...listings, newListing];
      nextId = nextId + 1;

      return Promise.resolve(newListing);
    },

    // just needed for tests
    // this wouldn't exist in real code
    __set_listings__: (listingMocks: Listing[]) => {
      listings = listingMocks;
    }
  };
}
