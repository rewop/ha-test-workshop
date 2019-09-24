import * as React from "react";
import { render } from "enzyme";

import { ApiProvider, ApiConsumer } from "./ApiContext";
import { newApi } from "./api";

describe("modules - ApiContext", () => {
  it("should provide the api to the consumer", () => {
    const renderFn = jest.fn(() => <span />);

    const api = newApi();

    render(
      <ApiProvider value={api}>
        <div>
          <ApiConsumer>{renderFn}</ApiConsumer>
        </div>
      </ApiProvider>
    );

    expect(renderFn).toHaveBeenCalledWith(api);
  });
});
