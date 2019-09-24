import { NewListingPayload, Listing } from "./types";

export function newApi() {
  let nextId = 1;
  let listings: Listing[] = [];

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
    __set_listings__: (listingMOcks: Listing[]) => {
      listings = listingMOcks;
    }
  };
}
