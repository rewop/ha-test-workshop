import * as React from "react";
import { render } from "enzyme";
import NotFound from "./NotFound";

function rednerTest(element: JSX.Element) {
  const wrapper = render(element);
  return {
    getTitle: () => wrapper.find("[data-test-locator=title]")
  };
}

describe("Page - <NotFound />", () => {
  it("should render the page correctly", () => {
    const { getTitle } = rednerTest(<NotFound />);
    const title = getTitle();
    expect(title.is("h1")).toBe(true);
    expect(title.text()).toEqual("Not found");
  });
});
