import * as React from "react";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router";
import { mount } from "enzyme";

import { ApiContext, newApi } from "./api";
import Root from "./Root";
import Notfound from "./pages/NotFound";
import Search from "./pages/Search";

function renderTest(pathname: string = "/") {
  let wrapper;

  act(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={[pathname]}>
        <ApiContext.Provider value={newApi()}>
          <Root />
        </ApiContext.Provider>
      </MemoryRouter>
    );
  });

  return {
    hasRoute: (routeName: React.Component | React.SFC) => {
      return wrapper.find(routeName).length > 0;
    }
  };
}

// Here we could add tests related to common navigation,
// like footer, or nav bars
describe("Root", () => {
  it("shuld render NotFound if the pathname doesn't match any route", () => {
    const { hasRoute } = renderTest("/foo-bar-not-found");
    expect(hasRoute(Notfound)).toBe(true);
  });

  it("shuld render Search page if pathname is /", () => {
    const { hasRoute } = renderTest("/");

    expect(hasRoute(Notfound)).toBe(false);
    expect(hasRoute(Search)).toBe(true);
  });
});
