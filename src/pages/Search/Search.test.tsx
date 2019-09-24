import * as React from "react";
import { act } from "react-dom/test-utils";
import { mount } from "enzyme";
import { ApiProvider, Api, newApi } from "../../api";
import { newListingFactory } from "../../testutils/fixtures/api/Listing";
import Search from "./Search";

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

    const renderedWrapper = wrapper.render();
    // todo test listing cards
  });

  it("should render empty results in location", () => {});
});
