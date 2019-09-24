import * as React from "react";
import { mount } from "enzyme";
import { ApiProvider, Api, newApi } from "../../api";
import { newListingFactory } from "../../testutils/fixtures/api/Listing";
import Search from "./Search";
import { CardMedia, Typography } from "@material-ui/core";

function renderTest(api: Api) {
  const wrapper = mount(
    <ApiProvider value={api}>
      <Search />
    </ApiProvider>
  );

  return {
    wrapper
  };
}

function wait(amount = 0) {
  return new Promise(resolve => setTimeout(resolve, amount));
}

// Use this in your test after mounting if you want the query to finish and update the wrapper
async function updateWrapper(wrapper, amount = 0) {
  await wait(amount);
  wrapper.update();
}

describe("Page - <Search />", () => {
  const newListing = newListingFactory();
  const listings = [
    newListing().build(),
    newListing().build(),
    newListing().build()
  ];

  const api = newApi();
  api.__set_listings__(listings);

  it("should render the results in search page", async () => {
    const { wrapper } = renderTest(api);

    // while loading should
    expect(wrapper.find('[data-test-locator="listing_skeleton"]')).toHaveLength(
      4
    );

    await updateWrapper(wrapper, 200);

    listings.forEach(listing => {
      const listingWrapper = wrapper.find({ key: listing.id });
      expect(
        listingWrapper
          .find(CardMedia)
          .filter({ image: listing.image, title: listing.title })
      ).toHaveLength(1);
      expect(
        wrapper
          .find(Typography)
          .filter({ component: "h2", children: listing.title })
      ).toHaveLength(1);
    });
  });

  it("should render empty results in location", () => {});
});
